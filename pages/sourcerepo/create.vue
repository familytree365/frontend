<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create SourceRepo
                </h1>
              <NuxtLink to="/sourcerepo" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="sourcerepo.name"  :class="{ 'is-danger': $v.sourcerepo.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcerepo.name.$error }" v-if="!$v.sourcerepo.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="sourcerepo.email" :class="{ 'is-danger': $v.sourcerepo.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcerepo.email.$error }" v-if="!$v.sourcerepo.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="sourcerepo.phone" :class="{ 'is-danger': $v.sourcerepo.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcerepo.phone.$error }" v-if="!$v.sourcerepo.phone.required">Field is required</p>
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
            name: '',
            age: 0,
            sourcerepo: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            sourcerepo: {
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
              this.$axios.$post('/api/sourcerepo', this.sourcerepo)
                  .then(response => ( this.$router.push('/sourcerepo') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
