<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Category
                </h1>
              <NuxtLink to="/forumcategory" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="forumcategory.name"  :class="{ 'is-danger': $v.forumcategory.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.forumcategory.name.$error }" v-if="!$v.forumcategory.name.required">Field is required</p>
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
            forumcategory: {
                name: ""
            }
        };
    },
    validations: {
            forumcategory: {
                name: {
                    required
                }
            },
    },
    methods: {

        save() {
          this.$v.$touch();
            if (this.$v.$invalid) {
                console.log("fail")
            } else {
              this.$axios.$post('/api/forumcategory', this.forumcategory)
                  .then(response => ( this.$router.push('/forumcategory') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
