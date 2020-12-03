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
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="family.name"  :class="{ 'is-danger': $v.family.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.family.name.$error }" v-if="!$v.family.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="family.email" :class="{ 'is-danger': $v.family.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.family.email.$error }" v-if="!$v.family.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="family.phone" :class="{ 'is-danger': $v.family.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.family.phone.$error }" v-if="!$v.family.phone.required">Field is required</p>
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
            family: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            family: {
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
                this.$axios.$put('/api/family/'+this.$route.params.id, this.family)
                    .then(response => ( this.$router.push('/family') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const family = await $axios.$get('/api/family/'+params.id)
      return { family }
    }
}
</script>
