<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create PersonEvent
                </h1>
                <NuxtLink to="/personevent" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Person Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Person Id" v-model="personevent.person_id"  :class="{ 'is-danger': $v.personevent.person_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.person_id.$error }" v-if="!$v.personevent.person_id.required">Field is required</p>
                    </div>
                    <!-- <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Title" v-model="personevent.title" :class="{ 'is-danger': $v.personevent.title.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.title.$error }" v-if="!$v.personevent.title.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type" v-model="personevent.type" :class="{ 'is-danger': $v.personevent.type.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.type.$error }" v-if="!$v.personevent.type.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Attr</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Attr" v-model="personevent.attr" :class="{ 'is-danger': $v.personevent.attr.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.attr.$error }" v-if="!$v.personevent.attr.required">Field is required</p>
                    </div> -->
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Date" v-model="personevent.date" :class="{ 'is-danger': $v.personevent.date.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.date.$error }" v-if="!$v.personevent.date.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Plac</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Plac" v-model="personevent.plac" :class="{ 'is-danger': $v.personevent.plac.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.plac.$error }" v-if="!$v.personevent.plac.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Phon</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Phon" v-model="personevent.phon" :class="{ 'is-danger': $v.personevent.phon.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.phon.$error }" v-if="!$v.personevent.phon.required">Field is required</p>
                    </div>
                    <!-- <div class="field">
                        <label class="label">Caus</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Caus" v-model="personevent.caus" :class="{ 'is-danger': $v.personevent.caus.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.caus.$error }" v-if="!$v.personevent.caus.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Age</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Age" v-model="personevent.age" :class="{ 'is-danger': $v.personevent.age.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.age.$error }" v-if="!$v.personevent.age.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Agnc</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Agnc" v-model="personevent.agnc" :class="{ 'is-danger': $v.personevent.agnc.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.agnc.$error }" v-if="!$v.personevent.agnc.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Description" v-model="personevent.description" :class="{ 'is-danger': $v.personevent.description.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.description.$error }" v-if="!$v.personevent.description.required">Field is required</p>
                    </div> -->
                    <div class="field">
                        <label class="label">Year</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Year" v-model="personevent.year" :class="{ 'is-danger': $v.personevent.year.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.year.$error }" v-if="!$v.personevent.year.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Month</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Month" v-model="personevent.month" :class="{ 'is-danger': $v.personevent.month.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.month.$error }" v-if="!$v.personevent.month.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Day</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Day" v-model="personevent.day" :class="{ 'is-danger': $v.personevent.day.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personevent.day.$error }" v-if="!$v.personevent.day.required">Field is required</p>
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
                personevent: {
                    person_id: "",
                    title: "",
                    type: "",
                    attr: "",
                    date: "",
                    plac: "",
                    phon: "",
                    caus: "",
                    age: "",
                    agnc: "",
                    description: "",
                    year: "",
                    month: "",
                    day: ""
                }
            };
        },
        validations: {
            personevent: {
                person_id: {
                    required,
                },
                // title: {
                //     required,
                // },
                // type: {
                //     required,
                // },
                // attr: {
                //     required,
                // },
                date: {
                    required,
                },
                plac: {
                    required,
                },
                phon: {
                    required,
                },
                // caus: {
                //     required,
                // },
                // age: {
                //     required,
                // },
                // agnc: {
                //     required,
                // },
                // description: {
                //     required,
                // },
                year: {
                    required,
                },
                month: {
                    required,
                },
                day: {
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
                    this.$axios.$put('/api/personevent/' + this.$route.params.id, this.personevent)
                            .then(response => (this.$router.push('/personevent')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const personevent = await $axios.$get('/api/personevent/' + params.id)
            return {personevent}
        }
    }
</script>
