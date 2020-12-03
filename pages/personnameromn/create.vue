<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonNameRomn
                </h1>
              <NuxtLink to="/personnameromn" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personnameromn.name"  :class="{ 'is-danger': $v.personnameromn.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.name.$error }" v-if="!$v.personnameromn.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="personnameromn.email" :class="{ 'is-danger': $v.personnameromn.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.email.$error }" v-if="!$v.personnameromn.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="personnameromn.phone" :class="{ 'is-danger': $v.personnameromn.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.phone.$error }" v-if="!$v.personnameromn.phone.required">Field is required</p>
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
            personnameromn: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            personnameromn: {
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
              this.$axios.$post('/api/personnameromn', this.personnameromn)
                  .then(response => ( this.$router.push('/personnameromn') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
