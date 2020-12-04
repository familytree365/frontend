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
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="sourcedata.group"  :class="{ 'is-danger': $v.sourcedata.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedata.group.$error }" v-if="!$v.sourcedata.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="sourcedata.gid" :class="{ 'is-danger': $v.sourcedata.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedata.gid.$error }" v-if="!$v.sourcedata.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Date" v-model="sourcedata.date" :class="{ 'is-danger': $v.sourcedata.date.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedata.date.$error }" v-if="!$v.sourcedata.date.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Text</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Text" v-model="sourcedata.text" :class="{ 'is-danger': $v.sourcedata.text.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcedata.text.$error }" v-if="!$v.sourcedata.text.required">Field is required</p>
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
            group: '',
            age: 0,
            sourcedata: {
                group: "",
                gid: "",
                date: "",
                text: "",
                agnc: "",
            }
        };
    },
    validations: {
            sourcedata: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                date: {
                    required,
                },
                text: {
                    required,
                },
                agnc: {
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
