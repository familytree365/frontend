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
                <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="sourcedataeven.group"  :class="{ 'is-danger': $v.sourcedataeven.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.group.$error }" v-if="!$v.sourcedataeven.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <v-date-picker v-model="sourcedataeven.date" :model-config="modelConfig">
                          <template v-slot="{ inputValue, inputEvents }">
                            <input
                              class="bg-white border px-2 py-1 rounded input"
                              :value="inputValue"
                              v-on="inputEvents"
                            :class="{ 'is-danger': $v.sourcedataeven.date.$error }" />
                          </template>
                        </v-date-picker>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.date.$error }" v-if="!$v.sourcedataeven.date.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Plac</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Plac" v-model="sourcedataeven.plac" :class="{ 'is-danger': $v.sourcedataeven.plac.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.plac.$error }" v-if="!$v.sourcedataeven.plac.required">Field is required</p>
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
            sourcedataeven: {
                group: "",
                date: "",
                plac: ""
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
            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD', // Uses 'iso' if missing
            },
        };
    },
    validations: {
            sourcedataeven: {
                group: {
                    required,
                },
                date: {
                    required,
                },
                plac: {
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
