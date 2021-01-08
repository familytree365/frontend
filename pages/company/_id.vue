<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Edit company
                </h1>
                <NuxtLink to="/company" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="company.name"  :class="{ 'is-danger': $v.company.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.company.name.$error }" v-if="!$v.company.name.required">Field is required</p>
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
                company: {
                    name: ""
                }
            };
        },
        validations: {
            company: {
                name: {
                    required,
                }
            },
        },
        methods: {
            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.$axios.$put('/api/company/' + this.$route.params.id, this.company)
                            .then(response => (this.$router.push('/company')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const company = await $axios.$get('/api/company/' + params.id)
            return {company}
        }
    }
</script>
