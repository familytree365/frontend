
<template>

    <div class="columns is-variable is-3 is-desktop">
        <div class="column is-3">
            <div class="card has-background-white has-text-black">
                <header class="card-header">
                    <p class="card-header-title">
                        Filters
                    </p>
                </header>
                <div class="card-content">
                    <!-- Search Widget -->
                    <div class="my-4">
                        <h5 class="">Search</h5>
                        <div class="">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for...">
                                <span class="input-group-append">
                                    <button class="btn btn-secondary" type="button">Go!</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Categories Widget -->
                    <div class="my-4">
                        <h5 class="">Categories</h5>
                        <div class="">
                            <div class="columns">
                                <div v-for="cat in forumcategory" class="column is-6">
                                    <a href="#">{{cat.name}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="column">
            <div class="card has-background-white has-text-black">
                <header class="card-header">
                    <p class="card-header-title">
                        Forum Topics
                    </p>
                    <p class="card-header-icon">
                    <NuxtLink to="/forumtopic/create" class="button is-link has-background-primary">
                        Create New Topic</NuxtLink>
                    </p>
                </header>
                <div class="card-content">
                    <template>
                        
                        <div v-for="topic in forumtopics">
                            <a :href="'forum/topic/'+topic.slug">{{topic.title}}</a>
                            <p v-html="topic.content"></p>
                            <p><small>posted on: {{topic.created_at | formatDate}}</small></p>
                            <hr>
                        </div>
                    </template>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        layout: 'auth',
        data() {
            return {
                isLoading: false,
                totalRecords: 0,
                forumtopics: [],
                forumcategory: [],
                rows: [],
                serverParams: {
                    columnFilters: {

                    },
                    searchTerm: {
                        searchTerm: ''
                    },
                    sort: {
                        field: 'title',
                        type: 'asc',
                    },
                    page: 1,
                    perPage: 5
                },
                debounceId: null,
                debounceTimeout: 500,
            };
        },
        head() {
            return {
                link: [
                    {
                        rel: 'stylesheet',
                        href: 'https://cdn.datatables.net/1.10.22/css/dataTables.bulma.min.css'
                    }
                ]
            }
        },

        computed: {
             ...mapGetters([
              'isAuthenticated',
              'loggedInUser',
                    'getEvent'
            ])
        },

        methods: {
            ...mapActions([
                    'loadEvent',
                    'deleteEvent'
            ]),
            updateParams(newProps) {
                this.serverParams = Object.assign({}, this.serverParams, newProps);
            },
            onPageChange(params) {
                this.updateParams({page: params.currentPage});
                this.loadItems();
            },

            onPerPageChange(params) {
                this.updateParams({perPage: params.currentPerPage});
                this.loadItems();
            },

            onSortChange(params) {
                console.log(params);
                this.updateParams({
                    sort: [{
                            type: params[0].type,
                            field: params[0].field,
                        }],
                });
                this.loadItems();
            },

            onColumnFilter(params) {
                this.updateParams(params);
                this.loadItems();
            },
            onSearch({ searchTerm }) {
                this.updateParams({ searchTerm });
                clearTimeout(this.debounceId);
                this.debounceId = setTimeout(() => {
                    this.loadItems();
                    this.debounceId = null;
                }, 1000);
            },
            async loadItems() {
                const response = await this.$axios.$get("/api/forumtopic", {
                    params: this.serverParams
                })

                            this.totalRecords = response.total;
                            this.rows = response.data;
            },

            searchFunction(row, col, cellValue, searchTerm) {
                console.log(searchTerm);
            },
            deleteEvent(id) {
                if (confirm("Do you really want to delete?")) {

                    this.$axios
                            .$delete("/api/forumtopic/" + id)

                                this.loadItems();
                }
            },
        },
        async asyncData( { $axios, params }) {
            const forumtopics = await $axios.$get('/api/forumtopic')
            const forumcategory = await $axios.$get('/api/forumcategory')
            return {forumtopics: forumtopics, forumcategory: forumcategory}
        },

        created() {
            // this.loadEvent();
        },
    }

</script>

