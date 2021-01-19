<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Subm
                </h1>
              <NuxtLink to="/subm" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="subm.group"  :class="{ 'is-danger': $v.subm.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.group.$error }" v-if="!$v.subm.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="subm.name"  :class="{ 'is-danger': $v.subm.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.name.$error }" v-if="!$v.subm.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">addr id</label>
                      <div class="control">
                        <v-select label="name"  v-model="subm.addr_id" :reduce="subm => subm.id" :options="options" :class="{ 'is-danger': $v.subm.addr_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.addr_id.$error }" v-if="!$v.subm.addr_id.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Rin</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Rin" v-model="subm.rin" :class="{ 'is-danger': $v.subm.rin.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.rin.$error }" v-if="!$v.subm.rin.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">rfn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="rfn" v-model="subm.rfn" :class="{ 'is-danger': $v.subm.rfn.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.rfn.$error }" v-if="!$v.subm.rfn.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Lang</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Lang" v-model="subm.lang" :class="{ 'is-danger': $v.subm.lang.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.lang.$error }" v-if="!$v.subm.lang.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="subm.email" :class="{ 'is-danger': $v.subm.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.email.$error }" v-if="!$v.subm.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="subm.phon" :class="{ 'is-danger': $v.subm.phon.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.phon.$error }" v-if="!$v.subm.phon.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Fax</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Fax" v-model="subm.fax" :class="{ 'is-danger': $v.subm.fax.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.fax.$error }" v-if="!$v.subm.fax.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">www</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="www" v-model="subm.www" :class="{ 'is-danger': $v.subm.www.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.www.$error }" v-if="!$v.subm.www.required">Field is required</p>
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
            subm: {
                group: "",
                name: "",
                addr_id: "",
                rin: "",
                rfn: "",
                lang: "",
                email: "",
                phon: "",
                fax: "",
                www: "",
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
            subm: {
                group: {
                    required,
                },
                name: {
                    required,
                },
                addr_id: {
                    required,
                },
                rin: {
                    required,
                },
                rfn: {
                    required,
                },
                lang: {
                    required,
                },
                email: {
                    required,
                },
                phon: {
                    required,
                },
                fax: {
                    required,
                },
                www: {
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
              this.$axios.$post('/api/subm', this.subm)
                  .then(response => ( this.$router.push('/subm') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
