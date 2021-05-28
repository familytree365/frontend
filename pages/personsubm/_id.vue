<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonSubm
                </h1>
              <NuxtLink to="/personsubm" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="personsubm.group"  :class="{ 'is-danger': $v.personsubm.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personsubm.group.$error }" v-if="!$v.personsubm.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Subm</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Subm" v-model="personsubm.subm" :class="{ 'is-danger': $v.personsubm.subm.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personsubm.subm.$error }" v-if="!$v.personsubm.subm.required">Field is required</p>
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
            personsubm: {
                group: "",
                subm: ''
            }
        };
    },
    validations: {
            personsubm: {
                group: {
                    required,
                },
                subm: {
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
                this.$axios.$put('/api/personsubm/'+this.$route.params.id, this.personsubm)
                    .then(response => ( this.$router.push('/personsubm') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const personsubm = await $axios.$get('/api/personsubm/'+params.id)
      return { personsubm }
    }
}
</script>
