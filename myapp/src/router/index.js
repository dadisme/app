import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/homePage/home.vue'
import Life from '@/view/lifePage/life.vue'
import Notice from '@/view/noticePage/noticePage.vue'
import Mine from '@/view/minePage/mine.vue'
import Login from '@/view/loginPage/login.vue'
import Register from '@/view/registerPage/register.vue'
import waterRate from '@/view/waterRate/waterRate.vue'
import electricRate from '@/view/electricRate/electricRate.vue'
import gasRate from '@/view/gasRate/gasRate.vue'
import propertyRate from '@/view/propertyRate/propertyRate.vue'
import repairsApply from '@/view/repairsApply/repairsApply.vue'
import houseManager from '@/view/houseManager/houseManager.vue'
import aboutPublic from '@/view/aboutPublic/aboutPublic.vue'
import aboutUser from '@/view/aboutUser/aboutUser.vue'
import aboutHouse from '@/view/aboutHouse/aboutHouse.vue'
import aboutManager from '@/view/aboutManager/aboutManager.vue'
import propertyComplain from '@/view/propertyComplain/propertyComplain.vue'
import noticeMessage from '@/view/notice/notice.vue'
import Reset from '@/view/resetPage/resetPage.vue'
import Warning from '@/view/warningPage/warningPage.vue'
import NotFound from '@/view/NotFound/NotFound.vue'
import bindCard from '@/view/bindCard/bindCard.vue'
import addCard from '@/view/bindCard/addCard.vue'











Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Life',
      name: 'Life',
      component: Life
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Notice/noticeMessage',
      name: 'noticeMessage',
      component: noticeMessage,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/Reset',
      name: 'Reset',
      component: Reset,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/waterRate',
      name: 'waterRate',
      component: waterRate,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/electricRate',
      name: 'electricRate',
      component: electricRate,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/gasRate',
      name: 'gasRate',
      component: gasRate,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/propertyRate',
      name: 'propertyRate',
      component: propertyRate,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/repairsApply',
      name: 'repairsApply',
      component: repairsApply,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/houseManager',
      name: 'houseManager',
      component: houseManager,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/aboutPublic',
      name: 'aboutPublic',
      component: aboutPublic,
      meta: {
        fullScreen: true,
      }
    },
    {
      path: '/aboutUser',
      name: 'aboutUser',
      component: aboutUser,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/aboutHouse',
      name: 'aboutHouse',
      component: aboutHouse,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/aboutManager',
      name: 'aboutManager',
      component: aboutManager,
      meta: {
        fullScreen: true,
        requireAuth: true
      }
    },
    {
      path: '/propertyComplain',
      name: 'propertyComplain',
      component: propertyComplain,
      meta: {
        fullScreen: true,
        requireAuth: true
      } 
    },
    {
      path: '/Warning',
      name: 'Warning',
      component: Warning,
      meta: {
        fullScreen: true,
        requireAuth: true
      } 
    },
    {
      path: '/bindCard',
      name: 'bindCard',
      component: bindCard,
      meta: {
        fullScreen: true,
        requireAuth: true
      } 
    },
    {
      path: '/bindCard/addCard',
      name: 'addCard',
      component: addCard,
      meta: {
        fullScreen: true,
        requireAuth: true
      } 
    },
    {
      path: '*',
      name: 'Notfound',
      component: NotFound,
      meta: {
        fullScreen: true
      }
    }
  ],
  scrollBehavior(to,form,savedPosition){
    //scrollBehavior方法接收to，form路由对象
    //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
    //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
    //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
     return {x:0,y:0}
    //表示在用户切换路由时让是所有页面都返回到顶部位置
    //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
     if(savedPosition){
        return savedPosition
     }else{
       return {x:0,y:0}
     }
     //如果想要模拟滚动到锚点的行为:
     if(to.hash){
       return {
         selector:to.hash
       }
     }
  }
})
