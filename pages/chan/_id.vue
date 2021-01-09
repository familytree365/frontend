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
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="chan.group"  :class="{ 'is-danger': $v.chan.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.chan.group.$error }" v-if="!$v.chan.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <v-select label="name"  v-model="chan.gid" :reduce="chan => chan.id" :options="options" :class="{ 'is-danger': $v.chan.gid.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.chan.gid.$error }" v-if="!$v.chan.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Date" v-model="chan.date" :class="{ 'is-danger': $v.chan.date.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.chan.date.$error }" v-if="!$v.chan.date.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Time</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Time" v-model="chan.time" :class="{ 'is-danger': $v.chan.time.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.chan.time.$error }" v-if="!$v.chan.time.required">Field is required</p>
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
            chan: {
                group: "",
                gid: '',
                date: '',
                time: ''
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
            chan: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                date: {
                    required,
                },
                time: {
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
                this.$axios.$put('/api/chan/'+this.$route.params.id, this.chan)
                    .then(response => ( this.$router.push('/chan') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const chan = await $axios.$get('/api/chan/'+params.id)
      return { chan }
    }
}
</script>
