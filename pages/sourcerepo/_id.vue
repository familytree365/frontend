<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create SourceRepo
                </h1>
                <NuxtLink to="/sourcerepo" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="sourcerepo.group"  :class="{ 'is-danger': $v.sourcerepo.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.sourcerepo.group.$error }" v-if="!$v.sourcerepo.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Gid</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Gid" v-model="sourcerepo.gid" :class="{ 'is-danger': $v.sourcerepo.gid.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.sourcerepo.gid.$error }" v-if="!$v.sourcerepo.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Repo Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Repo Id" v-model="sourcerepo.repo_id" :class="{ 'is-danger': $v.sourcerepo.repo_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.sourcerepo.repo_id.$error }" v-if="!$v.sourcerepo.repo_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Caln</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Caln" v-model="sourcerepo.caln" :class="{ 'is-danger': $v.sourcerepo.caln.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.sourcerepo.caln.$error }" v-if="!$v.sourcerepo.caln.required">Field is required</p>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button  class="button is-link has-background-primary">Submit</button>
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
                sourcerepo: {
                    group: "",
                    gid: "",
                    repo_id: "",
                    caln: ""
                }
            };
        },
        validations: {
            sourcerepo: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                repo_id: {
                    required,
                },
                caln: {
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
                    this.$axios.$put('/api/sourcerepo/' + this.$route.params.id, this.sourcerepo)
                            .then(response => (this.$router.push('/sourcerepo')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const sourcerepo = await $axios.$get('/api/sourcerepo/' + params.id)
            return {sourcerepo}
        }
    }
</script>
