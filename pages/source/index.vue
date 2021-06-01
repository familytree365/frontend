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
                                aria-current="page">Source</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="columns is-variable is-3 is-desktop">
            <div class="column">
                <div class="card has-background-white has-text-black">
                     <header class="card-header">
                        <p class="card-header-title">
                          Source
                        </p>
                        <p class="card-header-icon">
                         <NuxtLink to="/source/create" class="button is-link has-background-primary">
                        Create New Source</NuxtLink>
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
                        initialSortBy: {field: 'name', type: 'asc'}
                    }"
                    :line-numbers="true"
                    :search-options="{
                        enabled: true
                    }"
                    >
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'action'">
                            <NuxtLink :to="'source/' + rows[props.row.originalIndex].id" class="button is-link has-background-primary">
                                Edit</NuxtLink>
                            <button @click="deleteSource(rows[props.row.originalIndex].id)" class="button is-danger">
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
                // {
                //     label: 'titl',
                //     field: 'titl',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter titl', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that

                //     },
                // },
                {
                    label: 'sour',
                    field: 'sour',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter sour', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that

                    },
                },
                // {
                //     label: 'auth',
                //     field: 'auth',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter auth', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that

                //     },
                // },
                // {
                //     label: 'data',
                //     field: 'data',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter data', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that

                //     },
                // },
                // {
                //     label: 'text',
                //     field: 'text',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter text', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that

                //     },
                // },
                // {
                //     label: 'publ',
                //     field: 'publ',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter publ', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that

                //     },
                // },
                // {
                //     label: 'abbr',
                //     field: 'abbr',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter publ', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that

                //     },
                // },
                {
                    label: 'Name',
                    field: 'name',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Name', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that

                    },
                },
                // {
                //     label: 'description',
                //     field: 'description',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter description', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that
                //     },
                // },
                {
                    label: 'repository',
                    field: 'repositories.name',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter repository id', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'author',
                    field: 'author.name',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter author id', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'publication',
                    field: 'publication.name',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter publication id', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'type id',
                    field: 'type.name',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter type id', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'is active',
                    field: 'is_active',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter is active', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                // {
                //     label: 'group',
                //     field: 'group',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter group', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that
                //     },
                // },
                // {
                //     label: 'gid',
                //     field: 'gid',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter gid', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that
                //     },
                // },
                // {
                //     label: 'quay',
                //     field: 'quay',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter quay', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that
                //     },
                // },
                // {
                //     label: 'page',
                //     field: 'page',
                //     filterOptions: {
                //         enabled: true, // enable filter for this column
                //         placeholder: 'Filter page', // placeholder for filter input
                //         filterValue: '', // initial populated value for this filter
                //         filterDropdownItems: [], // dropdown (with selected values) instead of text input
                //         filterFn: this.columnFilterFn, //custom filter function that
                //     },
                // },
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
                    searchTerm:''
                },
                sort: {
                    field: 'name',
                    type: 'asc',
                },
                page: 1,
                perPage: 5
            }
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
          'getSource'
        ])
    },

    methods: {
        ...mapActions([
          'loadSource',
          'deleteSource'
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
        onSearch(params) {
           console.log(params);
           this.updateParams({searchTerm: params});
          this.loadItems();
        },
        async loadItems() {
            const response = await this.$axios.$get("/api/source", {
                params: this.serverParams
            })

                this.totalRecords = response.total;
                this.rows = response.data;
        },

        searchFunction(row, col, cellValue, searchTerm){
            alert("gg");
            console.log(searchTerm);
        },
        deleteSource(id) {
             if(confirm("Do you really want to delete?")){

               const response = this.$axios.$delete("/api/source/" + id)

               this.loadItems();
            }
        },
    },

    created() {
        // this.loadSource();
    },
}

</script>


