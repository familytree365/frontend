<template>
    <div>
        <div class="columns is-gapless is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="is-size-4 has-text-black">
                            <span class="has-text-weight-medium">Files</span>
                        </h1>
                    </div>
                    <div class="column is-12">
                        <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                            <ul>
                                <li><a class="is-size-7 has-text-weight-medium has-text-link"
                                        href="/dashboard">Home</a></li>
                                <li class="is-size-7 has-text-weight-medium is-active"><a href="/dashboard"
                                        aria-current="page">Files</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    layout: 'auth',
    middleware: 'permission',
    meta: {
        permission: { name: 'files menu' }
    },
}
</script>
