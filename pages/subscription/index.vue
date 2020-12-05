<template>
    <div>
         <div class="columns is-gapless is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="is-size-4 has-text-black">
                            <span class="has-text-weight-medium">Subscription</span>
                        </h1>
                    </div>
                    <div class="column is-12">
                        <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                            <ul>
                                <li><NuxtLink class="is-size-7 has-text-weight-medium has-text-link"
                                        to="dashboard">Home</NuxtLink></li>
                                <li class="is-size-7 has-text-weight-medium is-active"><a href=""
                                        aria-current="page">Subscription</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="columns is-variable is-3 is-desktop">
                    <div class="column is-9">
                        <div class="columns is-multiline is-variable is-3">
                            <div class="column is-6">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">50 GBP</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> Unlimited Trees </span> Yearly</div>
                                        <NuxtLink to="/subscription/payment" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">5 GBP</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> Unlimited Trees </span> Yearly</div>
                                        <NuxtLink to="/subscription/payment" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">25 GBP</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> 10 Trees </span> Yearly</div>
                                        <NuxtLink to="/subscription/payment" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">2.50 GBP</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> 10 Trees </span> Monthly</div>
                                        <NuxtLink to="/subscription/payment" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">10 GBP</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> 1 Tree </span> Monthly</div>
                                        <NuxtLink to="/subscription/payment" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">1 GBP</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> 1 Tree </span> Monthly</div>
                                        <NuxtLink to="/subscription/payment" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="columns is-gapless is-multiline">
                            <div class="card plan_info_block has-background-primary has-text-black">
                                <img src="~assets/images/plan_info_img.svg" alt="">
                                <div class="card-content">
                                    <div class="has-text-black has-text-weight-medium is-flex plans_info mb-5">
                                        <i class="fas fa-check mr-2 mt-1"></i>
                                        <p class="is-size-7">Family Tree 365 is a secure online website
                                          which you can use to create your own family tree(s) with.</p>
                                    </div>
                                    <div class="has-text-black has-text-weight-medium is-flex plans_info mb-5">
                                        <i class="fas fa-check mr-2 mt-1"></i>
                                        <p class="is-size-7">It has a tree viewer and DNA support
                                          more features are planned such as the inclusion of archive databases and
                                          collections.</p>
                                    </div>
                                    <div class="has-text-black has-text-weight-medium is-flex plans_info">
                                        <i class="fas fa-check mr-2 mt-1"></i>
                                        <p class="is-size-7">Set up your first family tree free of charge.
                                          We offer different pricing levels with optional subscriptions if you need to create extra trees.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>

export default {
    layout: 'auth',
    data() {
        return {
            error: false,
            message: "",
            file: undefined,
            fileName: ''
        };
    },
    methods: {
        handleSelectedFiles(event) {
            console.log(this.$refs.fileInput.files[0])
            this.file = this.$refs.fileInput.files[0]
            this.fileName = this.file.name

      },
        submit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                console.log("fail")
            } else {
            let formData = new FormData()
            formData.append('file',  this.file)
                this.$axios
                .$post("/api/gedcom", formData, {

                    headers: {
                      'content-type': 'multipart/form-data'
                    }
                })
                .then(response => {

                })
                .catch(error => {
                  console.log(error)
                });
            }
            }
        }
    }

</script>
<style scoped>
    @import '~/assets/css/admin.css';
</style>

