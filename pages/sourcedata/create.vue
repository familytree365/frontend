<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create SourceData
                </h1>
              <NuxtLink to="/sourcedata" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="sourcedata.group"  :class="{ 'is-danger': $v.sourcedata.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedata.group.$error }" v-if="!$v.sourcedata.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <v-date-picker v-model="sourcedata.date" :model-config="modelConfig">
                          <template v-slot="{ inputValue, inputEvents }">
                            <input
                              class="bg-white border px-2 py-1 rounded input"
                              :value="inputValue"
                              v-on="inputEvents"
                            :class="{ 'is-danger': $v.sourcedata.date.$error }" />
                          </template>
                        </v-date-picker>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedata.date.$error }" v-if="!$v.sourcedata.date.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Text</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Text" v-model="sourcedata.text">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Agnc</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Agnc" v-model="sourcedata.agnc">
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
            sourcedata: {
                group: "",
                gid: "",
                date: "",
                text: "",
                agnc: "",
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
            sourcedata: {
                group: {
                    required,
                },
                date: {
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
              this.$axios.$post('/api/sourcedata', this.sourcedata)
                  .then(response => ( this.$router.push('/sourcedata') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
