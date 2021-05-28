<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonDesi
                </h1>
              <NuxtLink to="/persondesi" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="persondesi.group"  :class="{ 'is-danger': $v.persondesi.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesi.group.$error }" v-if="!$v.persondesi.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="persondesi.gid" :class="{ 'is-danger': $v.persondesi.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesi.gid.$error }" v-if="!$v.persondesi.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Desi</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Desi" v-model="persondesi.desi" :class="{ 'is-danger': $v.persondesi.desi.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.persondesi.desi.$error }" v-if="!$v.persondesi.desi.required">Field is required</p>
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
            persondesi: {
                group: "",
                gid: '',
                desi: ''
            }
        };
    },
    validations: {
            persondesi: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                desi: {
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
                this.$axios.$put('/api/person/'+this.$route.params.id, this.persondesi)
                    .then(response => ( this.$router.push('/persondesi') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const persondesi = await $axios.$get('/api/person/'+params.id)
      return { persondesi }
    }
}
</script>
