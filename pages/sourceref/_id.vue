<template>
    <div>
       <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create SourceRef
                </h1>
              <NuxtLink to="/sourceref" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                 <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="sourceref.group"  :class="{ 'is-danger': $v.sourceref.group.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourceref.group.$error }" v-if="!$v.sourceref.group.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Gid</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Gid" v-model="sourceref.gid" :class="{ 'is-danger': $v.sourceref.gid.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourceref.gid.$error }" v-if="!$v.sourceref.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Sour Id</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Sour Id" v-model="sourceref.sour_id" :class="{ 'is-danger': $v.sourceref.sour_id.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourceref.sour_id.$error }" v-if="!$v.sourceref.sour_id.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Text</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Text" v-model="sourceref.text" :class="{ 'is-danger': $v.sourceref.text.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourceref.text.$error }" v-if="!$v.sourceref.text.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Quay</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Quay" v-model="sourceref.quay" :class="{ 'is-danger': $v.sourceref.quay.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourceref.quay.$error }" v-if="!$v.sourceref.quay.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Page</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Page" v-model="sourceref.page" :class="{ 'is-danger': $v.sourceref.page.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.sourceref.page.$error }" v-if="!$v.sourceref.page.required">Field is required</p>
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
            sourceref: {
                group: "",
                gid: "",
                sour_id: "",
                text: "",
                quay: ""
            }
        };
    },
    validations: {
            sourceref: {
                group: {
                    required,
                },
                gid: {
                    required,
                },
                sour_id: {
                    required,
                },
                text: {
                    required,
                },
                quay: {
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
                this.$axios.$put('/api/sourceref/'+this.$route.params.id, this.sourceref)
                    .then(response => ( this.$router.push('/sourceref') ))
                    .catch(error => {
                    });
            }
        },
    },
    async asyncData({ $axios,params }) {
      const sourceref = await $axios.$get('/api/sourceref/'+params.id)
      return { sourceref }
    }
}
</script>
