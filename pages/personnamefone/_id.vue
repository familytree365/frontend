<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create People
                </h1>
              <NuxtLink to="/personnamefone" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="personnamefone.group"  :class="{ 'is-danger': $v.personnamefone.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.group.$error }" v-if="!$v.personnamefone.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="personnamefone.gid" :class="{ 'is-danger': $v.personnamefone.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.gid.$error }" v-if="!$v.personnamefone.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Type</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Type" v-model="personnamefone.type" :class="{ 'is-danger': $v.personnamefone.type.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.type.$error }" v-if="!$v.personnamefone.type.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personnamefone.name" :class="{ 'is-danger': $v.personnamefone.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.name.$error }" v-if="!$v.personnamefone.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Npfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Npfx" v-model="personnamefone.npfx" :class="{ 'is-danger': $v.personnamefone.npfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.npfx.$error }" v-if="!$v.personnamefone.npfx.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Givn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Givn" v-model="personnamefone.givn" :class="{ 'is-danger': $v.personnamefone.givn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.givn.$error }" v-if="!$v.personnamefone.givn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Nick</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nick" v-model="personnamefone.nick" :class="{ 'is-danger': $v.personnamefone.nick.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.nick.$error }" v-if="!$v.personnamefone.nick.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Spfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Spfx" v-model="personnamefone.spfx" :class="{ 'is-danger': $v.personnamefone.spfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.spfx.$error }" v-if="!$v.personnamefone.spfx.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Surn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Surn" v-model="personnamefone.surn" :class="{ 'is-danger': $v.personnamefone.surn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.surn.$error }" v-if="!$v.personnamefone.surn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Nsfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nsfx" v-model="personnamefone.nsfx" :class="{ 'is-danger': $v.personnamefone.nsfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnamefone.nsfx.$error }" v-if="!$v.personnamefone.nsfx.required">Field is required</p>
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
            personnamefone: {
                group: "",
                gid: "",
                type: "",
                name: "",
                npfx: "",
                givn: "",
                nick: "",
                spfx: "",
                surn: "",
                nsfx: ""
            }
        };
    },
    validations: {
            personnamefone: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                type: {
                    required,
                },
                name: {
                    required,
                },
                npfx: {
                    required,
                },
                givn: {
                    required,
                },
                nick: {
                    required,
                },
                spfx: {
                    required,
                },
                surn: {
                    required,
                },
                nsfx: {
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
                this.$axios.$put('/api/personnamefone/'+this.$route.params.id, this.personnamefone)
                    .then(response => ( this.$router.push('/personnamefone') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const personnamefone = await $axios.$get('/api/personnamefone/'+params.id)
      return { personnamefone }
    }
}
</script>
