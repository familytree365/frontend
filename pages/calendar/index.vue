<template>
    <div>
        <div class="columns is-gapless is-multiline is-mobile">
            <div class="column is-12">
                <h1 class="is-size-4 has-text-black">
                    <span class="has-text-weight-medium">Calendar</span>
                </h1>
            </div>
            <div class="column is-12">
                <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                    <ul>
                        <li><a class="is-size-7 has-text-weight-medium has-text-link"
                                href="dashboard.html">Home</a></li>
                        <li class="is-size-7 has-text-weight-medium is-active"><a href="dashboard.html"
                                aria-current="page">Calendar</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="columns is-variable is-3 is-desktop is-flex-desktop-only ai--s" style="height: 550px;">
                    <div class="column is-3 is-flex-desktop-only ai--s">
                        <div class="columns is-gapless is-multiline is-flex-desktop-only ai--s" style="height: 100%;">
                            <div class="column is-12 is-flex-desktop-only ai--s">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-header">
                                        <div class="card-header-title has-text-black">
                                            Calendar
                                        </div>
                                    </div>
                                    <div class="card-content is-flex jc--sb">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-9">
                        <div class="card has-background-white has-text-black">
                            <div class="card-header">
                                <div class="card-header-title has-text-black">
                                    Calendar
                                </div>
                            </div>
                            <div class="card-content is-flex jc--sb">
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


