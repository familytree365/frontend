<template>
    <div>
     <section class="hero main-hero" id="home">
        <div class="hero-body is-flex ai--c">
            <div class="navbar is-fixed-top clearHeader" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <img src="~assets/images/logo1.svg">
                    </a>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <nav class="navbar-end">
                        <a data-scroll class="navbar-item" href="#home">
                            Home
                        </a>
                        <a data-scroll class="navbar-item" href="#features">
                            Features
                        </a>
                        <a data-scroll class="navbar-item" href="#why">
                            Why Genealogia
                        </a>
                        <a data-scroll class="navbar-item" href="#overview">
                            Overview
                        </a>
                        <NuxtLink to="/login" class="navbar-item">
                          Sign in
                        </NuxtLink>
                        <div class="navbar-item">
                            <div class="buttons">
                                <NuxtLink to="/register"
                                    class="button theme-button has-background-secondary has-text-weight-medium has-text-white">
                                    Create an account
                                </NuxtLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="container has-text-centered">
                <div class="columns is-gapless mt-6 is-mobile">
                    <div class="column is-12 is-flex jc--c">
                        <div class="hero-content">
                            <h1 class="is-size-2 has-text-white has-text-weight-bold">
                                Genealogia is a secure online website which you can create your own family tree with.
                            </h1>
                            <h2 class="is-size-5 has-text-light mt-6">
                                It is designed to have extensive features but be easy and accessible to use. You can
                                easily import and export GEDCOM files, view and manipulate the data.
                            </h2>
                            <NuxtLink to="/register"
                                class="button theme-button theme-button-xl has-background-secondary has-text-weight-medium has-text-white mt-6">
                                Create Your Own Tree
                            </NuxtLink>
                            <div class="is-size-6 has-text-light mt-5"> <NuxtLink class="has-text-light" to="/login"> Already have an account? Sign in </NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features px-5 my-6" id="features">
        <div class="container">
            <h1 class="is-size-2 has-text-black has-text-weight-bold mb-6">
                Our Product Features
            </h1>
            <div class="columns is-variable is-8 is-multiline">
                <div class="column is-4 mb-5">
                    <img src="~assets/images/secured.svg" alt="" class="mb-4">
                    <div class="is-size-4 has-text-black has-text-weight-bold"> Secured &amp; Easy to Use </div>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Porro magni aperiam aspernatur, veritatis officiis autem
                        repudiandae. </div>
                </div>
                <div class="column is-4 mb-5">
                    <img src="~assets/images/import.svg" alt="" class="mb-4">
                    <div class="is-size-4 has-text-black has-text-weight-bold"> Easily Import & Export</div>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Porro magni aperiam aspernatur, veritatis officiis autem
                        repudiandae. </div>
                </div>
                <div class="column is-4 mb-5">
                    <img src="~assets/images/record.svg" alt="" class="mb-4">
                    <div class="is-size-4 has-text-black has-text-weight-bold"> Record your Family </div>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Porro magni aperiam aspernatur, veritatis officiis autem
                        repudiandae. </div>
                </div>
                <div class="column is-4 mb-5">
                    <img src="~assets/images/ntree.svg" alt="" class="mb-4">
                    <div class="is-size-4 has-text-black has-text-weight-bold"> No limit for Family Tree </div>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Porro magni aperiam aspernatur, veritatis officiis autem
                        repudiandae. </div>
                </div>
                <div class="column is-4 mb-5">
                    <img src="~assets/images/upload.svg" alt="" class="mb-4">
                    <div class="is-size-4 has-text-black has-text-weight-bold"> Upload your Files </div>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Porro magni aperiam aspernatur, veritatis officiis autem
                        repudiandae. </div>
                </div>
                <div class="column is-4 mb-5">
                    <img src="~assets/images/gimport.svg" alt="" class="mb-4">
                    <div class="is-size-4 has-text-black has-text-weight-bold"> GEDCOM Import </div>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Porro magni aperiam aspernatur, veritatis officiis autem
                        repudiandae. </div>
                </div>
            </div>
        </div>
    </section>

    <section class="why my-6" id="why">
        <div class="container is-fluid my-6 px-0">
            <div class="columns my-6 is-gapless is-multiline">
                <div class="column is-5">
                    <img src="~assets/images/sd.svg" class="flot-block" alt="">
                </div>
                <div class="column is-7 is-flex jc--c ai--c">
                    <div class="px-5 is-flex fd--c jc--c py-6">
                        <h1 class="is-size-3 has-text-black has-text-weight-bold mb-5">
                            Why Choose Genealogia?
                        </h1>
                        <div class="is-size-6 has-text-black has-text-weight-regular is-flex ai--fs mb-4">
                            <img src="~assets/images/Checkmark.svg" alt="" class="bullet mt-2 mr-3">
                            Genealogia is a secure online website
                            which you can<br> use to create your own family tree(s) with.</div>
                        <div class="is-size-6 has-text-black has-text-weight-regular is-flex ai--fs mb-4">
                            <img src="~assets/images/Checkmark.svg" alt="" class="bullet mt-2 mr-3">
                            It has a tree viewer and DNA support
                            more features<br> are planned such as the inclusion of archive databases<br> &amp;
                            collections</div>
                        <div class="is-size-6 has-text-black has-text-weight-regular is-flex ai--fs">
                            <img src="~assets/images/Checkmark.svg" alt="" class="bullet mt-2 mr-3">
                            It is aimed to be affordable with a 7 day
                            no obligation<br> trial with different pricing levels depending on how<br> many trees you
                            require.</div>
                        <NuxtLink to="/register"
                            class="button theme-button theme-button-xl has-background-primary has-text-weight-medium has-text-white mt-5">
                            Create Your Own Tree
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about mt-6 px-5" id="overview">
        <div class="container">
            <div class="columns is-mobile is-gapless is-multiline is-centered">
                <div class="column is-full-mobile is-8-desktop has-text-centered">
                    <h1 class="is-size-2 has-text-black has-text-weight-bold">
                        Create &amp; manage your family tree
                    </h1>
                    <div class="is-size-6 has-text-black has-text-weight-regular mt-2">Genealogia is a secure online website 
                        which you can use to create your own family tree(s) with. There is no limit to the size of your trees
                        and it should easily support hundreds of thousands of records.</div>
                </div>
                <div class="column is-12 has-text-centered">
                    <div class="fadein">
                        <img src="~assets/images/mockup01@2x.png" alt="">
                        <img src="~assets/images/mockup02@2x.png" alt="">
                        <img src="~assets/images/mockup03@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="px-5 footer">
        <div class="container">
            <div class="footer-cta columns is-gapless mb-0 pb-6">
                <div class="column is-7">
                    <h1 class="is-size-2 has-text-primary has-text-weight-bold mb-3">
                        Start Your Free Tree Now!
                    </h1>
                    <div class="is-size-6 has-text-white has-text-weight-regular">
                        We’ll help you get started, & explain Genealogia features. Any<br> issues you can always contact
                        our support team.
                    </div>
                </div>
                <div class="footer-action column is-5 is-flex ai--c jc--fe">
                    <NuxtLink to="/register"
                        class="button theme-button theme-button-xl has-background-primary has-text-weight-medium has-text-white">
                        Create Your Own Tree
                    </NuxtLink>
                </div>
            </div>
            <div class="footer-seprator"></div>
            <div class="columns is-multiline is-variable is-6 py-6 mb-0">
                <div class="column is-4">
                    <img src="~assets/images/footer-logo.svg" width="180px" class="mb-5">
                    <div class="is-size-7 has-text-light has-text-weight-regular" style="line-height: 1.4rem;">
                        Genealogia Ltd,<br> International House, 12 Constance<br> Street London, E16 2DQ.<br> Company
                        number 12734769
                    </div>
                    <p class="mt-2">
                        <a href="https://www.facebook.com/genealogiawebsite" target="_blank" class="is-size-7 has-text-link is-flex">
                            <i class="fab fa-facebook mr-2" style="margin-top: 0.2rem;"></i>Follow us on Facebook </a>
                        </p>
                </div>
                <div class="column is-5">
                    <h1 class="is-size-5 has-text-white has-text-weight-bold mb-5">
                        Quick Links
                    </h1>
                    <div class="columns is-gapless is-multiline is-flex fd--r">
                        <div class="column is-flex fd--c">
                            <NuxtLink to="/" class="is-size-7 has-text-link mb-2">Home</NuxtLink>
                            <a href="#features" class="is-size-7 has-text-link mb-2">Features</a>
                            <a href="index.html" class="is-size-7 has-text-link mb-2">Why Genealogia?</a>
                            <a href="index.html" class="is-size-7 has-text-link mb-2">About</a>
                        </div>
                        <div class="column is-flex fd--c">
                            <NuxtLink to="/login" class="is-size-7 has-text-link mb-2">Sign in</NuxtLink>
                            <NuxtLink to="/privacy"" class="is-size-7 has-text-link mb-2">Privacy Policy</NuxtLink>
                            <NuxtLink to="/Terms" class="is-size-7 has-text-link mb-2">Terms &amp; Conditions</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="column is-3">
                    <h1 class="is-size-5 has-text-white has-text-weight-bold mb-5">
                        Contact Details
                    </h1>
                    <div class="is-flex ml-1 mb-4">
                        <i class="fas fa-envelope mr-2 has-text-primary"></i>
                        <a href="mailto:sales@genealogia.com" class="is-size-7 has-text-link">
                            sales@genealogia.com</a>
                    </div>
                    <div class="is-flex mb-4">
                        <!-- <img src="img/mobile.svg" alt="" class="ml-2 mr-2"> -->
                        <i class="fas fa-mobile-alt ml-2 mr-2 has-text-primary"></i>
                        <a href="tel:+44 330 122 8571" class="is-size-7 has-text-link is-flex">
                            +44 330 122 8571</a>
                    </div>
                    <div class="is-flex ml-1 mb-5">
                        <i class="fab fa-whatsapp mr-2 has-text-primary"></i>
                        <a href="https://api.whatsapp.com/send?phone=+44 20 8064 1187"
                            class="is-size-7 has-text-link is-flex">
                            +44 20 8064 1187</a>
                    </div>
                </div>
            </div>
            <div class="footer-seprator"></div>
            <div class="content has-text-centered pt-6">
                <div class="columns is-gapless">
                    <div class="column has-text-centered is-flex-desktop-only">    
                        <p class="is-size-7 has-text-light has-text-weight-regular">Copyright © 2020 Genealogia Ltd</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
}
</script>

 <style scoped>
    @import '~/assets/css/base.css';
</style>
