<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Repository
                </h1>
              <NuxtLink to="/repository" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="repository.name"  :class="{ 'is-danger': $v.repository.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.name.$error }" v-if="!$v.repository.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="repository.email" :class="{ 'is-danger': $v.repository.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.email.$error }" v-if="!$v.repository.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="repository.phone" :class="{ 'is-danger': $v.repository.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.phone.$error }" v-if="!$v.repository.phone.required">Field is required</p>
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
            repository: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            repository: {
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
                this.$axios.$put('/api/repository/'+this.$route.params.id, this.repository)
                    .then(response => ( this.$router.push('/repository') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const repository = await $axios.$get('/api/repository/'+params.id)
      return { repository }
    }
}
</script>
