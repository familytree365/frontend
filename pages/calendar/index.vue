<template>
    <div>
        <div class="columns is-gapless is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="is-size-4 has-text-black">
                            <span class="has-text-weight-medium">Calendar</span>
                        </h1>
                    </div>
                    <div class="column is-12">
                        <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                            <ul>
                                <li><a class="is-size-7 has-text-weight-medium has-text-link"
                                        href="dashboard.html">Home</a></li>
                                <li class="is-size-7 has-text-weight-medium is-active"><a href="dashboard.html"
                                        aria-current="page">Calendar</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="columns is-variable is-3 is-desktop is-flex-desktop-only ai--s" style="height: 550px;">
                    <div class="column is-3 is-flex-desktop-only ai--s">
                        <div class="columns is-gapless is-multiline is-flex-desktop-only ai--s" style="height: 100%;">
                            <div class="column is-12 is-flex-desktop-only ai--s">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-header">
                                        <div class="card-header-title has-text-black">
                                            Calendar
                                        </div>
                                    </div>
                                    <div class="card-content is-flex jc--sb">
                              <vue-cal
    class="vuecal--rounded-theme vuecal--green-theme"
    xsmall
    hide-view-selector
    :time="false"
    active-view="month"
    :disable-views="['week']"
    style="width: 270px;height: 300px">
</vue-cal>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-9">
                        <div class="card has-background-white has-text-black">
                            <div class="card-header">
                                <div class="card-header-title has-text-black">
                                    Calendar
                                </div>
                            </div>
                            <div class="card-content is-flex jc--sb">
                            <vue-cal style="height: 600px" selected-date="2018-11-19"
          :time-from="9 * 60"
          :time-to="23 * 60"
          events-on-month-view="short"
          :editable-events="{ title: true, drag: false, resize: true, delete: true, create: false }"
          :disable-views="['years', 'year']"
          :events="events" />

                            </div>
                        </div>
                    </div>
                </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { mapGetters } from 'vuex'
export default {
    layout: 'auth',
    components: { VueCal },
    data() {
      const month = new Date().getMonth();
    const year = new Date().getFullYear();
      return {
          events: [
    {
      start: '2018-11-21 14:00',
      end: '2018-11-21 18:00',
      title: 'Need to go shopping',
      content: '<i class="v-icon material-icons">shopping_cart</i>',
      class: 'leisure'
    },
    {
      start: '2018-11-21 11:00',
      end: '2018-11-21 12:00',
      title: 'Golf with John',
      content: '<i class="v-icon material-icons">golf_course</i>',
      class: 'sport'
    },
    {
      start: '2018-11-22 09:00',
      end: '2018-11-22 09:30',
      title: 'Dad\'s birthday!',
      content: '<i class="v-icon material-icons">cake</i>',
      class: 'sport'
    }
  ]

      }
    },
    computed: {
        ...mapGetters(['loggedInUser'])
    },
}
</script>
<style>
  /* Green-theme. */
.vuecal__menu, .vuecal__cell-events-count {background-color: #42b983;}
.vuecal__title-bar {background-color: #e4f5ef;}
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell--selected:before {border-color: rgba(66, 185, 131, 0.5);}
/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.sport {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>
