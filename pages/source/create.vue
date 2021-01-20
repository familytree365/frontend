<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Source
                </h1>
                <NuxtLink to="/source" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Sour</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Sour" v-model="source.sour"  :class="{ 'is-danger': $v.source.sour.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.sour.$error }" v-if="!$v.source.sour.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">titl</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="titl" v-model="source.titl"  :class="{ 'is-danger': $v.source.titl.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.titl.$error }" v-if="!$v.source.titl.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">auth</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="auth" v-model="source.auth"  :class="{ 'is-danger': $v.source.auth.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.auth.$error }" v-if="!$v.source.auth.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">data</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="data" v-model="source.data"  :class="{ 'is-danger': $v.source.data.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.data.$error }" v-if="!$v.source.data.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">text</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="text" v-model="source.text"  :class="{ 'is-danger': $v.source.text.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.text.$error }" v-if="!$v.source.text.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">publ</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="publ" v-model="source.publ"  :class="{ 'is-danger': $v.source.publ.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.publ.$error }" v-if="!$v.source.publ.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">abbr</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="abbr" v-model="source.abbr"  :class="{ 'is-danger': $v.source.abbr.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.abbr.$error }" v-if="!$v.source.abbr.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="source.name"  :class="{ 'is-danger': $v.source.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.name.$error }" v-if="!$v.source.name.required">Field is required</p>
                    </div>                   
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Description" v-model="source.description" :class="{ 'is-danger': $v.source.description.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.description.$error }" v-if="!$v.source.description.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">repository id</label>
                        <div class="control">
                            <v-select label="name"  v-model="source.repository_id" :reduce="source => source.id" :options="repository" :class="{ 'is-danger': $v.source.repository_id.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.repository_id.$error }" v-if="!$v.source.repository_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">author id</label>
                        <div class="control">
                            <v-select label="name"  v-model="source.author_id" :reduce="source => source.id" :options="author" :class="{ 'is-danger': $v.source.author_id.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.author_id.$error }" v-if="!$v.source.author_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">publication id</label>
                        <div class="control">
                            <v-select label="name"  v-model="source.publication_id" :reduce="source => source.id" :options="author" :class="{ 'is-danger': $v.source.publication_id.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.publication_id.$error }" v-if="!$v.source.publication_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">type id</label>
                        <div class="control">
                            <v-select label="name"  v-model="source.type_id" :reduce="source => source.id" :options="type" :class="{ 'is-danger': $v.source.type_id.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.type_id.$error }" v-if="!$v.source.type_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">is active</label>
                        <div class="control">
                            <v-select label="name"  v-model="source.is_active" :reduce="source => source.id" :options="status" :class="{ 'is-danger': $v.source.is_active.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.is_active.$error }" v-if="!$v.source.is_active.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="group" v-model="source.group" :class="{ 'is-danger': $v.source.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.group.$error }" v-if="!$v.source.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">quay</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="quay" v-model="source.quay" :class="{ 'is-danger': $v.source.quay.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.quay.$error }" v-if="!$v.source.quay.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">page</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="page" v-model="source.page" :class="{ 'is-danger': $v.source.page.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.source.page.$error }" v-if="!$v.source.page.required">Field is required</p>
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
    import { required } from 'vuelidate/lib/validators'
    export default {

        layout: 'auth',
        data() {
            return {
                error: false,
                message: "",
                name: '',
                age: 0,
                source: {
                    sour: "",
                    titl: "",
                    auth: "",
                    data: "",
                    text: "",
                    publ: "",
                    abbr: "",
                    name: "",
                    description: "",
                    repository_id: "",
                    author_id: "",
                    publication_id: "",
                    type_id: "",
                    is_active: "",
                    group: "",
                    gid: "",
                    quay: "",
                    page: ""
                },
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
                repository: [],
                author: [],
                type: [],
            };
        },
        validations: {
            source: {
                sour: {
                    required,
                },
                titl: {
                    required,
                },
                auth: {
                    required,
                },
                data: {
                    required,
                },
                text: {
                    required,
                },
                publ: {
                    required,
                },
                abbr: {
                    required,
                },
                name: {
                    required,
                },
                description: {
                    required,
                },
                repository_id: {
                    required,
                },
                author_id: {
                    required,
                },
                publication_id: {
                    required,
                },
                type_id: {
                    required,
                },
                is_active: {
                    required,
                },
                group: {
                    required,
                },
                quay: {
                    required,
                },
                page: {
                    required,
                },
            },
        },
        methods: {

            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.$axios.$post('/api/source', this.source)
                            .then(response => (this.$router.push('/source')))
                            .catch(error => {
                            });
                }
            },
            getRepository() {
                this.$axios.$get("/api/allrepository")
                .then(response => {
                    this.repository = response;
                })
            },
            getAuthor() {
                this.$axios.$get("/api/allauthor")
                .then(response => {
                    this.author = response;
                })
            },
            getType() {
                this.$axios.$get("/api/alltype")
                .then(response => {
                    this.type = response;
                })
            },
        },
        created() {
            this.getRepository()
            this.getAuthor()
            this.getType()
        }
    }
</script>
