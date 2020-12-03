<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Source
                </h1>
              <NuxtLink to="/source" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="source.name"  :class="{ 'is-danger': $v.source.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.source.name.$error }" v-if="!$v.source.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="source.email" :class="{ 'is-danger': $v.source.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.source.email.$error }" v-if="!$v.source.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="source.phone" :class="{ 'is-danger': $v.source.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.source.phone.$error }" v-if="!$v.source.phone.required">Field is required</p>
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
            source: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            source: {
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
              this.$axios.$post('/api/source', this.source)
                  .then(response => ( this.$router.push('/source') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
