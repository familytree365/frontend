<template>
    <div>
     <div class="container auth is-fluid px-0">
        <div class="columns is-multiline is-gapless">
            <div class="column is-6-tablet is-5-desktop is-5-widescreen is-5-fullhd">
                <div class="auth has-background-primary">
                    <div class="auth-content">
                        <div class="has-text-centered">
                            <img src="img/logo.svg" alt="" width="300px" >
                        </div>
                        <div class="auth-inner-content my-6">
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs mb-5">
                                <img src="img/bcheckmark.png" alt="" class="bullet mt-1 mr-3">
                                Genealogia is a secure online website
                                which you can use to create your own family tree(s) with.</div>
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs mb-5">
                                <img src="img/bcheckmark.png" alt="" class="bullet mt-1 mr-3">
                                It has a tree viewer and DNA support
                                more features are planned such as the inclusion of archive databases &amp;
                                collections</div>
                            <div class="has-text-white has-text-weight-regular is-flex ai--fs">
                                <img src="img/bcheckmark.png" alt="" class="bullet mt-1 mr-3">
                                It is aimed to be affordable with a 7 day
                                no obligation trial with different pricing levels depending on how many trees you
                                require.</div>
                        </div>
                        <img class="auth-img" src="img/mockup01@2x.png" alt="">
                    </div>
                </div>
            </div>
            <div class="column is-6-tablet is-7-desktop is-7-widescreen is-7-fullhd is-gapless">
                <div class="auth-form is-gapless">
                    <div class="mb-5">
                        <a href="index.html" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2">
                            <i class="fas fa-angle-left mt-1 mr-2"></i> Back to Home</a>
                        <h1 class="is-size-4 has-text-black has-text-weight-bold">
                            Sign in to your account
                        </h1>
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
                    <div class="mb-5">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-large" type="email" placeholder="Password">
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </p>
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
                                <a href="forgotpassword.html" class="has-text-link has-text-weight-medium"> Forgot password? </a>
                            </div>
                        </div> 
                            
                    </div>
                    <div class="mb-6">
                        <a href="dashboard.html"
                            class="button theme-button theme-button-xl has-background-primary is-uppercase has-text-weight-medium has-text-white">
                            Login
                        </a>
                    </div>
                    <div>
                        <p class="is-size-6 has-text-dark has-text-centered has-text-weight-regular">
                            Don't have an account? <a href="signup.html" class="has-text-link has-text-weight-medium"> Register Now </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div
    </div>
</template>

<script>
export default {}
</script>

 <style scoped>
    @import '~/assets/css/base.css';
</style>