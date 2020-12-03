<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Addr
                </h1>
              <NuxtLink to="/addr" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="addr.name"  :class="{ 'is-danger': $v.addr.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.addr.name.$error }" v-if="!$v.addr.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="addr.email" :class="{ 'is-danger': $v.addr.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.addr.email.$error }" v-if="!$v.addr.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="addr.phone" :class="{ 'is-danger': $v.addr.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.addr.phone.$error }" v-if="!$v.addr.phone.required">Field is required</p>
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
            addr: {
                name: "",
                email: '',
                phone: ''
            }
        };
    },
    validations: {
            addr: {
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
                this.$axios.$put('/api/addr/'+this.$route.params.id, this.addr)
                    .then(response => ( this.$router.push('/addr') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const addr = await $axios.$get('/api/addr/'+params.id)
      return { addr }
    }
}
</script>
