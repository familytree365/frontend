<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Tree
                </h1>
                <NuxtLink to="/tree" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="tree.name"  :class="{ 'is-danger': $v.tree.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.tree.name.$error }" v-if="!$v.tree.name.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="tree.description">
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button @click.prevent="update()"  class="button is-link has-background-primary">Submit</button>
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
                tree: {
                    name: "",
                }
            };
        },
        validations: {
            tree: {
                name: {
                    required,
                },
            },
        },
        methods: {

            update() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    const id = this.$route.params.id
                    this.$axios.$put('/api/tree/'+id, this.tree)
                            .then(response => (this.$router.push('/tree')))
                            .catch(error => {
                            });
                }
            },
            async getTree(){
                const id = this.$route.params.id
                const response = await this.$axios.$get('/api/tree/'+id+'/edit')
                            .then(response => this.tree = response)
                            .catch(error => {
                            });
            }
        },
        created() {
            this.getTree()
        }
    }
</script>
