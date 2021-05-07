import router from '@/router';
import store from '@/store';
import nProgress from 'nprogress';
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css' 
import { getToken } from '@/utils/auth';
import getPageTitle from '@/utils/getPageTitle';



const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    nProgress.start();
    console.log('to:>>>', to);
    const hasToken = getToken();
    document.title = getPageTitle(to.meta.title)
    store.dispatch('permission/generateRoutes');
    if (hasToken) {
        console.log('有token');
        if(to.path === '/login') {
            next({ path: '/'})
            NProgress.done();
        } else {
            next();
            
        }

    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
            NProgress.done();
        }
        
    }
    
})

router.afterEach(() => {
    NProgress.done();
})