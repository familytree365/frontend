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
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="mediaobject.name"  :class="{ 'is-danger': $v.mediaobject.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.mediaobject.name.$error }" v-if="!$v.mediaobject.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="mediaobject.email" :class="{ 'is-danger': $v.mediaobject.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.mediaobject.email.$error }" v-if="!$v.mediaobject.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="mediaobject.phone" :class="{ 'is-danger': $v.mediaobject.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.mediaobject.phone.$error }" v-if="!$v.mediaobject.phone.required">Field is required</p>
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
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            mediaobject: {
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
                this.$axios.$put('/api/mediaobject/'+this.$route.params.id, this.mediaobject)
                    .then(response => ( this.$router.push('/mediaobject') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const mediaobject = await $axios.$get('/api/mediaobject/'+params.id)
      return { mediaobject }
    }
}
</script>
