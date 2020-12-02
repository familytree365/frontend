<template>
    <div>
        <div class="columns is-gapless is-multiline is-mobile">
            <div class="column is-12">
                <h1 class="is-size-4 has-text-black">
                    <span class="has-text-weight-medium">Hi {{ loggedInUser.first_name }}</span>, <span class="has-text-weight-light">
                        Welcome Back!</span>
                </h1>
            </div>
            <div class="column is-12">
                <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                    <ul>
                        <li><a class="is-size-7 has-text-weight-medium has-text-link"
                                href="dashboard.html">Home</a></li>
                        <li class="is-size-7 has-text-weight-medium is-active"><a href="dashboard.html"
                                aria-current="page">Dashboard</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="columns is-variable is-3 is-desktop">
            <div class="column">
                <div class="card has-background-white has-text-black">
                    <div class="card-content is-flex jc--sb">
                        <img src="~assets/images/gedcom.svg" alt="">
                        <div class="has-text-right">
                            <p class="is-size-4 has-text-weight-semibold">2,580</p>
                            <div class="is-size-7 has-text-black has-text-weight-medium mt-1">GEDCOM Imports
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card has-background-white has-text-black">
                    <div class="card-content is-flex jc--sb">
                        <img src="~assets/images/families.svg" alt="">
                        <div class="has-text-right">
                            <p class="is-size-4 has-text-weight-semibold">25,758</p>
                            <div class="is-size-7 has-text-black has-text-weight-medium mt-1">Families Joined
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card has-background-white has-text-black">
                    <div class="card-content is-flex jc--sb">
                        <img src="~assets/images/peoples.svg" alt="">
                        <div class="has-text-right">
                            <p class="is-size-4 has-text-weight-semibold">+ 20,000</p>
                            <div class="is-size-7 has-text-black has-text-weight-medium mt-1">Peoples Attached
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-variable">
            <div class="column is-4-desktop is-6-tablet is-flex">
                <div class="card has-background-white has-text-black">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            Genders
                        </div>
                    </div>
                    <div class="card-content" style="height: 400px;">
                        <canvas id="chart-area" height="200" width="200"></canvas>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet is-flex">
                <div class="card has-background-white has-text-black">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            Activity
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card_list is-flex">
                            <div class="icon_box is-flex jc--c ai--c">
                                <i class="fas fa-users has-text-white is-size-6"></i>
                            </div>
                            <div class="is-flex fd--c ml-3">
                                New Column added
                                <span class="is-size-7 has-text-dark has-text-weight-regular mt-1"> on 15th Sep, 2020 at 23:20 pm </span>
                            </div>
                        </div>
                        <div class="card_list is-flex">
                            <div class="icon_box is-flex jc--c ai--c">
                                <i class="fas fa-lock has-text-white is-size-6"></i>
                            </div>
                            <div class="is-flex fd--c ml-3">
                                Password Changed
                                <span class="is-size-7 has-text-dark has-text-weight-regular mt-1"> on 15th Sep, 2020 at 23:20 pm </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet is-flex">
                <div class="card has-background-white has-text-black">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            Files
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card_list is-flex">
                            <div class="icon_box is-flex jc--c ai--c">
                                <i class="fas fa-file-excel has-text-white is-size-6"></i>
                            </div>
                            <div class="is-flex fd--c ml-3">
                                File_22012020.xlsx
                                <span class="is-size-7 has-text-dark has-text-weight-regular mt-1"> on 15th Sep, 2020 at 23:20 pm </span>
                            </div>
                        </div>
                        <div class="card_list is-flex">
                            <div class="icon_box is-flex jc--c ai--c">
                                <i class="fas fa-file-excel has-text-white is-size-6"></i>
                            </div>
                            <div class="is-flex fd--c ml-3">
                                Tree_Table_Report.xlsx
                                <span class="is-size-7 has-text-dark has-text-weight-regular mt-1"> on 15th Sep, 2020 at 23:20 pm </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-variable is-flex-desktop-only ai--s">
            <div class="column is-4-desktop is-6-tablet is-flex">
                <div class="card has-background-primary has-text-white">
                    <div class="card-content">
                        <p class="is-size-7">Your Plan Expires in</p>
                        <p class="is-size-4 mb-2 has-text-weight-medium">06 Days</p>
                        <p class="is-size-7">Upgrade your plan &amp; join nearly 100 people who have already
                            registered.</p>
                        <button
                            class="button is-size-7 is-uppercase has-background-white has-text-weight-medium has-text-primary is-light mt-4">Upgrade
                            Plan</button>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet is-flex">
                <div class="card has-background-white has-text-black">
                    <div class="card-content has-text-centered py-5">
                        <i class="fas fa-user-circle has-text-primary mb-5" style="font-size: 55px;"></i>
                        <p class="is-size-7 mb-2 has-text-weight-medium">Curtisd@gmail.com</p>
                        <p class="is-size-7 mb-4 has-text-weight-medium">Curtis Delicata</p>
                        <p class="is-size-7 is-uppercase">Use Tree</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    layout: 'auth',
    computed: {
        ...mapGetters(['loggedInUser'])
    },
}
</script>
<style scoped>
    @import '~/assets/css/admin.css';
</style>
