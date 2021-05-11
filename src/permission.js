import router from '@/router';
import store from '@/store';
import { Message } from 'element-ui'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css' 
import { getToken } from '@/utils/auth';
import getPageTitle from '@/utils/getPageTitle';


const whiteList = ['/login'];
router.beforeEach( async (to, from, next) => {
    NProgress.start();
    console.log('to:>>>', to);
    const hasToken = getToken();
    document.title = getPageTitle(to.meta.title);
    if (hasToken) {
        console.log('有token');
        if(to.path === '/login') {
            next({ path: '/'})
            NProgress.done();
        } else {
            const hasRoles = store.state.user.roles.length > 0;
            console.log('hasRoles', hasRoles);
            if (hasRoles) {
                next();
            } else {
                try {
                    const { roles } = await store.dispatch('user/getInfo');
                    console.log('roles', roles);

                    const accessedRoutes = await store.dispatch('permission/generateRoutes', roles);
                    addAccessedRouter(accessedRoutes);

                    next({ ...to, replace: true });
                } catch (error) {
                    // await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login`)
                    NProgress.done()
                }
                
            }
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

//动态添加路由
function addAccessedRouter(routers) {
    for (const route of routers) {
        router.addRoute(route);
    }
}