<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create PersonAlia
                </h1>
                <NuxtLink to="/personalia" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="personalia.group">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Alia</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Alia" v-model="personalia.alia" :class="{ 'is-danger': $v.personalia.alia.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personalia.alia.$error }" v-if="!$v.personalia.alia.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Import Confirm</label>
                        <div class="control">
                            <input class="input" type="number" placeholder="Import Confirm" v-model="personalia.import_confirm" :class="{ 'is-danger': $v.personalia.import_confirm.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personalia.import_confirm.$error }" v-if="!$v.personalia.import_confirm.required">Field is required</p>
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
                group: '',
                age: 0,
                personalia: {
                    group: "",
                    alia: "",
                    import_confirm: "",
                }
            };
        },
        validations: {
            personalia: {
                alia: {
                    required,
                },
                import_confirm: {
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
                    this.$axios.$post('/api/personalia', this.personalia)
                            .then(response => (this.$router.push('/personalia')))
                            .catch(error => {
                            });
                }
            },
        }
    }
</script>
