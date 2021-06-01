<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Role
                </h1>
                <NuxtLink to="/roles" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form >
                	<div class="field">
                        <label class="label">Assign Permission</label>
                        <div class="control">
                            <v-select label="name" multiple  v-model="role.permissions" :reduce="tree => tree.id" :options="options"></v-select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="role.name"  :class="{ 'is-danger': $v.role.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.role.name.$error }" v-if="!$v.role.name.required">Field is required</p>
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
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { mapGetters, mapActions } from "vuex";
Vue.component('v-select', vSelect);
    import { required } from 'vuelidate/lib/validators'
    export default {

        layout: 'auth',
        data() {
            return {
                error: false,
                options: [],
                message: "",
                name: '',
                age: 0,
                role: {
                    name: "",
                    permissions: "",
                }
            };
        },
        validations: {
            role: {
                name: {
                    required,
                },
            },
        },
        computed: {
             ...mapGetters([
              'isAuthenticated',
              'loggedInUser','getRole','getPermission'])
        },
        methods: {

            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.$axios.$put('/api/roles/' + this.$route.params.id , this.role)

                            this.loadRole()
                            this.loadPermission()
                			this.$router.push('/roles')
                        .catch(error => {
                        });
                }
            },
      		async getallPermission() {
  		    	const response = await this.$axios.$get("/api/getpermissions")

  		                this.options = response
  		    },
      	    async getRolePermission() {
      	    	const response = await this.$axios.$get("/api/getrolepermission/"+this.$route.params.id)

  		            	this.role.name = response.role.name
  		               	this.role.permissions = response.permissions
  		    },
             ...mapActions([
                "loadRole",
                "loadPermission"
            ]),
      	},
        created() {
        	this.getRolePermission()
            this.getallPermission()
        }
    }
</script>
