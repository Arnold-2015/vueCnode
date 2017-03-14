<template>
    <div>
        <img class="index" src="../assets/loading.gif">
    </div>
</template>
<script>

    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'cnodevue'
                });
            }, 2000);
        }
    };
</script>
<style>
    .index {
        width: 100%;
        background-color: #fff;
        margin-top:30px;
    }
</style>
