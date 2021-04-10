import Vue from "vue";
import VueRouter from "vue-router";

import Layout from '@/Layout/index.vue';

Vue.use(VueRouter);

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "about" */ "@/views/dashboard"),
                meta: { title: 'Dashboard', icon: 'dashboard'}
            }
        ],
    },
    {
        path: "/about",
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ "@/views/about"),
                meta: { title: 'About', icon: 'about'}
            }
        ]
    },
    {
        path: '/table',
        component: Layout,
        redirect: '/table/table-1',
        name: 'Table',
        meta: { title: 'Table' },
        children: [
            {
                path: 'table-1',
                name: 'Table-1',
                component: () => import(/* webpackChunkName: "table-1" */ "@/views/table/table-1"),
                meta: { title: 'Tbale-1' }
            },
            {
                path: 'table-2',
                name: 'Table-2',
                component: () => import(/* webpackChunkName: "table-2" */ "@/views/table/table-2"),
                meta: { title: 'Tbale-2' }
            },
            {
                path: 'table-3',
                name: 'Table-3',
                component: () => import(/* webpackChunkName: "table-3" */ "@/views/table/table-3"),
                meta: { title: 'Tbale-3' }
            }
        ]
    }
];

const router = new VueRouter({
    routes: constantRoutes
});

export default router;
