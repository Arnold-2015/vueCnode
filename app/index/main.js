import Vue from 'Vue'
import Loading from '../components/loading.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from '../routers/router';
Vue.use(VueRouter);
Vue.use(VueResource);

// 实例化VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
});
// new Vue({
// 	data: {
// 		showLoading: false
// 	},
// 	components:{
// 		Loading
// 	},
//     router
// }).$mount('#app');
var app = new Vue({
	el: '#app',
	data: {
		showLoading: false
	},
	components: {
		Loading
	},
	router
});
Vue.http.interceptors.push((request, next) => {
	app.showLoading= true;
	next((response) => {
		app.showLoading  = false;
		return response
	});
});