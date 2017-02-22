import Vue from 'Vue'
import VueResource from 'vue-resource'
import Arnold from '../components/Arnold'
import Loading from '../components/loading'
Vue.use(VueResource);
new Vue({
	el: 'body',
	data:{
		msg:"vue",
		showLoading:false
	},
	components: { Arnold,Loading },
	methods:{
            getData:function(){
            	Vue.http.interceptors.push((request, next) => {
	                     this.$set('showLoading', true);
	                     next((response) => {
	                     this.$set('showLoading', false);
		                     return response
	                     });
                     });
                         this.$http.get('https://cnodejs.org/api/v1/topics', {
                         	params:{"limit":200,"page":1,"mdrender":"true","tab":"all"}}).then((response)=>{
                         	console.log(response.data)
                         	this.$set('msg', 'Hello '+response.data.data[0].author.loginname);
                            }, (response)=>{
                                  alert("eror")
                        });
            }
        }
})