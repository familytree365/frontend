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
    created() {
        this.$axios.$get("/api/email-verification", {
                    params: this.$route.query
                })
                .then(response => { 
                    this.$router.push("/dashboard");
                    
                })
    }
}
</script>
 <style scoped>
    @import '~/assets/css/base.css';
</style>