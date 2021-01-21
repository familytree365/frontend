<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create PersonAsso
                </h1>
                <NuxtLink to="/personasso" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="persondesiasso.group"  :class="{ 'is-danger': $v.persondesiasso.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.persondesiasso.group.$error }" v-if="!$v.persondesiasso.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Indi</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Indi" v-model="persondesiasso.indi">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Rela</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Rela" v-model="persondesiasso.rela">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Import Confirm</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Import Confirm" v-model="persondesiasso.import_confirm" :class="{ 'is-danger': $v.persondesiasso.import_confirm.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.persondesiasso.import_confirm.$error }" v-if="!$v.persondesiasso.import_confirm.required">Field is required</p>
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
                persondesiasso: {
                    group: "",
                    indi: "",
                    rela: "",
                    import_confirm: "",
                }
            };
        },
        validations: {
            persondesiasso: {
                group: {
                    required,
                },
                import_confirm: {
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
                    this.$axios.$put('/api/personasso/' + this.$route.params.id, this.persondesiasso)
                            .then(response => (this.$router.push('/personasso')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const persondesiasso = await $axios.$get('/api/personasso/' + params.id)
            return {persondesiasso}
        }
    }
</script>
