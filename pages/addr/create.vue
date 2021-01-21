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
                <form>
                    <div class="field">
                      <label class="label">Address 1</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Address 1" v-model="addr.adr1">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Address 2</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Address 2" v-model="addr.adr2">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">City</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="City" v-model="addr.city" :class="{ 'is-danger': $v.addr.city.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.addr.city.$error }" v-if="!$v.addr.city.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">State</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="State" v-model="addr.stae" :class="{ 'is-danger': $v.addr.stae.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.addr.stae.$error }" v-if="!$v.addr.stae.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Post</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Post" v-model="addr.post">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Country</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Country" v-model="addr.ctry">
                      </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button @click.prevent="save()" class="button is-link has-background-primary">Submit</button>
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
            addr: {
                adr1: "",
                adr2: "",
                city: "",
                stae: "",
                post: "",
                ctry: "",
            }
        };
    },
    validations: {
            addr: {
                city: {
                    required,
                },
                stae: {
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
              this.$axios.$post('/api/addr', this.addr)
                  .then(response => ( this.$router.push('/addr') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
