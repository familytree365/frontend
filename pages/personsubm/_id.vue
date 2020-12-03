<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonSubm
                </h1>
              <NuxtLink to="/personsubm" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personsubm.name"  :class="{ 'is-danger': $v.personsubm.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personsubm.name.$error }" v-if="!$v.personsubm.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="personsubm.email" :class="{ 'is-danger': $v.personsubm.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personsubm.email.$error }" v-if="!$v.personsubm.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="personsubm.phone" :class="{ 'is-danger': $v.personsubm.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personsubm.phone.$error }" v-if="!$v.personsubm.phone.required">Field is required</p>
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
            personsubm: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            personsubm: {
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
                this.$axios.$put('/api/personsubm/'+this.$route.params.id, this.personsubm)
                    .then(response => ( this.$router.push('/personsubm') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const personsubm = await $axios.$get('/api/personsubm/'+params.id)
      return { personsubm }
    }
}
</script>
