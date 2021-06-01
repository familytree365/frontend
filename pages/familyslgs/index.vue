<template>
    <div>
        <div class="columns is-gapless is-multiline is-mobile">
            <div class="column is-12">
                <h1 class="is-size-4 has-text-black">
                    <span class="has-text-weight-medium">Hi {{ loggedInUser.first_name }}</span>, <span class="has-text-weight-light">
                        Welcome Back!</span>
                </h1>
            </div>
            <div class="column is-12">
                <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                    <ul>
                        <li><NuxtLink class="is-size-7 has-text-weight-medium has-text-link"
                               to="/dashboard">Home</NuxtLink></li>
                        <li class="is-size-7 has-text-weight-medium is-active"><a href="/dashboard"
                            aria-current="page">FamilySlgs</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="columns is-variable is-3 is-desktop">
            <div class="column">
                <div class="card has-background-white has-text-black">
                    <header class="card-header">
                        <p class="card-header-title">
                            FamilySlgs
                        </p>
                        <p class="card-header-icon">
                        <NuxtLink to="/familyslgs/create" class="button is-link has-background-primary">
                            Create New FamilySlgs</NuxtLink>
                        </p>
                    </header>
                    <div class="card-content">
                        <template>
                            <vue-good-table
                                mode="remote"
                                :columns="columns"
                                :rows="rows"
                                @on-page-change="onPageChange"
                                @on-sort-change="onSortChange"
                                @on-column-filter="onColumnFilter"
                                @on-per-page-change="onPerPageChange"
                                @on-search="onSearch"
                                :totalRows="totalRecords"
                                :isLoading.sync="isLoading"
                                :pagination-options="{
                                perPage: 5,
                                enabled: true,
                                mode: 'pages',

                                }"
                                :sort-options="{
                                enabled: true,
                                initialSortBy: {field: 'family_id', type: 'asc'}
                                }"
                                :line-numbers="true"
                                :search-options="{
                                enabled: true
                                }"
                                >
                                <template slot="table-row" slot-scope="props">
                                    <span v-if="props.column.field == 'action'">
                                        <NuxtLink :to="'familyslgs/' + rows[props.row.originalIndex].id" class="button is-link has-background-primary">
                                            Edit</NuxtLink>
                                        <button @click="deleteFamilySlgs(rows[props.row.originalIndex].id)" class="button is-danger">
                                            Delete</button>
                                    </span>

                                </template>
                            </vue-good-table>
                        </template>
                    </div>
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
                columns: [
                    {
                        label: 'Family',
                        field: 'family.description',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Filter Family Id', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                            filterFn: this.columnFilterFn, //custom filter function that

                        },
                    },
                    {
                        label: 'Stat',
                        field: 'stat',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Filter Stat', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                            filterFn: this.columnFilterFn, //custom filter function that
                        },
                    },
                    {
                        label: 'Date',
                        field: 'date',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Filter Date', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                            filterFn: this.columnFilterFn, //custom filter function that
                        },
                    },
                    {
                        label: 'Plac',
                        field: 'plac',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Filter Plac', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                            filterFn: this.columnFilterFn, //custom filter function that
                        },
                    },
                    {
                        label: 'Temp',
                        field: 'temp',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Filter Temp', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                            filterFn: this.columnFilterFn, //custom filter function that
                        },
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        sortable: false,
                        width: '250px',
                    },
                ],
                rows: [],
                serverParams: {
                    columnFilters: {

                    },
                    searchTerm: {
                        searchTerm: ''
                    },
                    sort: {
                        field: 'family_id',
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
                    'getFamilySlgs'
            ])
        },

        methods: {
            ...mapActions([
                    'loadFamilySlgs',
                    'deleteFamilySlgs'
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
                const response = await this.$axios.$get("/api/familyslgs", {
                    params: this.serverParams
                })

                            this.totalRecords = response.total;
                            this.rows = response.data;

            },

            searchFunction(row, col, cellValue, searchTerm) {
                alert("gg");
                console.log(searchTerm);
            },
            deleteFamilySlgs(id) {
                if (confirm("Do you really want to delete?")) {

                  const response = this.$axios.$delete("/api/familyslgs/" + id)

                  this.loadItems();
                }
            },
        },

        created() {
            // this.loadFamilySlgs();
        },
    }

</script>


