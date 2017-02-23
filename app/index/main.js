import Vue from 'Vue'
import App from './app.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
new Vue({
	el: '#app',
	data:{
		msg:"vue",
		showLoading:false
	},
	render: h => h(App)

})