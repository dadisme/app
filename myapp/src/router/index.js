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
        fullScreen: true
      }
    },
    {
      path: '/electricRate',
      name: 'electricRate',
      component: electricRate,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/gasRate',
      name: 'gasRate',
      component: gasRate,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/propertyRate',
      name: 'propertyRate',
      component: propertyRate,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/repairsApply',
      name: 'repairsApply',
      component: repairsApply,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/houseManager',
      name: 'houseManager',
      component: houseManager,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/aboutPublic',
      name: 'aboutPublic',
      component: aboutPublic,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/aboutUser',
      name: 'aboutUser',
      component: aboutUser,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/aboutHouse',
      name: 'aboutHouse',
      component: aboutHouse,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/aboutManager',
      name: 'aboutManager',
      component: aboutManager,
      meta: {
        fullScreen: true
      }
    },
    {
      path: '/propertyComplain',
      name: 'propertyComplain',
      component: propertyComplain,
      meta: {
        fullScreen: true
      } 
    },
    {
      path: '/Warning',
      name: 'Warning',
      component: Warning,
      meta: {
        fullScreen: true
      } 
    }
  ]
})
