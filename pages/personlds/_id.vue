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
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="personlds.group"  :class="{ 'is-danger': $v.personlds.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.group.$error }" v-if="!$v.personlds.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Gid</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Gid" v-model="personlds.gid" :class="{ 'is-danger': $v.personlds.gid.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.gid.$error }" v-if="!$v.personlds.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type" v-model="personlds.type" :class="{ 'is-danger': $v.personlds.type.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.type.$error }" v-if="!$v.personlds.type.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Stat</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Stat" v-model="personlds.stat" :class="{ 'is-danger': $v.personlds.stat.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.stat.$error }" v-if="!$v.personlds.stat.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Date" v-model="personlds.date" :class="{ 'is-danger': $v.personlds.date.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.date.$error }" v-if="!$v.personlds.date.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Plac</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Plac" v-model="personlds.plac" :class="{ 'is-danger': $v.personlds.plac.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.plac.$error }" v-if="!$v.personlds.plac.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Temp</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Temp" v-model="personlds.temp" :class="{ 'is-danger': $v.personlds.temp.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.temp.$error }" v-if="!$v.personlds.temp.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Slac Famc</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Slac Famc" v-model="personlds.slac_famc" :class="{ 'is-danger': $v.personlds.slac_famc.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personlds.slac_famc.$error }" v-if="!$v.personlds.slac_famc.required">Field is required</p>
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
                personlds: {
                    group: "",
                    gid: "",
                    type: "",
                    stat: "",
                    date: "",
                    plac: "",
                    slac_famc: "",
                }
            };
        },
        validations: {
            personlds: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                type: {
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
                slac_famc: {
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
