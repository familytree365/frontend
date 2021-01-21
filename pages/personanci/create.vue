<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonAnci
                </h1>
              <NuxtLink to="/personanci" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="personanci.group">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Anci</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Anci" v-model="personanci.anci" :class="{ 'is-danger': $v.personanci.anci.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personanci.anci.$error }" v-if="!$v.personanci.anci.required">Field is required</p>
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
            group: '',
            age: 0,
            personanci: {
                group: "",
                anci: "",
            }
        };
    },
    validations: {
            personanci: {
                anci: {
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
              this.$axios.$post('/api/personanci', this.personanci)
                  .then(response => ( this.$router.push('/personanci') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
