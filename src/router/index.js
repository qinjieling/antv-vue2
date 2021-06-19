import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layouts/MainLayout';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: '用户中心',
    component: Layout,
    children: [{
      path: '/userList',
      name: 'userList',
      component: () => import('../views/user/UserList.vue')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
