<template>
    <div>
     <div class="container auth is-fluid px-0">
        <div class="columns is-multiline is-gapless">
            <div class="column is-6-tablet is-5-desktop is-5-widescreen is-5-fullhd">
                <div class="auth signin has-background-primary">
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
                            collections.</div>
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
                    <form @submit.prevent="submit()">
                    <div class="mb-5">
                        <NuxtLink to="/" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2">
                            <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2"/> Back to Home</NuxtLink>
                        <h1 class="is-size-4 has-text-black has-text-weight-bold">
                            Reset Password
                        </h1>
                    </div>
                    <div class="notification is-success" v-if="message">
                        <p>{{ message }}</p>
                    </div>
                    <div class="notification is-danger" v-if="error_msg">
                        {{ error_msg }}
                    </div>
                    <div v-for="error in errors" class="notification is-danger">
                        {{ error[0] }}
                    </div>
                    <a v-if="message" href="/login" class="has-text-link has-text-weight-medium"> Login </a>
                    <div v-if="error" class="notification is-danger">
                        {{ error }}
                    </div>
                    <div class="mb-5">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                            <input class="input is-large" type="email" placeholder="Email address" :class="{ 'is-danger': $v.email.$error }" v-model="email">
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
                                <input class="input is-large" type="password" placeholder="Password" :class="{ 'is-danger': $v.password.$error }" v-model="password">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'lock']"/>
                                </span>
                            </p>
                            <p class="help" :class="{ 'is-danger': $v.password.$error }" v-if="!$v.password.required">Field is required</p>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-large" type="password" placeholder="Confirm Password" :class="{ 'is-danger': $v.password_confirmation.$error }" v-model="password_confirmation">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'lock']"/>
                                </span>
                            </p>
                            <p class="help" :class="{ 'is-danger': $v.password_confirmation.$error }" v-if="!$v.password_confirmation.required">Field is required</p>
                        </div>
                    </div>
                    <div class="mb-6">
                        <div class="mb-6">
                        <button
                            class="button theme-button theme-button-xl has-background-primary is-uppercase has-text-weight-medium has-text-white">
                            submit
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
	</div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
export default {
    middleware: 'guest',
    data() {
        return {
            error: false,
            message: null,
            email: null,
            password:null,
            password_confirmation: null,
            errors: null,
            error_msg: null,
        };
    },
    validations: {
        email: {
            required,
        },
        password: {
            required,
        },
        password_confirmation: {
            required,
        },
    },
    mounted() {
        console.log(this.$route.params.id);
      },
    methods: {
        submit() {
            console.log("hgh");
            this.$v.$touch();
            if (this.$v.$invalid) {
                console.log("fail")
            } else {
                this.$axios
                .$post("/api/password/reset", {
                        token: this.$route.params.id,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                })
                    this.message =  response.msg;
                    this.error_msg = response.error_msg
                .catch(error => {
                    this.error = error.msg;
                    this.errors =  error.response.data.errors;
                });
            }
        }
    }
}
</script>

 <style scoped>
    @import '~/assets/css/base.css';
</style>
