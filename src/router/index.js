import Vue from 'vue'
import Router from 'vue-router'

// import pages
import UserIndex from '@/pages/user/user.vue'
import UserHome from '@/pages/user/home/home.vue'


Vue.use(Router)


const routes = [
  {
    path: '/',
    redirect: '/user/home'
  },
  {
    path: '/user',
    name: 'UserIndex',
    component: UserIndex,
    children: [
      {
        path: 'home',
        name: 'UserHome',
        component: UserHome
      }
    ]
  }
]


const router = new Router({
  mode: 'hash',
  routes
})

export default router
