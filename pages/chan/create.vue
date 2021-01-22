<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Chan
                </h1>
              <NuxtLink to="/chan" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="chan.group"  :class="{ 'is-danger': $v.chan.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.chan.group.$error }" v-if="!$v.chan.group.required">Field is required</p>
                    </div>
                    <!-- <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <v-select label="name"  v-model="chan.gid" :reduce="chan => chan.id" :options="options" :class="{ 'is-danger': $v.chan.gid.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.chan.gid.$error }" v-if="!$v.chan.gid.required">Field is required</p>
                    </div> -->
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                            <v-date-picker v-model="chan.date" :model-config="modelConfig">
                              <template v-slot="{ inputValue, inputEvents }">
                                <input
                                  class="bg-white border px-2 py-1 rounded input"
                                  :value="inputValue"
                                  v-on="inputEvents"
                               />
                              </template>
                            </v-date-picker>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Time</label>
                      <div class="control">
                        <vue-timepicker v-model="chan.time" format="hh:mm:ss a" drop-direction="up"></vue-timepicker>

                      </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button  @click.prevent="save()"  class="button is-link has-background-primary">Submit</button>
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
            chan: {
                group: "",
                gid: "",
                date: "",
                time: "",
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
            chan: {
                group: {
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
              this.$axios.$post('/api/chan', this.chan)
                  .then(response => ( this.$router.push('/chan') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
