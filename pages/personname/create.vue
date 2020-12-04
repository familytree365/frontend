<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create PersonName
                </h1>
              <NuxtLink to="/personname" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="personname.group"  :class="{ 'is-danger': $v.personname.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.group.$error }" v-if="!$v.personname.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="personname.gid" :class="{ 'is-danger': $v.personname.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.gid.$error }" v-if="!$v.personname.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Type</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Type" v-model="personname.type" :class="{ 'is-danger': $v.personname.type.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.type.$error }" v-if="!$v.personname.type.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="personname.name" :class="{ 'is-danger': $v.personname.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.name.$error }" v-if="!$v.personname.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Npfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Npfx" v-model="personname.npfx" :class="{ 'is-danger': $v.personname.npfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.npfx.$error }" v-if="!$v.personname.npfx.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Givn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Givn" v-model="personname.givn" :class="{ 'is-danger': $v.personname.givn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.givn.$error }" v-if="!$v.personname.givn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Nick</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nick" v-model="personname.nick" :class="{ 'is-danger': $v.personname.nick.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.nick.$error }" v-if="!$v.personname.nick.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Spfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Spfx" v-model="personname.spfx" :class="{ 'is-danger': $v.personname.spfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.spfx.$error }" v-if="!$v.personname.spfx.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Surn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Surn" v-model="personname.surn" :class="{ 'is-danger': $v.personname.surn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.surn.$error }" v-if="!$v.personname.surn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Nsfx</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nsfx" v-model="personname.nsfx" :class="{ 'is-danger': $v.personname.nsfx.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.personname.nsfx.$error }" v-if="!$v.personname.nsfx.required">Field is required</p>
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
            personname: {
                group: "",
                gid: "",
                type: "",
                name: "",
                npfx: "",
                givn: "",
                nick: "",
                spfx: "",
                surn: "",
                nsfx: "",
            }
        };
    },
    validations: {
            personname: {
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
              this.$axios.$post('/api/person', this.personname)
                  .then(response => ( this.$router.push('/personname') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
