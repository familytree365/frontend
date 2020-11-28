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
export default {
    layout: 'auth',
    data() {
        return {
            error: false,
            message: "",
            people: {
                name: "",
            }
        };
    },
    methods: {
        save() {
        this.$axios.$put('/api/people/'+this.$route.params.id, this.people)
            .then(response => ( this.$router.push('/people') )) 
            .catch(error => {
            });
        },
    },
    async asyncData({ $axios,params }) {
      const people = await $axios.$get('/api/people/'+params.id)
      return { people }
    }
}
</script>
