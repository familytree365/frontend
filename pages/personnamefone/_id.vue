<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create People
                </h1>
              <NuxtLink to="/personnamefone" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personnamefone.name"  :class="{ 'is-danger': $v.personnamefone.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.name.$error }" v-if="!$v.personnamefone.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="personnamefone.email" :class="{ 'is-danger': $v.personnamefone.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.email.$error }" v-if="!$v.personnamefone.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="personnamefone.phone" :class="{ 'is-danger': $v.personnamefone.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.phone.$error }" v-if="!$v.personnamefone.phone.required">Field is required</p>
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
            personnamefone: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            personnamefone: {
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
                this.$axios.$put('/api/personnamefone/'+this.$route.params.id, this.personnamefone)
                    .then(response => ( this.$router.push('/personnamefone') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const personnamefone = await $axios.$get('/api/personnamefone/'+params.id)
      return { personnamefone }
    }
}
</script>
