<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonDesi
                </h1>
              <NuxtLink to="/persondesi" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="persondesi.name"  :class="{ 'is-danger': $v.persondesi.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesi.name.$error }" v-if="!$v.persondesi.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="persondesi.email" :class="{ 'is-danger': $v.persondesi.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesi.email.$error }" v-if="!$v.persondesi.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="persondesi.phone" :class="{ 'is-danger': $v.persondesi.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesi.phone.$error }" v-if="!$v.persondesi.phone.required">Field is required</p>
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
            persondesi: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            persondesi: {
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
              this.$axios.$post('/api/person', this.persondesi)
                  .then(response => ( this.$router.push('/persondesi') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
