<template>
    <div class="shit" v-on:click="getData">{{msg}}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello vue!',
                url:'https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312'
            }
        },
        methods:{
            getData:function(){
                          // console.log(this)
                         this.$http.get(this.url).then((response)=>{
                                              console.log(response.data);
                                              this.msg="hello "+response.data.data.author.loginname;
                                               }, (response)=>{
                                                      console.log(response)
                                     });
            }
        }
    }
</script>

<style lang="sass">
    .shit
    background: #fff
      
    
</style>