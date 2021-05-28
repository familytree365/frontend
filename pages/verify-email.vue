<template>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
    },
    async created() {
        const response = await this.$axios.$get("/api/email-verification", {
                    params: this.$route.query
                })

                    this.$router.push("/dashboard");

    }
}
</script>
 <style scoped>
    @import '~/assets/css/base.css';
</style>
