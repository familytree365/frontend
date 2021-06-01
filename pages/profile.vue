<template>
    <div>
       <div class="card">
            <header class="card-header">
                <p class="card-header-title is-4 is-centered title">
                Profile
                </p>
              <NuxtLink to="/dashboard" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
            	<section class="section is-main-section">
            		<div class="tile is-ancestor">
            			<div class="tile is-parent">
            				<div class="card tile is-child">
            					<header class="card-header">
            						<p class="card-header-title">
            							<span class="icon"><i class="mdi mdi-account-circle default"></i></span><span>Edit Profile</span>
            						</p><!---->
            					</header>
            					<div class="card-content">
            						<form @submit.prevent="editProfile">
                                        <div v-if="profile_error_message" class="notification is-danger">
                                            {{ profile_error_message }}
                                        </div>
                                        <div v-for="error in profile_errors" class="notification is-danger">
                                            {{ error[0] }}
                                        </div>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">Avatar</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="field file"><!---->
            											<div class="file is-success">
														    <label class="file-label">
														      <input class="file-input" type="file" name="resume">
														      <span class="file-cta">
														        <span class="file-icon">
														        <font-awesome-icon :icon="['fas', 'upload']"/>
														        </span>
														        <span class="file-label">
														          Upload Avatar
														        </span>
														      </span>
														    </label>
														  </div>
            										</div><!---->
            									</div>
            								</div><!---->
            							</div>
            							<hr>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">First Name</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<input type="text" autocomplete="on" name="name" required="required" class="input" v-model="user.first_name"  :class="{ 'is-danger': $v.user.first_name.$error }"><!----><!----><!---->
            										</div>
            										<p class="help" :class="{ 'is-danger': $v.user.first_name.$error }" v-if="!$v.user.first_name.required">Field is required</p>
            									</div>
            								</div><!---->
            							</div>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">Last Name</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<input type="text" autocomplete="on" name="name" class="input" v-model="user.last_name" :class="{ 'is-danger': $v.user.last_name.$error }"><!----><!----><!---->
            										</div>
            										<p class="help" :class="{ 'is-danger': $v.user.last_name.$error }" v-if="!$v.user.last_name.required">Field is required</p>
            									</div>
            								</div><!---->
            							</div>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">E-mail</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<input type="email" autocomplete="on" name="email" class="input" v-model="user.email"   :class="{ 'is-danger': $v.user.email.$error }"><!----><!----><!---->
            										</div>
            										<p class="help" :class="{ 'is-danger': $v.user.email.$error }" v-if="!$v.user.email.required">Field is required</p>
            									</div>
            								</div><!---->
            							</div><hr>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal"><!---->

            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<button type="submit" class="button is-link has-background-primary"> Submit </button>
            										</div><!---->
            									</div>
            								</div><!---->
            							</div>
            						</form>
            					</div><!---->
            				</div>
            			</div>
            			<div class="tile is-parent">
            				<div class="card tile is-child">
            					<header class="card-header">
            						<p class="card-header-title">
            							<span class="icon"><i class="mdi mdi-account default"></i></span><span>Profile</span>
            						</p><!---->
            					</header>
            					<div class="card-content">
            						<figure class="image is-128x128 is-flex is-justify-content-center"><img class="is-rounded" src="~assets/images/avatar.jpg" width="150" alt="">
            						</figure>
            						<hr>
            						<div class="field">
            							<label class="label">First Name</label>
            							<div class="control is-clearfix">
            								<input type="text" autocomplete="on" :value="user.first_name" readonly="readonly" class="input is-static"><!----><!----><!---->
            							</div><!---->
            						</div>
            						<div class="field">
            							<label class="label">Last Name</label>
            							<div class="control is-clearfix">
            								<input type="text" autocomplete="on" :value="user.last_name" readonly="readonly" class="input is-static"><!----><!----><!---->
            							</div><!---->
            						</div>
            						<div class="field">
            							<label class="label">E-mail</label>
            							<div class="control is-clearfix">
            								<input type="text" autocomplete="on" :value="user.email" readonly="readonly" class="input is-static"><!----><!----><!---->
            							</div><!---->
            						</div>
            					</div><!---->
            				</div>
            			</div>
            		</div>
            		<div class="card">
            			<header class="card-header">
            				<p class="card-header-title">
            					<span class="icon"><i class="mdi mdi-lock default"></i></span>
            					<span>Change Password</span>
            				</p><!---->
            			</header>
            			<div class="card-content">
            				<form @submit.prevent="changePassword">
                                <div v-if="password_error_message" class="notification is-danger">
                                    {{ password_error_message }}
                                </div>
                                <div v-for="error in password_errors" class="notification is-danger">
                                    {{ error[0] }}
                                </div>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal">
            							<label class="label">Current password</label>
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<input type="password" autocomplete="on" name="password_current" autcomplete="current-password" class="input" v-model="password.old_password" :class="{ 'is-danger': $v.password.old_password.$error }"><!----><!----><!---->
            								</div>
            								<p class="help" :class="{ 'is-danger': $v.password.old_password.$error }" v-if="!$v.password.old_password.required">Field is required</p>
            							</div>
            						</div><!---->

            					</div><hr>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal">
            							<label class="label">New password</label>
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<input type="password" autocomplete="new-password" name="password" class="input" v-model="password.new_password" :class="{ 'is-danger': $v.password.new_password.$error }"><!----><!----><!---->
            								</div>
            								<p class="help" :class="{ 'is-danger': $v.password.new_password.$error }" v-if="!$v.password.new_password.required">Field is required</p>
            							</div>
            						</div><!---->
            					</div>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal">
            							<label class="label">Confirm password</label>
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<input type="password" autocomplete="new-password" name="password_confirmation" class="input" v-model="password.password_confirmation" :class="{ 'is-danger': $v.password.password_confirmation.$error }"><!----><!----><!---->
            								</div>
            								<p class="help" :class="{ 'is-danger': $v.password.password_confirmation.$error }" v-if="!$v.password.password_confirmation.required">Field is required</p>
            							</div>
            						</div><!---->
            					</div><hr>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal"><!---->

            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<button type="submit" class="button is-link has-background-primary"> Submit </button>
            								</div><!---->
            							</div>
            						</div><!---->
            					</div>
            				</form>
            			</div><!---->
            		</div>
            	</section>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
    layout: 'auth',
    data() {
            return {
                  message: "",
                  password_errors: null,
                  profile_errors:null,
                  profile_error_message: null,
                  password_error_message: null,
                  user: {
                        first_name: "",
                        last_name: "",
                        email: "",
                  },
                  password: {
                        old_password: null,
                        new_password: null,
                        password_confirmation: null
                  }

            };
      },
      validations: {
            user: {
                first_name: {
                    required,
                },
                last_name: {
                    required,
                },
                email: {
                    required,
                },
            },
            password: {
                  old_password: {
                        required,
                  },
                  new_password: {
                        required,
                  },
                  password_confirmation: {
                        required,
                  },
            }

      },
      computed: {
         ...mapGetters([
              'isAuthenticated',
              'loggedInUser','loggedInUser'])

      },
      mounted() {
          this.user.first_name = this.loggedInUser.first_name;
          this.user.last_name = this.loggedInUser.last_name;
          this.user.email = this.loggedInUser.email;
      },
     methods: {
        editProfile() {
            this.$v.user.first_name.$touch();
            this.$v.user.last_name.$touch();
            this.$v.user.email.$touch();

            if (!this.$v.user.first_name.$invalid && !this.$v.user.last_name.$invalid && !this.$v.user.email.$invalid) {
                this.$axios
                .$post("/api/profile/update", this.user)

                  this.loggedInUser()
                .catch(error => {
                    this.error = true;
                    this.profile_error_message = error.response.data.message;
                    this.profile_errors =  error.response.data.errors;
                });
            }
        },
        changePassword() {
            this.$v.password.old_password.$touch();
            this.$v.password.new_password.$touch();
            this.$v.password.password_confirmation.$touch();

            if (!this.$v.password.old_password.$invalid && !this.$v.password.new_password.$invalid && !this.$v.password.password_confirmation.$invalid) {
                this.$axios
                .$post("/api/password/change", this.password)

                .catch(error => {
                    this.error = true;
                    this.password_error_message = error.response.data.message;
                    this.password_errors =  error.response.data.errors;
                });
            }
        }
    }
}
</script>
