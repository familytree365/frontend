<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Author
                </h1>
              <NuxtLink to="/author" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="author.name"  :class="{ 'is-danger': $v.author.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.author.name.$error }" v-if="!$v.author.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Description</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="author.description" :class="{ 'is-danger': $v.author.description.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.author.description.$error }" v-if="!$v.author.description.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Is Active</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Is Active" v-model="author.is_active" :class="{ 'is-danger': $v.author.is_active.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.author.is_active.$error }" v-if="!$v.author.is_active.required">Field is required</p>
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
            author: {
                name: "",
                description: "",
                is_active: "",
            }
        };
    },
    validations: {
            author: {
                name: {
                    required,
                },
                description: {
                    required,
                },
                is_active: {
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
              this.$axios.$post('/api/author', this.author)
                  .then(response => ( this.$router.push('/author') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
