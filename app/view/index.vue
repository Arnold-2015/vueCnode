<template>
    <div>
        <img class="index" src="../assets/index.png" >
    </div>
</template>
<script>

    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'list'
                });
            }, 2000);
        }
    };
</script>
<style lang="sass">
    .index {
        width: 100%;
        background-color: #fff;
        margin-top:30%;
    }
</style>
