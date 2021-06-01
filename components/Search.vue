<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="geneanums">
    <ais-configure :attributesToSnippet="['bodyPlainText']" :hits-per-page.camel="5" />
    <ais-autocomplete v-click-outside="onClickOutside">
      <div slot-scope="{ currentRefinement, indices, refine }" class="md:relative">
        <div class="relative">
          <font-awesome-icon :icon="['fas', 'search']" class="absolute h-4 text-gray-400 mt-3 ml-3" />
          <input
            type="search"
            ref="searchInput"
            class="w-full py-2 px-4 pl-10 bg-gray-100 rounded"
            :value="currentRefinement"
            @input="refine($event.currentTarget.value)"
            placeholder="Search - Ctrl+K to focus"
            autocomplete="off"
            @focus="showResults = true"
            @keydown.up.prevent="highlightPrevious(indices[0].hits.length)"
            @keydown.down.prevent="highlightNext(indices[0].hits.length)"
            @keydown.enter="goToArticle(indices)"
          >
        </div>
        <div v-if="currentRefinement.length && showResults" class="absolute right-0 z-10 transform mt-3 px-2 w-screen max-w-md sm:px-0">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="relative grid gap-6 bg-white text-gray-700 px-4 py-4 sm:gap-8 sm:p-4">
              <div v-if="currentRefinement" v-for="section in indices" :key="section.objectID" class="divide-y divide-gray-300">
                <div v-if="section.hits.length">
                  <h2 class="uppercase text-gray-700 py-1 px-2">{{ section.indexName }}</h2>
                </div>
                <NuxtLink to="#" v-for="(hit, index) in section.hits" :key="hit.objectID"
                          class="block text-sm col-span-2 py-2 transition ease-in-out duration-150"
                          :class="{ 'bg-gray-100': isCurrentIndex(index) }">
                  <div class="px-2" @mouseover="highlightedIndex = index">
                    <ais-highlight attribute="title" :hit="hit" class="block text-gray-600 font-semibold tracking-wide" />
                    <ais-snippet attribute="bodyPlainText" :hit="hit" class="block text-gray-400 font-base" />
                  </div>
                </NuxtLink>
              </div>
              <ais-powered-by theme="light" class="px-2" />
            </div>
          </div>
        </div>
      </div>
    </ais-autocomplete>
  </ais-instant-search>
</template>

<script>
import Vue from 'vue';
import algoliasearch from 'algoliasearch/lite';
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      searchClient: algoliasearch ('2R81LPS2AZ', '4e36d72cdd3978ce8379a0502132ab03'),
      showResults: false,
      highlightedIndex: -1,
      isLoading: true
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('keydown', event => {
        if((event.metaKey || event.ctrlKey) && event.key === 'k') {
          this.$refs.searchInput.focus()
          event.preventDefault()
        }
        this.isLoading = false
      })
    })
  },
  watch: {
    '$route' () {
      this.showResults = false
      this.$refs.searchInput.blur()
    }
  },
  methods: {
    onClickOutside() {
      this.showResults = false
    },
    highlightPrevious(resultsCount) {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1
      } else {
        this.highlightedIndex = resultsCount - 1
      }
    },
    highlightNext(resultsCount) {
      if (this.highlightedIndex < resultsCount - 1) {
        this.highlightedIndex += 1
      } else {
        this.highlightedIndex = 0
      }
    },
    isCurrentIndex(index) {
      return index === this.highlightedIndex
    },
    goToArticle(indices) {
      this.$nuxt.$router.push('/people/' + indices[0].hits[this.highlightedIndex].objectID)
    }
  }
}
</script>
<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
</style>
