<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create People
                </h1>
              <NuxtLink to="/people" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="people.name"  :class="{ 'is-danger': $v.people.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.people.name.$error }" v-if="!$v.people.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="people.email" :class="{ 'is-danger': $v.people.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.people.email.$error }" v-if="!$v.people.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="people.phone" :class="{ 'is-danger': $v.people.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.people.phone.$error }" v-if="!$v.people.phone.required">Field is required</p>
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
            people: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            people: {
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
                this.$axios.$put('/api/person/'+this.$route.params.id, this.people)
                    .then(response => ( this.$router.push('/people') )) 
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const people = await $axios.$get('/api/person/'+params.id)
      return { people }
    }
}
</script>
