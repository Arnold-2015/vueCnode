<template>
    <div>
        <section id="page">
            <nv></nv>
            <!-- 首页列表 -->
            <ul class="posts-list">
                <li v-for="item in topics" :key="item.id">
                    <!-- <router-link :to="{name:'topic',params:{id:item.id}}"> -->
                    <h3 v-text="item.title" class="cont">
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
    </div>
</template>
<script>
    import nv from '../components/header.vue';
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
        },
        components:{
            nv
        }

    };
</script>
<style lang="sass">
    html,body{
              background: #fff;
             .posts-list{
                        width: 100%;
                        position: absolute;
                        top: 42px;
                        left: 0;
                        li{
                           width: 96%;
                           height: 100px;
                           padding: 0 2%;
                           position: relative;
                           border-bottom: 1px solid #d7d7d7;
                        h3{
                           width: 100%;
                           height: 20px;
                           margin-top: 10px;
                           line-height: 20px;
                           font-size: 16px;
                          }
                        .cont{
                             width: 100%;
                             overflow: hidden;
                             text-overflow: ellipsis;
                             white-space: nowrap;
                             }
                        .avatar{
                                width: 40px;
                                height: 40px;
                                margin-top: 10px;
                                border-radius: 50%;
                                border: 1px solid #999;
                               }
                        .info {
                               .name{
                                     position: absolute;
                                     left: 2%;
                                     top: 75px;
                                     font-size: 12px;
                                     color: #999;
                                    }
                               .status{
                                       position: absolute;
                                       right: 2%;
                                       top: 75px;
                                       font-size: 12px;
                                       color: #999;
                                     }            
                               }
                            }
                         }
                }
</style>
