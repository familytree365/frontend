<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create MediaObjectFile
                </h1>
                <NuxtLink to="/mediaobjectfile" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Gid</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Gid" v-model="mediaobjectfile.gid"  :class="{ 'is-danger': $v.mediaobjectfile.gid.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.gid.$error }" v-if="!$v.mediaobjectfile.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="mediaobjectfile.group" :class="{ 'is-danger': $v.mediaobjectfile.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.group.$error }" v-if="!$v.mediaobjectfile.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Form</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Form" v-model="mediaobjectfile.form" :class="{ 'is-danger': $v.mediaobjectfile.form.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.form.$error }" v-if="!$v.mediaobjectfile.form.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Medi</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Medi" v-model="mediaobjectfile.medi" :class="{ 'is-danger': $v.mediaobjectfile.medi.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.medi.$error }" v-if="!$v.mediaobjectfile.medi.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type" v-model="mediaobjectfile.type" :class="{ 'is-danger': $v.mediaobjectfile.type.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.type.$error }" v-if="!$v.mediaobjectfile.type.required">Field is required</p>
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
                gid: '',
                age: 0,
                mediaobjectfile: {
                    gid: "",
                    group: "",
                    form: "",
                    medi: "",
                    type: "",
                }
            };
        },
        validations: {
            mediaobjectfile: {
                gid: {
                    required,
                },
                group: {
                    required,
                },
                form: {
                    required,
                },
                medi: {
                    required,
                },
                type: {
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
                    this.$axios.$post('/api/mediaobjectfile', this.mediaobjectfile)
                            .then(response => (this.$router.push('/mediaobjectfile')))
                            .catch(error => {
                            });
                }
            },
        }
    }
</script>
