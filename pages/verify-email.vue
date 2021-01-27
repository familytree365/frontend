<template>
</template>

<script>
export default {
    data() {
        return {
            message: null,
        };
    },
    methods: {
    },
    created() {
        this.$axios.$get("/api/email-verification", {
                    params: this.$route.query
                })
                .then(response => { 
                    console.log("gfgf")
                    this.$router.push("/login");
                    
                })
    }
}
</script>
 <style scoped>
    @import '~/assets/css/base.css';
</style>