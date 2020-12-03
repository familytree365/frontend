<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Subn
                </h1>
              <NuxtLink to="/subn" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="subn.name"  :class="{ 'is-danger': $v.subn.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.name.$error }" v-if="!$v.subn.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="subn.email" :class="{ 'is-danger': $v.subn.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.email.$error }" v-if="!$v.subn.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="subn.phone" :class="{ 'is-danger': $v.subn.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.phone.$error }" v-if="!$v.subn.phone.required">Field is required</p>
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
            subn: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            subn: {
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
              this.$axios.$post('/api/subn', this.subn)
                  .then(response => ( this.$router.push('/subn') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
