<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Publication
                </h1>
              <NuxtLink to="/publication" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="publication.name"  :class="{ 'is-danger': $v.publication.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.publication.name.$error }" v-if="!$v.publication.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Description</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="publication.description" :class="{ 'is-danger': $v.publication.description.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.publication.description.$error }" v-if="!$v.publication.description.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Is Active</label>
                      <div class="control">
                            <v-select label="name"  v-model="publication.is_active" :reduce="publication => publication.id" :options="status" :class="{ 'is-danger': $v.publication.is_active.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.publication.is_active.$error }" v-if="!$v.publication.is_active.required">Field is required</p>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button  @click.prevent="save()"  class="button is-link has-background-primary">Submit</button>
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
            publication: {
                name: "",
                description: "",
                is_active: "",
            },
            status : [
                  {
                    id: 1,
                    name: "Active",
                  },
                  {
                    id: 0,
                    name: "Inactive",
                  },
                ],
        };
    },
    validations: {
            publication: {
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
              this.$axios.$post('/api/publication', this.publication)
                  .then(response => ( this.$router.push('/publication') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
