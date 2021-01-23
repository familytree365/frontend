<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Place
                </h1>
              <NuxtLink to="/place" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Title</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Title" v-model="place.title"  :class="{ 'is-danger': $v.place.title.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.place.title.$error }" v-if="!$v.place.title.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Description</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="place.description" :class="{ 'is-danger': $v.place.description.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.place.description.$error }" v-if="!$v.place.description.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Date" v-model="place.date">
                      </div>
                    </div>
                    <div class="field">
                        <label class="label">is active</label>
                        <div class="control">
                            <v-select label="name"  v-model="place.is_active" :reduce="place => place.id" :options="status"></v-select>
                        </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button @click.prevent="save()" class="button is-link has-background-primary">Submit</button>
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
            title: '',
            age: 0,
            place: {
                title: "",
                description: "",
                date: "",
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
            place: {
                title: {
                    required,
                },
                description: {
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
              this.$axios.$post('/api/place', this.place)
                  .then(response => ( this.$router.push('/place') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
