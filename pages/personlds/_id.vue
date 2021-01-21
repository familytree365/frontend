<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create PersonLds
                </h1>
                <NuxtLink to="/personlds" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="personlds.group"  :class="{ 'is-danger': $v.personlds.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.group.$error }" v-if="!$v.personlds.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type" v-model="personlds.type">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Stat</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Stat" v-model="personlds.stat">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                        <v-date-picker v-model="personlds.date" :model-config="modelConfig">
                          <template v-slot="{ inputValue, inputEvents }">
                            <input
                              class="bg-white border px-2 py-1 rounded input"
                              :value="inputValue"
                              v-on="inputEvents"
                            />
                          </template>
                        </v-date-picker>
                      </div>
                    </div>
                    <div class="field">
                        <label class="label">Plac</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Plac" v-model="personlds.plac">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Temp</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Temp" v-model="personlds.temp">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Slac Famc</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Slac Famc" v-model="personlds.slac_famc">
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
    import { required } from 'vuelidate/lib/validators'
    export default {
        layout: 'auth',
        data() {
            return {
                error: false,
                message: "",
                personlds: {
                    group: "",
                    type: "",
                    stat: "",
                    date: "",
                    plac: "",
                    slac_famc: "",
                },
                modelConfig: {
                    type: 'string',
                    mask: 'YYYY-MM-DD', // Uses 'iso' if missing
                },
            };
        },
        validations: {
            personlds: {
                group: {
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
                    this.$axios.$put('/api/personlds/' + this.$route.params.id, this.personlds)
                            .then(response => (this.$router.push('/personlds')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const personlds = await $axios.$get('/api/personlds/' + params.id)
            return {personlds}
        }
    }
</script>
