<template>
    <div>
        <loading :active.sync="isLoading" :color="color" :background-color="backgroundColor"> </loading>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Tree
                </h1>
                <NuxtLink to="/tree" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Select Company</label>
                        <div class="control">
                            <v-select label="name"  v-model="tree.company_id" :reduce="company => company.id" :options="companies"></v-select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="tree.name"  :class="{ 'is-danger': $v.tree.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.tree.name.$error }" v-if="!$v.tree.name.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="tree.description">
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button @click.prevent="save()" class="button is-link has-background-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import { required } from 'vuelidate/lib/validators'
    export default {
         components: {
            Loading
        },
        layout: 'auth',
        data() {
            return {
                error: false,
                message: "",
                name: '',
                age: 0,
                tree: {
                    name: "",
                    company_id : "",
                    description: "",
                },
                companies: [],
                selected_company: "",
                isLoading: true,
                fullPage: true,
                color: '#4fcf8d',
                backgroundColor: '#ffffff',
                male : [],
                female: [],
                types : [],
                status : [
                  {
                    id: 1,
                    name: "Active",
                  },
                  {
                    id: 0,
                    name: "Inactive",
                  },
                ],
            };
        },
        validations: {
            tree: {
                company_id: {
                    required,
                },
                name: {
                    required,
                },

            },
        },
        mounted() {
            this.createTree()
        },
        methods: {
            async getCompany() {
                const response = await this.$axios.$get("/api/company")

                           console.log(response);
                           this.companies = response
            },

            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.$axios.$post('/api/tree', this.tree)
                            .then(response => (this.$router.push('/tree')))
                            .catch(error => {
                            });
                }
            },
            async createTree() {
                const response = await this.$axios.$get("/api/tree/create")

                            if(response.create_tree == false) {
                                this.$router.push("/error");
                            } else {
                                this.isLoading = false
                            }

            },
        },
        created() {
            this.getCompany();
        },
    }
</script>
