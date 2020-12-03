<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonAsso
                </h1>
              <NuxtLink to="/persondesiasso" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="persondesiasso.name"  :class="{ 'is-danger': $v.persondesiasso.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesiasso.name.$error }" v-if="!$v.persondesiasso.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="persondesiasso.email" :class="{ 'is-danger': $v.persondesiasso.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesiasso.email.$error }" v-if="!$v.persondesiasso.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="persondesiasso.phone" :class="{ 'is-danger': $v.persondesiasso.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesiasso.phone.$error }" v-if="!$v.persondesiasso.phone.required">Field is required</p>
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
            persondesiasso: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            persondesiasso: {
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
                this.$axios.$put('/api/persondesi/'+this.$route.params.id, this.persondesiasso)
                    .then(response => ( this.$router.push('/persondesiasso') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const persondesiasso = await $axios.$get('/api/persondesi/'+params.id)
      return { persondesiasso }
    }
}
</script>
