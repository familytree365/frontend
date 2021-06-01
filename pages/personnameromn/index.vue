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
                        <li><a class="is-size-7 has-text-weight-medium has-text-link"
                                href="/dashboard">Home</a></li>
                        <li class="is-size-7 has-text-weight-medium is-active"><a href="/dashboard"
                                aria-current="page">Dashboard</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="columns is-variable is-3 is-desktop">
            <div class="column">
                <div class="card has-background-white has-text-black">
                     <header class="card-header">
                        <p class="card-header-title">
                          PersonNameRomn
                        </p>
                        <p class="card-header-icon">
                         <NuxtLink to="/personnameromn/create" class="button is-link has-background-primary">
                        Create New PersonNameRomn</NuxtLink>
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
                        initialSortBy: {field: 'group', type: 'asc'}
                    }"
                    :line-numbers="true"
                    :search-options="{
                        enabled: true
                    }"
                    >
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'action'">
                            <NuxtLink :to="'personnameromn/' + rows[props.row.originalIndex].id" class="button is-link has-background-primary">
                                Edit</NuxtLink>
                            <button @click="deletePersonNameRomn(rows[props.row.originalIndex].id)" class="button is-danger">
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
                    label: 'Group',
                    field: 'group',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Group', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that

                    },
                },
                {
                    label: 'Gid',
                    field: 'gid',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Gid', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'Type',
                    field: 'type',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Type', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
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
                {
                    label: 'Npfx',
                    field: 'npfx',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Npfx', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'Givn',
                    field: 'givn',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Givn', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'Nick',
                    field: 'nick',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Nick', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'Spfx',
                    field: 'spfx',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Spfx', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'Surn',
                    field: 'surn',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Surn', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        filterFn: this.columnFilterFn, //custom filter function that
                    },
                },
                {
                    label: 'Nsfx',
                    field: 'nsfx',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter Nsfx', // placeholder for filter input
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
                    searchTerm:''
                },
                sort: {
                    field: 'group',
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
          'getPersonNameRomn'
        ])
    },

    methods: {
        ...mapActions([
          'loadPersonNameRomn',
          'deletePersonNameRomn'
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
            const response = await this.$axios.$get("/api/personnameromn", {
                params: this.serverParams
            })

                this.totalRecords = response.total;
                this.rows = response.data;
        },

        searchFunction(row, col, cellValue, searchTerm){
            alert("gg");
            console.log(searchTerm);
        },
        deletePersonNameRomn(id) {
             if(confirm("Do you really want to delete?")){

               const response = this.$axios.$delete("/api/personnameromn/" + id)

               this.loadItems();
            }
        },
    },

    created() {
        // this.loadPersonNameRomn();
    },
}

</script>


