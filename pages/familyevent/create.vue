<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create FamilyEvent
                </h1>
              <NuxtLink to="/familyevent" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Family Id</label>
                      <div class="control">
                        <v-select label="name"   v-model="familyevent.family_id" :reduce="familyevent => familyevent.id" :options="options" :class="{ 'is-danger': $v.familyevent.family_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.family_id.$error }" v-if="!$v.familyevent.family_id.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Places Id</label>
                      <div class="control">
                        <v-select label="name"   v-model="familyevent.places_id" :reduce="familyevent => familyevent.id" :options="options" :class="{ 'is-danger': $v.familyevent.places_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.places_id.$error }" v-if="!$v.familyevent.places_id.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Date</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Date" v-model="familyevent.date" :class="{ 'is-danger': $v.familyevent.date.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.date.$error }" v-if="!$v.familyevent.date.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Title</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Title" v-model="familyevent.title" :class="{ 'is-danger': $v.familyevent.title.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.title.$error }" v-if="!$v.familyevent.title.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Description</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="familyevent.description" :class="{ 'is-danger': $v.familyevent.description.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.description.$error }" v-if="!$v.familyevent.description.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Year</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Year" v-model="familyevent.year" :class="{ 'is-danger': $v.familyevent.year.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.year.$error }" v-if="!$v.familyevent.year.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Month</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Month" v-model="familyevent.month" :class="{ 'is-danger': $v.familyevent.month.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.month.$error }" v-if="!$v.familyevent.month.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Day</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Day" v-model="familyevent.day" :class="{ 'is-danger': $v.familyevent.day.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.day.$error }" v-if="!$v.familyevent.day.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Type</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Type" v-model="familyevent.type" :class="{ 'is-danger': $v.familyevent.type.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.type.$error }" v-if="!$v.familyevent.type.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Plac</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Plac" v-model="familyevent.plac" :class="{ 'is-danger': $v.familyevent.plac.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.plac.$error }" v-if="!$v.familyevent.plac.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phon</label>
                      <div class="control">
                        <input class="input" type="number" placeholder="Phon" v-model="familyevent.phon" :class="{ 'is-danger': $v.familyevent.phon.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.phon.$error }" v-if="!$v.familyevent.phon.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Caus</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Caus" v-model="familyevent.caus" :class="{ 'is-danger': $v.familyevent.caus.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.caus.$error }" v-if="!$v.familyevent.caus.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Age</label>
                      <div class="control">
                        <input class="input" type="number" placeholder="Age" v-model="familyevent.age" :class="{ 'is-danger': $v.familyevent.age.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.age.$error }" v-if="!$v.familyevent.age.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Husb</label>
                      <div class="control">
                        <input class="input" type="number" placeholder="Husb" v-model="familyevent.husb" :class="{ 'is-danger': $v.familyevent.husb.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.husb.$error }" v-if="!$v.familyevent.husb.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Wife</label>
                      <div class="control">
                        <input class="input" type="number" placeholder="Wife" v-model="familyevent.wife" :class="{ 'is-danger': $v.familyevent.wife.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.familyevent.wife.$error }" v-if="!$v.familyevent.wife.required">Field is required</p>
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
            family_id: '',
            age: 0,
            familyevent: {
                family_id: "",
                places_id: "",
                date: "",
                title: "",
                description: "",
                year: "",
                month: "",
                day: "",
                type: "",
                plac: "",
                phon: "",
                caus: "",
                age: "",
                husb: "",
                wife: "",
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
            familyevent: {
                family_id: {
                    required,
                },
                places_id: {
                    required,
                },
                date: {
                    required,
                },
                title: {
                    required,
                },
                description: {
                    required,
                },
                year: {
                    required,
                },
                month: {
                    required,
                },
                day: {
                    required,
                },
                type: {
                    required,
                },
                plac: {
                    required,
                },
                phon: {
                    required,
                },
                caus: {
                    required,
                },
                age: {
                    required,
                },
                husb: {
                    required,
                },
                wife: {
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
              this.$axios.$post('/api/familyevent', this.familyevent)
                  .then(response => ( this.$router.push('/familyevent') ))
                  .catch(error => {
                  });
            }
        },
    }
}
</script>
