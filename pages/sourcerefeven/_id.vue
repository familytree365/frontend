<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create SourceRefEven
                </h1>
              <NuxtLink to="/sourcerefeven" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="sourcerefeven.group"  :class="{ 'is-danger': $v.sourcerefeven.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcerefeven.group.$error }" v-if="!$v.sourcerefeven.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Even</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Even" v-model="sourcerefeven.even" :class="{ 'is-danger': $v.sourcerefeven.even.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcerefeven.even.$error }" v-if="!$v.sourcerefeven.even.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Role</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Role" v-model="sourcerefeven.role" :class="{ 'is-danger': $v.sourcerefeven.role.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourcerefeven.role.$error }" v-if="!$v.sourcerefeven.role.required">Field is required</p>
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
            sourcerefeven: {
                group: "",
                even: "",
                role: "",
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
            sourcerefeven: {
                group: {
                    required,
                },
                even: {
                    required,
                },
                role: {
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
                this.$axios.$put('/api/sourcerefeven/'+this.$route.params.id, this.sourcerefeven)
                    .then(response => ( this.$router.push('/sourcerefeven') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const sourcerefeven = await $axios.$get('/api/sourcerefeven/'+params.id)
      return { sourcerefeven }
    }
}
</script>
