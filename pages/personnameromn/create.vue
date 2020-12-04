<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonNameRomn
                </h1>
              <NuxtLink to="/personnameromn" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="personnameromn.group"  :class="{ 'is-danger': $v.personnameromn.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.group.$error }" v-if="!$v.personnameromn.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="personnameromn.gid" :class="{ 'is-danger': $v.personnameromn.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.gid.$error }" v-if="!$v.personnameromn.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Type</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Type" v-model="personnameromn.type" :class="{ 'is-danger': $v.personnameromn.type.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.type.$error }" v-if="!$v.personnameromn.type.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personnameromn.name" :class="{ 'is-danger': $v.personnameromn.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.name.$error }" v-if="!$v.personnameromn.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Npfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Npfx" v-model="personnameromn.npfx" :class="{ 'is-danger': $v.personnameromn.npfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.npfx.$error }" v-if="!$v.personnameromn.npfx.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Givn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Givn" v-model="personnameromn.givn" :class="{ 'is-danger': $v.personnameromn.givn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.givn.$error }" v-if="!$v.personnameromn.givn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Nick</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nick" v-model="personnameromn.nick" :class="{ 'is-danger': $v.personnameromn.nick.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.nick.$error }" v-if="!$v.personnameromn.nick.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Spfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Spfx" v-model="personnameromn.spfx" :class="{ 'is-danger': $v.personnameromn.spfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.spfx.$error }" v-if="!$v.personnameromn.spfx.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Surn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Surn" v-model="personnameromn.surn" :class="{ 'is-danger': $v.personnameromn.surn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.surn.$error }" v-if="!$v.personnameromn.surn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Nsfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nsfx" v-model="personnameromn.nsfx" :class="{ 'is-danger': $v.personnameromn.nsfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personnameromn.nsfx.$error }" v-if="!$v.personnameromn.nsfx.required">Field is required</p>
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
            personnameromn: {
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
            personnameromn: {
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
              this.$axios.$post('/api/personnameromn', this.personnameromn)
                  .then(response => ( this.$router.push('/personnameromn') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
