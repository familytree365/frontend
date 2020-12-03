<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Citation
                </h1>
              <NuxtLink to="/citation" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="citation.name"  :class="{ 'is-danger': $v.citation.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.name.$error }" v-if="!$v.citation.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="citation.email" :class="{ 'is-danger': $v.citation.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.email.$error }" v-if="!$v.citation.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="citation.phone" :class="{ 'is-danger': $v.citation.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.phone.$error }" v-if="!$v.citation.phone.required">Field is required</p>
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
            citation: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            citation: {
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
                this.$axios.$put('/api/citation/'+this.$route.params.id, this.citation)
                    .then(response => ( this.$router.push('/citation') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const citation = await $axios.$get('/api/citation/'+params.id)
      return { citation }
    }
}
</script>
