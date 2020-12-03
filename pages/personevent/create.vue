<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonEvent
                </h1>
              <NuxtLink to="/personeventevent" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personeventevent.name"  :class="{ 'is-danger': $v.personeventevent.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personeventevent.name.$error }" v-if="!$v.personeventevent.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="personeventevent.email" :class="{ 'is-danger': $v.personeventevent.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personeventevent.email.$error }" v-if="!$v.personeventevent.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="personeventevent.phone" :class="{ 'is-danger': $v.personeventevent.phone.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personeventevent.phone.$error }" v-if="!$v.personeventevent.phone.required">Field is required</p>
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
            personeventevent: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
            personeventevent: {
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
              this.$axios.$post('/api/personevent', this.personeventevent)
                  .then(response => ( this.$router.push('/personeventevent') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
