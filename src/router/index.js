import Vue from "vue";
import VueRouter from "vue-router";

import Layout from '@/Layout/index.vue';

Vue.use(VueRouter);

export const constantRoutes = [
    {
        path: '/login',
        component: () => import("@/views/login/index")
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import("@/views/dashboard"),
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
                component: () => import("@/views/about"),
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
                component: () => import("@/views/table/table-1"),
                meta: { title: 'Tbale-1' }
            },
            {
                path: 'table-2',
                name: 'Table-2',
                component: () => import("@/views/table/table-2"),
                meta: { title: 'Tbale-2' }
            },
            {
                path: 'table-3',
                name: 'Table-3',
                component: () => import("@/views/table/table-3"),
                meta: { title: 'Tbale-3' }
            }
        ]
    }
];
export const asyncRoutes = [
    {
        path: '/permision',
        redirect: '/permision/page',
        component: Layout,
        name: 'Permission',
        meta: { title: 'Permission', role: ['admin', 'editor'] },
        children: [
            {
                path: '/permision/page',
                name: 'PagePermission',
                component: () => import('@/views/permision/page'),
                meta: { title: 'Permission', role: ['admin'] },
            },
            {
                path: '/permision/role',
                name: 'DirectivePermission',
                component: () => import('@/views/permision/role'),
                meta: { title: 'Role Permission', role: ['admin'] },
            },
            {
                path: '/permision/directive',
                name: 'RolePermission',
                component: () => import('@/views/permision/directive'),
                meta: { title: 'Directive Permission' },
            }
        ]
    }
]

const router = new VueRouter({
    routes: constantRoutes
});

export default router;
