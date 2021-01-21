<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Refn
                </h1>
              <NuxtLink to="/refn" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="refn.group">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Refn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Refn" v-model="refn.refn" :class="{ 'is-danger': $v.refn.refn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.refn.refn.$error }" v-if="!$v.refn.refn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Type</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Type" v-model="refn.type">
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
            group: '',
            age: 0,
            refn: {
                group: "",
                refn: "",
                type: "",
            },
            options : [
              {
                id: 1,
                name: "HTML5",
              },
              {
                id: 2,
                name: "HTML5",
              },
              {
                id: 3,
                name: "HTML5",
              },
            ],
        };
    },
    validations: {
            refn: {
                refn: {
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
              this.$axios.$post('/api/refn', this.refn)
                  .then(response => ( this.$router.push('/refn') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
