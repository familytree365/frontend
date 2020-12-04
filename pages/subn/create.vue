<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Subn
                </h1>
              <NuxtLink to="/subn" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Subm</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Subm" v-model="subn.subm"  :class="{ 'is-danger': $v.subn.subm.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.subm.$error }" v-if="!$v.subn.subm.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">famf</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="famf" v-model="subn.famf" :class="{ 'is-danger': $v.subn.famf.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.famf.$error }" v-if="!$v.subn.famf.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Temp</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Temp" v-model="subn.temp" :class="{ 'is-danger': $v.subn.temp.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.temp.$error }" v-if="!$v.subn.temp.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">ance</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="ance" v-model="subn.ance" :class="{ 'is-danger': $v.subn.ance.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.ance.$error }" v-if="!$v.subn.ance.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">desc</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="desc" v-model="subn.desc" :class="{ 'is-danger': $v.subn.desc.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.desc.$error }" v-if="!$v.subn.desc.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">rin</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="rin" v-model="subn.rin" :class="{ 'is-danger': $v.subn.rin.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subn.rin.$error }" v-if="!$v.subn.rin.required">Field is required</p>
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
            subm: '',
            age: 0,
            subn: {
                subm: "",
                famf: "",
                temp: "",
                ance: "",
                desc: "",
                rin: "",
            }
        };
    },
    validations: {
            subn: {
                subm: {
                    required,
                },
                famf: {
                    required,
                },
                temp: {
                    required,
                },
                ance: {
                    required,
                },
                desc: {
                    required,
                },
                rin: {
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
              this.$axios.$post('/api/subn', this.subn)
                  .then(response => ( this.$router.push('/subn') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
