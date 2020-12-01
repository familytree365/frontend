<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create People
                </h1>
              <NuxtLink to="/people" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="people.name">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="people.email">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="people.phone">
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
        <div>
  <div class="form-group" :class="{ 'is-danger': $v.name.$error }">
    <label class="form__label" :class="{ 'is-danger': $v.name.$error }">Name</label>
    <input class="input" v-model.trim="$v.name.$model" :class="{ 'is-danger': $v.name.$error }"/>
  </div>
  <p class="help"  :class="{ 'is-danger': $v.name.$error }" v-if="!$v.name.required">Field is required</p>
  <div class="help" :class="{ 'is-danger': $v.name.$error }" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
  <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
  <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
    <label class="form__label">Age</label>
    <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
  </div>
  <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
  <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view>
</div>
    </div>
            
</template>

<script>
    import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
    
    layout: 'auth',
    data() {
        return {
            error: false,
            message: "",
            name: '',
            age: 0,
            people: {
                name: "",
                email: "",
                phone: "",
            }
        };
    },
    validations: {
        name: {
          required,
          minLength: minLength(4)
        },
        age: {
          between: between(20, 30)
        }
    },
    methods: {
        save() {
        this.$axios.$post('/api/person', this.people)
            .then(response => ( this.$router.push('/people') )) 
            .catch(error => {
            });
        },
    }
}
</script>
