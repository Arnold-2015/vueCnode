<template>
    <div>
        <section id="page">
            <!-- 首页列表 -->
            <ul class="posts-list">
                <li v-for="item in topics" :key="item.id">
                    <!-- <router-link :to="{name:'topic',params:{id:item.id}}"> -->
                    <h3 v-text="item.title">
                    </h3>
                    <div class="content">
                        <img class="avatar" :src="item.author.avatar_url" />
                        <div class="info">
                            <p>
                                <span class="name">
                                    {{item.author.loginname}}
                                </span>
                                <span class="status" v-if="item.reply_count > 0">
                                    <b>{{item.reply_count}}</b>
                                    /{{item.visit_count}}
                                </span>
                            </p>

                        </div>
                    </div>
                    <!-- </router-link> -->
                </li>
            </ul>
        </section>
        <nv-top></nv-top>
    </div>
</template>
<script>

    export default {
        filters: {
            
        },
        methods:{
          
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
