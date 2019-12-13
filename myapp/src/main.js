// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';

Vue.config.productionTip = false

Vue.use(Vant);


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(sessionStorage.getItem('name')){ //判断本地是否存在
      next();
    }else {
     if(to.path === '/Login'){
        next();
      }else {
        next({
          path:'/Login'
        })
      }
    }
  }else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
