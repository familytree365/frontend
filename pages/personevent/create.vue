<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create PersonEvent
                </h1>
                <NuxtLink to="/personeventevent" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Person Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Person Id" v-model="personeventevent.person_id"  :class="{ 'is-danger': $v.personeventevent.person_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.person_id.$error }" v-if="!$v.personeventevent.person_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Title" v-model="personeventevent.title" :class="{ 'is-danger': $v.personeventevent.title.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.title.$error }" v-if="!$v.personeventevent.title.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type" v-model="personeventevent.type" :class="{ 'is-danger': $v.personeventevent.type.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.type.$error }" v-if="!$v.personeventevent.type.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Attr</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Attr" v-model="personeventevent.attr" :class="{ 'is-danger': $v.personeventevent.attr.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.attr.$error }" v-if="!$v.personeventevent.attr.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Date" v-model="personeventevent.date" :class="{ 'is-danger': $v.personeventevent.date.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.date.$error }" v-if="!$v.personeventevent.date.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Plac</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Plac" v-model="personeventevent.plac" :class="{ 'is-danger': $v.personeventevent.plac.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.plac.$error }" v-if="!$v.personeventevent.plac.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Phon</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Phon" v-model="personeventevent.phon" :class="{ 'is-danger': $v.personeventevent.phon.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.phon.$error }" v-if="!$v.personeventevent.phon.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Caus</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Caus" v-model="personeventevent.caus" :class="{ 'is-danger': $v.personeventevent.caus.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.caus.$error }" v-if="!$v.personeventevent.caus.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Age</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Age" v-model="personeventevent.age" :class="{ 'is-danger': $v.personeventevent.age.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.age.$error }" v-if="!$v.personeventevent.age.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Agnc</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Agnc" v-model="personeventevent.agnc" :class="{ 'is-danger': $v.personeventevent.agnc.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.agnc.$error }" v-if="!$v.personeventevent.agnc.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Description" v-model="personeventevent.description" :class="{ 'is-danger': $v.personeventevent.description.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.description.$error }" v-if="!$v.personeventevent.description.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Year</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Year" v-model="personeventevent.year" :class="{ 'is-danger': $v.personeventevent.year.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.year.$error }" v-if="!$v.personeventevent.year.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Month</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Month" v-model="personeventevent.month" :class="{ 'is-danger': $v.personeventevent.month.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.month.$error }" v-if="!$v.personeventevent.month.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Day</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Day" v-model="personeventevent.day" :class="{ 'is-danger': $v.personeventevent.day.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.personeventevent.day.$error }" v-if="!$v.personeventevent.day.required">Field is required</p>
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
                person_id: '',
                age: 0,
                personeventevent: {
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
                    day: "",
                }
            };
        },
        validations: {
            personeventevent: {
                person_id: {
                    required,
                },
                title: {
                    required,
                },
                type: {
                    required,
                },
                attr: {
                    required,
                },
                date: {
                    required,
                },
                plac: {
                    required,
                },
                phon: {
                    required,
                },
                caus: {
                    required,
                },
                age: {
                    required,
                },
                agnc: {
                    required,
                },
                description: {
                    required,
                },
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
                    this.$axios.$post('/api/personevent', this.personeventevent)
                            .then(response => (this.$router.push('/personeventevent')))
                            .catch(error => {
                            });
                }
            },
        }
    }
</script>
