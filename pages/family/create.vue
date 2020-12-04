<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Family
                </h1>
                <NuxtLink to="/family" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Description" v-model="family.description"  :class="{ 'is-danger': $v.family.description.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.description.$error }" v-if="!$v.family.description.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Is Active</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Is Active" v-model="family.is_active" :class="{ 'is-danger': $v.family.is_active.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.is_active.$error }" v-if="!$v.family.is_active.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Husband Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Husband Id" v-model="family.husband_id" :class="{ 'is-danger': $v.family.husband_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.husband_id.$error }" v-if="!$v.family.husband_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Wife Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Wife Id" v-model="family.wife_id" :class="{ 'is-danger': $v.family.wife_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.wife_id.$error }" v-if="!$v.family.wife_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type Id" v-model="family.type_id" :class="{ 'is-danger': $v.family.type_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.type_id.$error }" v-if="!$v.family.type_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Chan</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Chan" v-model="family.chan" :class="{ 'is-danger': $v.family.chan.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.chan.$error }" v-if="!$v.family.chan.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Nchi</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Nchi" v-model="family.nchi" :class="{ 'is-danger': $v.family.nchi.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.nchi.$error }" v-if="!$v.family.nchi.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Rin</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Rin" v-model="family.rin" :class="{ 'is-danger': $v.family.rin.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.family.rin.$error }" v-if="!$v.family.rin.required">Field is required</p>
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
                description: '',
                age: 0,
                family: {
                    description: "",
                    is_active: "",
                    husband_id: "",
                    wife_id: "",
                    type_id: "",
                    chan: "",
                    nchi: "",
                    rin: "",
                }
            };
        },
        validations: {
            family: {
                description: {
                    required,
                },
                is_active: {
                    required,
                },
                husband_id: {
                    required,
                },
                wife_id: {
                    required,
                },
                type_id: {
                    required,
                },
                chan: {
                    required,
                },
                nchi: {
                    required,
                },
                rin: {
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
                    this.$axios.$post('/api/family', this.family)
                            .then(response => (this.$router.push('/family')))
                            .catch(error => {
                            });
                }
            },
        }
    }
</script>
