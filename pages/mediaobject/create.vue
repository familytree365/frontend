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
                <form>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="mediaobject.group">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Titl</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Titl" v-model="mediaobject.titl" :class="{ 'is-danger': $v.mediaobject.titl.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.mediaobject.titl.$error }" v-if="!$v.mediaobject.titl.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Rin</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Rin" v-model="mediaobject.rin">
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
                gid: '',
                age: 0,
                mediaobject: {
                    group: "",
                    titl: "",
                    obje_id: "",
                    rin: "",
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
                titl: {
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
                    this.$axios.$post('/api/mediaobject', this.mediaobject)
                            .then(response => (this.$router.push('/mediaobject')))
                            .catch(error => {
                            });
                }
            },
        }
    }
</script>
