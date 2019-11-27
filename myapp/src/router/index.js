import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/homePage/home.vue'
import Life from '@/view/lifePage/life.vue'
import Activity from '@/view/activityPage/activity.vue'
import Mine from '@/view/minePage/mine.vue'
import Login from '@/view/loginPage/login.vue'
import Register from '@/view/registerPage/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Life',
      name: 'Life',
      component: Life
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
