import Vue from "vue";
import VueRouter from "vue-router";

import Layout from '@/Layout/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "about" */ "@/views/dashboard.vue")
            }
        ]
    },
    {
        path: "/about",
        component: Layout,
        children: [
            {
                path: '/about',
                component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
            }
        ]
        
    }
];

const router = new VueRouter({
  routes
});

export default router;
