<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonName
                </h1>
              <NuxtLink to="/personname" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personname.name"  :class="{ 'is-danger': $v.personname.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.name.$error }" v-if="!$v.personname.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="personname.email" :class="{ 'is-danger': $v.personname.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.email.$error }" v-if="!$v.personname.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="personname.phone" :class="{ 'is-danger': $v.personname.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.phone.$error }" v-if="!$v.personname.phone.required">Field is required</p>
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
            personname: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            personname: {
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
                this.$axios.$put('/api/person/'+this.$route.params.id, this.personname)
                    .then(response => ( this.$router.push('/personname') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const personname = await $axios.$get('/api/person/'+params.id)
      return { personname }
    }
}
</script>
