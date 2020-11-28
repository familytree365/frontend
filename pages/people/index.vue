<template>
    <div>

                <div class="columns is-gapless is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="is-size-4 has-text-black">
                            <span class="has-text-weight-medium">Hi Curtis</span>, <span class="has-text-weight-light">
                                Welcome Back!</span>
                        </h1>
                    </div>
                    <div class="column is-12">
                        <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                            <ul>
                                <li><a class="is-size-7 has-text-weight-medium has-text-link"
                                        href="dashboard.html">Home</a></li>
                                <li class="is-size-7 has-text-weight-medium is-active"><a href="dashboard.html"
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
                                  People
                                </p>
                                <p class="card-header-icon">
                                 <NuxtLink to="/people/create" class="button is-primary">
                                Create New People</NuxtLink>
                                </p>
                              </header>
                            <div class="card-content is-flex jc--sb">
                                <table class="table">
                                    <thead>
                                        <tr>
                                          <th><abbr title="Position">Id</abbr></th>
                                          <th>Name</th>
                                          <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                    <tr v-for="people in getPeople.data">
                                        <th>{{ people.id }}</th>
                                        <td>{{ people.name }}</td>
                                        <th><NuxtLink :to="'people/' + people.id" class="button is-primary">
                                            Edit</NuxtLink>
                                            <button @click="deletePeople(people.id)" class="button is-danger">
                                            Delete</button>
                                        </th>
                                    </tr>
                                   
                                    </tbody>
                                </table>
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
            columns: [
                {label: 'title', field: 'title'},
                {label: 'name', field: 'name', headerClass: 'class-in-header second-class'},
            ],
            rows: []
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
          'getPeople'
        ])
    },

    methods: {
    ...mapActions([
      'loadPeople',
      'deletePeople'
    ])
  },

    created() {
        this.loadPeople();
    },
}

</script>

