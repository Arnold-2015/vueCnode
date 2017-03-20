// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
    require.ensure(['../view/index.vue'], () => {
        resolve(require('../view/index.vue'));
    },'home');
};
const router = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/list',
    name: 'list',
    component(resolve) {
        require.ensure(['../view/list.vue'], () => {
            resolve(require('../view/list.vue'));
        },'list');
    }
},{
    path: '/cnodevue',
    name: 'cnodevue',
    component: Home
}, {
    path: '*',
    component: Home
}];

export default router;