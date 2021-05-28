<template>
    <div>
        <loading :active.sync="isLoading" :color="color" :background-color="backgroundColor"> </loading>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Edit FamilySlgs
                </h1>
                <NuxtLink to="/familyslgs" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Family</label>
                        <div class="control">
                            <v-select label="description"  v-model="familyslgs.family_id" :reduce="familyslgs => familyslgs.id" :options="family" :class="{ 'is-danger': $v.familyslgs.family_id.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.familyslgs.family_id.$error }" v-if="!$v.familyslgs.family_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Stat</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Stat" v-model="familyslgs.stat" :class="{ 'is-danger': $v.familyslgs.stat.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.familyslgs.stat.$error }" v-if="!$v.familyslgs.stat.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <v-date-picker v-model="familyslgs.date" :model-config="modelConfig">
                              <template v-slot="{ inputValue, inputEvents }">
                                <input
                                  class="bg-white border px-2 py-1 rounded input"
                                  :value="inputValue"
                                  v-on="inputEvents"
                                :class="{ 'is-danger': $v.familyslgs.date.$error }" />
                              </template>
                            </v-date-picker>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.familyslgs.date.$error }" v-if="!$v.familyslgs.date.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Plac</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Plac" v-model="familyslgs.plac" :class="{ 'is-danger': $v.familyslgs.plac.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.familyslgs.plac.$error }" v-if="!$v.familyslgs.plac.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Temp</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Temp" v-model="familyslgs.temp" :class="{ 'is-danger': $v.familyslgs.temp.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.familyslgs.temp.$error }" v-if="!$v.familyslgs.temp.required">Field is required</p>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button  class="button is-link has-background-primary" @click.prevent="save()">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    export default {
        layout: 'auth',
        components: {
            Loading
        },
        data() {
            return {
                error: false,
                message: "",
                familyslgs: {
                    family_id: "",
                    stat: "",
                    date: "",
                    plac: "",
                    temp: ""
                },
                family: [],
                isLoading: true,
                fullPage: true,
                color: '#4fcf8d',
                backgroundColor: '#ffffff',
                modelConfig: {
                    type: 'string',
                    mask: 'YYYY-MM-DD', // Uses 'iso' if missing
                },
            };
        },
        validations: {
            familyslgs: {
                family_id: {
                    required,
                },
                stat: {
                    required,
                },
                date: {
                    required,
                },
                plac: {
                    required,
                },
                temp: {
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
                    this.$axios.$put('/api/familyslgs/' + this.$route.params.id, this.familyslgs)
                            .then(response => (this.$router.push('/familyslgs')))
                            .catch(error => {
                            });
                }
            },
            async getFamily() {
                this.isLoading = true
                const response = await this.$axios.$get("/api/family")

                    this.family = response;
                    this.isLoading = false
            },
        },
        async asyncData( { $axios, params }) {
            const familyslgs = await $axios.$get('/api/familyslgs/' + params.id)
            return {familyslgs}
        },
        created() {
            this.getFamily()
        }
    }
</script>
