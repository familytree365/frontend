<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create MediaObject
                </h1>
                <NuxtLink to="/mediaobject" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Gid</label>
                        <div class="control">
                            <v-select label="name"  v-model="mediaobject.gid" :reduce="mediaobject => mediaobject.id" :options="options" :class="{ 'is-danger': $v.mediaobject.gid.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobject.gid.$error }" v-if="!$v.mediaobject.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="mediaobject.group" :class="{ 'is-danger': $v.mediaobject.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobject.group.$error }" v-if="!$v.mediaobject.group.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Titl</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Titl" v-model="mediaobject.titl" :class="{ 'is-danger': $v.mediaobject.titl.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobject.titl.$error }" v-if="!$v.mediaobject.titl.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Obje Id</label>
                        <div class="control">
                            <v-select label="name"  v-model="mediaobject.obje_id" :reduce="mediaobject => mediaobject.id" :options="options" :class="{ 'is-danger': $v.mediaobject.obje_id.$error }"></v-select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobject.obje_id.$error }" v-if="!$v.mediaobject.obje_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Rin</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Rin" v-model="mediaobject.rin" :class="{ 'is-danger': $v.mediaobject.rin.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobject.rin.$error }" v-if="!$v.mediaobject.rin.required">Field is required</p>
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
                mediaobject: {
                    gid: "",
                    group: "",
                    titl: "",
                    obje_id: "",
                    rin: ""
                },
                options : [
                  {
                    id: 1,
                    name: "HTML5",
                  },
                  {
                    id: 2,
                    name: "HTML5",
                  },
                  {
                    id: 3,
                    name: "HTML5",
                  },
                ],
            };
        },
        validations: {
            mediaobject: {
                gid: {
                    required,
                },
                group: {
                    required,
                },
                titl: {
                    required,
                },
                obje_id: {
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
                    this.$axios.$put('/api/mediaobject/' + this.$route.params.id, this.mediaobject)
                            .then(response => (this.$router.push('/mediaobject')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const mediaobject = await $axios.$get('/api/mediaobject/' + params.id)
            return {mediaobject}
        }
    }
</script>
