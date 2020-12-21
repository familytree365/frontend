<template>
    <div>
     <div class="container auth is-fluid px-0">
        <div class="columns is-multiline is-gapless">
            <div class="column is-6-tablet is-5-desktop is-5-widescreen is-5-fullhd">
                <div class="auth has-background-primary">
                    <div class="auth-content">
                        <div class="has-text-centered">
                            <img src="~assets/images/logo1.svg" alt="" width="300px" >
                        </div>
                        <div class="auth-inner-content my-6">
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs mb-5">
                                <img src="~assets/images/bcheckmark.webp" alt="" class="bullet mt-1 mr-3">
                                Family Tree 365 is a secure online website
                                which you can use to create your own family tree(s) with.</div>
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs mb-5">
                                <img src="~assets/images/bcheckmark.webp" alt="" class="bullet mt-1 mr-3">
                                It has a tree viewer and DNA support
                                more features are planned such as the inclusion of archive databases and
                                collections</div>
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs">
                                <img src="~assets/images/bcheckmark.webp" alt="" class="bullet mt-1 mr-3">
                              Set up your first family tree free of charge.
                              We offer different pricing levels with optional subscriptions if you need to create extra trees.</div>
                        </div>
                        <img class="auth-img" src="~assets/images/mockup01@2x.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="column is-6-tablet is-7-desktop is-7-widescreen is-7-fullhd is-gapless">
                <div class="auth-form is-gapless">

                	<form @submit.prevent="login()">
                    <div class="mb-5">
                        <NuxtLink to="/" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2">
                            <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" /> Back to Home</NuxtLink>
                        <h1 class="is-size-4 has-text-black has-text-weight-bold">
                            Sign in to your account
                        </h1>
                    </div>
                    <div v-if="error" class="notification is-danger">
                        {{ message }}
                    </div>
                    <div v-for="error in errors" class="notification is-danger">
                        {{ error[0] }} 
                    </div>
                    <div class="mb-5">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                            <input class="input is-large" :class="{ 'is-danger': $v.email.$error }" type="email" placeholder="Email address" v-model="email">
                            <span class="icon is-small is-left">
                                <font-awesome-icon :icon="['fas', 'envelope']"/>
                            </span>
                            </p>
                            <p class="help" :class="{ 'is-danger': $v.email.$error }" v-if="!$v.email.required">Field is required</p>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-large" :class="{ 'is-danger': $v.password.$error }" type="password" placeholder="Password" v-model="password">
                                <span class="icon is-small is-left">
                                <font-awesome-icon :icon="['fas', 'lock']"/>
                                </span>
                            </p>
                            <p class="help"  :class="{ 'is-danger': $v.password.$error }" v-if="!$v.password.required">Field is required</p>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="columns is-mobile is-gapless">
                            <div class="column">
                                <label class="checkbox">
                                    <input class="mr-1" type="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <div class="column has-text-right">
                                <NuxtLink to="/forgotpassword" class="has-text-link has-text-weight-medium"> Forgot password? </NuxtLink>
                            </div>
                        </div>

                    </div>
                    <div class="mb-6">
                        <button type="submit"
                            class="button theme-button theme-button-xl has-background-primary is-uppercase has-text-weight-medium has-text-white">
                            Login
                        </button>
                    </div>
                    <div>
                        <p class="is-size-6 has-text-dark has-text-centered has-text-weight-regular">
                            Don't have an account? <NuxtLink to="/register" class="has-text-link has-text-weight-medium"> Register Now </NuxtLink>
                        </p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>h
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required } from 'vuelidate/lib/validators'
export default {
    middleware: 'guest',
    data() {
        return {
            email: '',
            password: '',
            errors:null,
            error: false,
            message: null,
        }
    },
    validations: {
        email: {
            required,
        },
        password: {
            required
        }
    },

  methods: {
    login() {
        this.$v.$touch();
        if (this.$v.$invalid) {
            console.log("fail")
        } else {
            this.$axios.get('/sanctum/csrf-cookie', {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                },
                withCredentials: true,
            })
            .then(() => {
                this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    },
                })
                .then(() => {
                    this.loadRole()
                })
                .catch(error => {
                    this.error = true;
                    this.message = error.response.data.message;
                    this.errors =  error.response.data.errors;
                })
            })
        }

    },
    ...mapActions([
            "loadRole"
    ])
  }
}
</script>

 <style scoped>
    @import '~/assets/css/base.css';
</style>
