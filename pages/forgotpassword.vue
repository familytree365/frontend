<template>
    <div>
     <div class="container auth is-fluid px-0">
        <div class="columns is-multiline is-gapless">
            <div class="column is-6-tablet is-5-desktop is-5-widescreen is-5-fullhd">
                <div class="auth signin has-background-primary">
                    <div class="auth-content">
                        <div class="has-text-centered">
                            <img src="~assets/images/logo1.svg" alt="" width="300px" >
                        </div>
                        <div class="auth-inner-content my-6">
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs mb-5">
                                <img src="~assets/images/bcheckmark.png" alt="" class="bullet mt-1 mr-3">
                                Genealogia is a secure online website
                                which you can use to create your own family tree(s) with.</div>
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs mb-5">
                                <img src="~assets/images/bcheckmark.png" alt="" class="bullet mt-1 mr-3">
                                It has a tree viewer and DNA support
                                more features are planned such as the inclusion of archive databases &amp;
                                collections</div>
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs">
                                <img src="~assets/images/bcheckmark.png" alt="" class="bullet mt-1 mr-3">
                                It is aimed to be affordable with a 7 day
                                no obligation trial with different pricing levels depending on how many trees you
                                require.</div>
                        </div>
                        <img class="auth-img" src="~assets/images/mockup01@2x.png" alt="">
                    </div>
                </div>
            </div>
            <div class="column is-6-tablet is-7-desktop is-7-widescreen is-7-fullhd is-gapless">
                <div class="auth-form is-gapless">
                    <div class="mb-5">
                        <NuxtLink to="/" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2">
                            <i class="fas fa-angle-left mt-1 mr-2"></i> Back to Home</NuxtLink>
                        <h1 class="is-size-4 has-text-black has-text-weight-bold">
                            Forgot your password?
                        </h1>
                        <div class="is-size-6 has-text-black has-text-weight-regular mt-2">We will send an email to your email address to
                            reset your password. Please check it out. </div>
                    </div>
                    <div class="mb-5">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                            <input class="input is-large" type="email" placeholder="Email address">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            </p>
                        </div>
                    </div>  
                    <div class="mb-6">
                        <a
                            class="button theme-button theme-button-xl has-background-primary is-uppercase has-text-weight-medium has-text-white">
                            Submit
                        </a>
                    </div>
                    <div>
                        <p class="is-size-6 has-text-dark has-text-centered has-text-weight-regular">
                            Back to <NuxtLink to="/login" class="has-text-link has-text-weight-medium"> Sigin in </NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
</template>

<script>
export default {}
</script>

 <style scoped>
    @import '~/assets/css/base.css';
</style>