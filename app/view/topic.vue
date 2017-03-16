<template>
    <section>
      <ul class="lists">
        <li v-for="item in topics">
          {{item.title}}
        </li>
      </ul>
    </section>
</template>
<script>

    export default {
        filters: {
            
        },
        data() {
            return {
                topics: [],
                url:'https://cnodejs.org/api/v1/topics'
            };
        },
        mounted() {
            this.$http.get(this.url).then((res)=>{
                                              this.topics=res.data.data;
                                               console.log(this.topics);                                            
                                     });
        }
    };
</script>
<style>
    html,body{
      background: #fff
    }
      
</style>