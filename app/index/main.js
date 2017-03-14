import Vue from 'Vue'
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
new Vue({
    router
}).$mount('#app');