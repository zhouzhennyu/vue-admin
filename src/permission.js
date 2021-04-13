import router from '@/router';
import store from '@/store';
import nProgress from 'nprogress';
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css' 
import { getToken } from '@/utils/auth';
import getPageTitle from '@/utils/getPageTitle';




router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
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
        }

    } else {
        console.log('没有token');
    }
    next();
    
})