<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create MediaObjectFile
                </h1>
              <NuxtLink to="/mediaobjectfile" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="mediaobjectfile.name"  :class="{ 'is-danger': $v.mediaobjectfile.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.name.$error }" v-if="!$v.mediaobjectfile.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="mediaobjectfile.email" :class="{ 'is-danger': $v.mediaobjectfile.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.email.$error }" v-if="!$v.mediaobjectfile.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="mediaobjectfile.phone" :class="{ 'is-danger': $v.mediaobjectfile.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.mediaobjectfile.phone.$error }" v-if="!$v.mediaobjectfile.phone.required">Field is required</p>
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
            mediaobjectfile: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            mediaobjectfile: {
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
              this.$axios.$post('/api/mediaobjectfile', this.mediaobjectfile)
                  .then(response => ( this.$router.push('/mediaobjectfile') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
