<template>
    <div v-on:click="getData">{{msg}}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello vue!'
            }
        },
        methods:{
            getData:function(){
        
                         this.$http.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312').then((response)=>{
                                              console.log(response.data);
                                              this.$set('msg', 'Hello '+response.data.data.author.loginname);
                                               }, (response)=>{
                                                        alert("error")
                                     });
            }
        }
    }
</script>

<style>
    html{
        background: #d7d7d7;
    }
</style>