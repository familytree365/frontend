<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Person
                </h1>
                <NuxtLink to="/person" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="person.name"  :class="{ 'is-danger': $v.person.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.person.name.$error }" v-if="!$v.person.name.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="Email" v-model="person.email">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Phone</label>
                        <div class="control">
                            <input class="input" type="number" placeholder="Phone" v-model="person.phone">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Appellative </label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Appellative" v-model="person.appellative">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">birthday</label>
                        <div class="control">
                        <v-date-picker v-model="person.birthday" :model-config="modelConfig">
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
                        <label class="label">Deathday</label>
                       <div class="control">
                        <v-date-picker v-model="person.deathday" :model-config="modelConfig">
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
                        <label class="label">bank</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Bank" v-model="person.bank">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">bank_account</label>
                        <div class="control">
                            <input class="input" type="number" placeholder="bank_account" v-model="person.bank_account">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">obs</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="obs" v-model="person.obs">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">givn</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="givn" v-model="person.givn">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">surn</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="surn" v-model="person.surn">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="type" v-model="person.type">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">npfx</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="npfx" v-model="person.npfx">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">nick</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="nick" v-model="person.nick">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">spfx</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="spfx" v-model="person.spfx">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">nsfx</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="nsfx" v-model="person.nsfx">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">sex</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="sex" v-model="person.sex">
                            <v-select label="name"  v-model="person.sex" :reduce="repository => repository.id" :options="gender"></v-select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="description" v-model="person.description">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">chan</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="chan" v-model="person.chan">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">rin</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="rin" v-model="person.rin">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">resn</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="resn" v-model="person.resn">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">rfn</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="rfn" v-model="person.rfn">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">afn</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="afn" v-model="person.afn">
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
                person: {
                    name: "",
                    email: "",
                    phone: "",
                    appellative : null,
                    uid: null,
                    birthday : null,
                    deathday: null,
                    bank : null,
                    bank_account: null,
                    obs : null,
                    givn: null,
                    surn : null,
                    type: null,
                    npfx : null,
                    nick: null,
                    spfx : null,
                    nsfx: null,
                    sex : null,
                    description: null,
                    child_in_family_id : null,
                    chan: null,
                    rin : null,
                    resn: null,
                    rfn : null,
                    afn: null,
                },
                gender : [
                  {
                    id: 'M',
                    name: "Male",
                  },
                  {
                    id: 'F',
                    name: "Female",
                  },
                ],
                modelConfig: {
                    type: 'string',
                    mask: 'YYYY-MM-DD', // Uses 'iso' if missing
                },
            };
        },
        validations: {
            person: {
                name: {
                    required,
                },
                email: {
                    required,
                },
                phone: {
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
                    this.$axios.$put('/api/person/' + this.$route.params.id, this.person)
                            .then(response => (this.$router.push('/person')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const person = await $axios.$get('/api/person/' + params.id)
            return {person}
        }
    }
</script>
