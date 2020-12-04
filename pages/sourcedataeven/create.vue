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
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="sourcedataeven.group"  :class="{ 'is-danger': $v.sourcedataeven.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.group.$error }" v-if="!$v.sourcedataeven.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="sourcedataeven.gid" :class="{ 'is-danger': $v.sourcedataeven.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.gid.$error }" v-if="!$v.sourcedataeven.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Date" v-model="sourcedataeven.date" :class="{ 'is-danger': $v.sourcedataeven.date.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeven.date.$error }" v-if="!$v.sourcedataeven.date.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Plac</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Plac" v-model="sourcedataeveneven.plac" :class="{ 'is-danger': $v.sourcedataeveneven.plac.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedataeveneven.plac.$error }" v-if="!$v.sourcedataeveneven.plac.required">Field is required</p>
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
            sourcedataeven: {
                group: "",
                gid: "",
                date: "",
                plac: ""
            }
        };
    },
    validations: {
            sourcedataeven: {
                group: {
                    required,
                },
                gid: {
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
