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
                        <img class="auth-img" src="~assets/images/mockup03@2x.webp" alt="">
                    </div>
                </div>
            </div>
             <div class="column is-6-tablet is-7-desktop is-7-widescreen is-7-fullhd is-gapless">
                <div class="auth-form is-gapless">
                    <div class="mb-5">
                        <NuxtLink to="/" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2">
                            <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2"/> Back to Home</NuxtLink>
                        <h1 class="is-size-4 has-text-black has-text-weight-bold">
                            Email verification
                        </h1>
                        <div v-if="message" class="notification is-success">
                            {{ message }}
                        </div>
                        <div class="is-size-6 has-text-black has-text-weight-regular mt-2">You need to confirm your account. We have sent you an activation code, please check your email.<a @click.prevent="resendLink" class="has-text-link has-text-weight-medium"> ResendLink </a></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapGetters } from "vuex";
export default {
    middleware: 'auth',
    components: {
        Loading
    },
    data() {
        return {
            isLoading: false,
            fullPage: true,
            color: '#4fcf8d',
            backgroundColor: '#ffffff',
            message: null,
        }

    },
    computed: {
             ...mapGetters([
              'isAuthenticated',
              'loggedInUser',
              'loggedInUser'])
    },
    methods: {

        async resendLink() {
            var response = await this.$axios.$post("/api/email/verification-notification", {
                        email: this.loggedInUser.email,
                })
            console.log(response)
                    this.message = null
                    this.message = response.message
        }
    }
}
</script>

 <style scoped>
    @import '~/assets/css/base.css';
</style>
