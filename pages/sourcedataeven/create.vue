<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create SourceDataEven
                </h1>
              <NuxtLink to="/sourcedataeven" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="sourcedataeven.name"  :class="{ 'is-danger': $v.sourcedataeven.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.name.$error }" v-if="!$v.sourcedataeven.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="sourcedataeven.email" :class="{ 'is-danger': $v.sourcedataeven.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.email.$error }" v-if="!$v.sourcedataeven.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="sourcedataeven.phone" :class="{ 'is-danger': $v.sourcedataeven.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.phone.$error }" v-if="!$v.sourcedataeven.phone.required">Field is required</p>
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
            sourcedataeven: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            sourcedataeven: {
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
              this.$axios.$post('/api/sourcedataeven', this.sourcedataeven)
                  .then(response => ( this.$router.push('/sourcedataeven') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
