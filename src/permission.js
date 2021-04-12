import router from '@/router';
import store from '@/store';
import nProgress from 'nprogress';
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css' 



router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    nProgress.start();
    store.dispatch('permission/generateRoutes');
    
    next();
    NProgress.done();
})