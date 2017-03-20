import Vue from 'Vue'
import loading from '../components/loading.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from '../routers/router'
require('./reset.scss')
Vue.use(VueRouter);
Vue.use(VueResource);

// 实例化VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
});
var app = new Vue({
	el: '#app',
	data: {
		showLoading: false
	},
	components: {
		loading
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