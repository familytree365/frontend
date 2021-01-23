<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Citation
                </h1>
              <NuxtLink to="/citation" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="citation.name"  :class="{ 'is-danger': $v.citation.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.name.$error }" v-if="!$v.citation.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Description</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="citation.description" :class="{ 'is-danger': $v.citation.description.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.description.$error }" v-if="!$v.citation.description.required">Field is required</p>
                    </div>
                    <!-- <div class="field">
                      <label class="label">Repository Id</label>
                      <div class="control">
                        <v-select label="name" multiple  v-model="citation.repository_id
                        " :reduce="citation => citation.id" :options="options" :class="{ 'is-danger': $v.citation.repository_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.repository_id.$error }" v-if="!$v.citation.repository_id.required">Field is required</p>
                    </div> -->
                    <div class="field">
                      <label class="label">Volume</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Volume" v-model="citation.volume" :class="{ 'is-danger': $v.citation.volume.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.volume.$error }" v-if="!$v.citation.volume.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Page</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Page" v-model="citation.page" :class="{ 'is-danger': $v.citation.page.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.page.$error }" v-if="!$v.citation.page.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Is Active</label>
                      <div class="control">
                            <v-select label="name"  v-model="citation.is_active" :reduce="citation => citation.id" :options="status" :class="{ 'is-danger': $v.citation.is_active.$error }"></v-select>

                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.is_active.$error }" v-if="!$v.citation.is_active.required">Field is required</p>
                    </div>

                    <div class="field">
                      <label class="label">Confidence</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Confidence" v-model="citation.confidence" :class="{ 'is-danger': $v.citation.confidence.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.confidence.$error }" v-if="!$v.citation.confidence.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Source Id</label>
                      <div class="control">
                        <v-select label="name" multiple  v-model="citation.source_id
                        " :reduce="citation => citation.id" :options="options" :class="{ 'is-danger': $v.citation.source_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.citation.source_id.$error }" v-if="!$v.citation.source_id.required">Field is required</p>
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
            name: '',
            age: 0,
            citation: {
                name: "",
                description: "",
                repository_id: "",
                volume: "",
                page: "",
                is_active: "",
                confidence: "",
                source_id: "",
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
            citation: {
                name: {
                    required,
                },
                description: {
                    required,
                },
                repository_id: {
                    required,
                },
                volume: {
                    required,
                },
                page: {
                    required,
                },
                is_active: {
                    required,
                },
                confidence: {
                    required,
                },
                source_id: {
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
              this.$axios.$post('/api/citation', this.citation)
                  .then(response => ( this.$router.push('/citation') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
