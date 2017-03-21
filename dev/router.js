import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './view/Main.vue';
import Test from './view/Test.vue';

Vue.use(VueRouter);

const routes = [{
    path: '',
    name: 'main',
    component: Main,
}, {
    path: '/test',
    name: 'test',
    component: Test,
}];

const router = new VueRouter({routes});

export default router;
