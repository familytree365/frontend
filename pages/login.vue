<template>
<div>
    <loading :active.sync="isLoading" :color="color" :background-color="backgroundColor"> </loading>
    <div class="container auth is-fluid px-0">
        <div class="columns is-multiline is-gapless">
            <div class="column is-6-tablet is-5-desktop is-5-widescreen is-5-fullhd">
                <div class="auth has-background-primary">
                    <div class="auth-content">
                        <div class="has-text-centered">
                            <NuxtLink to="/"><img src="~assets/images/logo1.svg" alt="" width="300px"></NuxtLink>
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
                            {{ error_message }}
                        </div>
                        <div v-for="(error, index) in errors" :key="index" class="notification is-danger">
                            {{ error[0] }}
                        </div>
                        <div class="mb-5">
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input is-large" :class="{ 'is-danger': $v.email.$error }" type="email" placeholder="Email address" v-model="email">
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon :icon="['fas', 'envelope']" />
                                    </span>
                                </p>
                                <div v-if="$v.email.$error">
                                    <p class="help" :class="{ 'is-danger': $v.email.$error }" v-if="!$v.email.required">Field is required</p>
                                    <p class="help" :class="{ 'is-danger': $v.email.$error }" v-if="!$v.email.email">Please enter a valid email address</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input is-large" :class="{ 'is-danger': $v.password.$error }" type="password" placeholder="Password" v-model="password">
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon :icon="['fas', 'lock']" />
                                    </span>
                                </p>
                                <div v-if="$v.password.$error">
                                    <p class="help" :class="{ 'is-danger': $v.password.$error }" v-if="!$v.password.required">Field is required</p>
                                </div>
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
                            <button type="submit" class="button theme-button theme-button-xl has-background-primary is-uppercase has-text-weight-medium has-text-white">
                                Login
                            </button>
                        </div>
                        <div>
                            <p class="is-size-6 has-text-dark has-text-centered has-text-weight-regular">
                                Don't have an account? <NuxtLink to="/register" class="has-text-link has-text-weight-medium"> Register Now </NuxtLink>
                            </p>
                        </div>
                    </form>
                    <div class="divider">or</div>
                    <a @click="loginSocial('google')" href="javascript:;" class="btn cnt-g">
                        <img src="~assets/images/google.jpg">
                        {{ 'Continue with google' }}
                    </a>
                    <a @click="loginSocial('facebook')" href="javascript:;" class="btn cnt-g mb-5">
                        <img src="~assets/images/facebook.png">
                        {{ 'Continue with Facebook' }}
                    </a>                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import response from "core-js/internals/is-forced";
import facebookLogin from 'facebook-login-vuejs';
export default {
    middleware: 'guest',
    components: {
        Loading,
        facebookLogin
    },
    data() {
        return {
            email: '',
            password: '',
            errors: null,
            error: false,
            error_message: null,
            isLoading: false,
            fullPage: true,
            color: '#4fcf8d',
            backgroundColor: '#ffffff',
            provider: null,
            fbLoginOptions: {scope: 'public_profile,email'}
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(8)
        }
    },

    methods: {
        loginSocial(provider) {
            this.provider = provider
            const newWindow = openWindow('', 'message')
            let url = '/api/login/' + provider;
            this.$axios.get(url)
            .then(res => {
                console.log(res)
                newWindow.location.href = res.data;
              //window.location.href = url;
            })
            .catch(err => {
              console.log(err);
            })
        },
        login() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                console.log("fail")
            } else {
                this.isLoading = true
                this.$axios.get('/sanctum/csrf-cookie', {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    withCredentials: true,
                }).then(() => {
                    this.$auth.loginWith('local', {
                        data: {
                            email: this.email,
                            password: this.password
                        },
                    }).then((response) => {
                        this.loadRole()
                        this.isLoading = false
                    }).catch(error => {
                        this.isLoading = false
                        this.error = true;
                        this.error_message = error.response.data.message;
                        this.errors = error.response.data.errors;
                    })
                })
            }
        },
        ...mapActions([
            "loadRole"
        ]),
        onMessage(e) {
            var _this = this;
            if (e.data.data == undefined) {
                return;
            }
            if (e.data.error && !e.data.success) {
                this.$auth.logout();
                this.error = true;
                this.error_message = 'Unauthenticated!';
                this.isLoading = false;
            }
            var data = e.data.data;
            data = JSON.parse(data.replace(/&quot;/g, '"'));
            if (e.data.error && !e.data.success) {
                this.isLoading = false
                this.error = true;
                this.error_message = !e.data.message;
                this.$auth.logout();
                return false;
            } else {
                this.isLoading = true
                this.$axios.get('/sanctum/csrf-cookie', {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    withCredentials: true,
                }).then(() => {

                    data.isSocialLogin = true;
                    console.log(data);
                    this.$auth.loginWith('local', {
                        data : data
                    }).then((response) => {
                        this.loadRole();
                        this.isLoading = false;
                        this.$router.push("/dashboard");
                    }).catch(error => {
                        this.isLoading = false;
                        this.error = true;
                        this.error_message = error.response.data.message;
                        this.errors = error.response.data.errors;
                    });
                });
            }
        }
    },
    watch: {
        message(value) {
            // console.log(value);
            // this.successMessage = value
        }
    },
    mounted() {
        window.addEventListener('message', this.onMessage, false);
    },
    beforeDestroy() {
        window.removeEventListener('message', this.onMessage)
    },
}

function openWindow(url, title, options = {}) {
    if (typeof url === 'object') {
        options = url
        url = ''
    }

    options = {
        url,
        title,
        width: 600,
        height: 720,
        ...options
    }

    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
    const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
    const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height

    options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
    options.top = ((height / 2) - (options.height / 2)) + dualScreenTop

    const optionsStr = Object.keys(options).reduce((acc, key) => {
        acc.push(`${key}=${options[key]}`)
        return acc
    }, []).join(',')

    const newWindow = window.open(url, title, optionsStr)

    if (window.focus) {
        newWindow.focus()
    }
    // console.log(newWindow);

    return newWindow
}
</script>

<style scoped>
@import '~/assets/css/base.css';

.auth-form .cnt-g {
    width: 100%;
    border: 1px solid #E4E4E4;
    border-radius: 3px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    margin-top: 13px;
    color: #707070;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: none !important;
    text-align: center;
    cursor: pointer;
}

.auth-form .cnt-g img {
    max-height: 20px;
    float: left;
    margin-top: 15px;
}

.auth-form .divider {
    text-align: center;
    position: relative;
    margin-top: 20px;
    line-height: 1;
    color: #4F4E60;
    font-size: 10px;
    text-transform: uppercase;
}

.auth-form .divider:before,
.auth-form .divider:after {
    content: "";
    position: absolute;
    top: 3px;
    width: 47%;
    height: 1px;
    background-color: #E4E4E4;
}

.auth-form .divider:before {
    left: 0;
}

.auth-form .divider:after {
    right: 0;
}
</style>
