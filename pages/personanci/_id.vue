<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonAnci
                </h1>
              <NuxtLink to="/people" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="people.group"  :class="{ 'is-danger': $v.people.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.people.group.$error }" v-if="!$v.people.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="people.gid" :class="{ 'is-danger': $v.people.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.people.gid.$error }" v-if="!$v.people.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Anci</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Anci" v-model="people.anci" :class="{ 'is-danger': $v.people.anci.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.people.anci.$error }" v-if="!$v.people.anci.required">Field is required</p>
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
            people: {
                group: "",
                gid: '',
                anci: ''
            }
        };
    },
    validations: {
            people: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
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
                this.$axios.$put('/api/person/'+this.$route.params.id, this.people)
                    .then(response => ( this.$router.push('/people') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const people = await $axios.$get('/api/person/'+params.id)
      return { people }
    }
}
</script>
