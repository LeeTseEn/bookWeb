import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cookies from 'js-cookie'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'Airplane',
          name: 'Airplane',
          component: () => import('./components/Airplane.vue'),
          meta: { requireAuth: true }
        },
        {
          path: 'Restaurant',
          name: 'Restaurant',
          component: () => import('./components/Restaurant.vue'),
          meta: { requireAuth: true }
        },
        {
          path: 'Game',
          name: 'Game',
          component: () => import('./components/Game.vue'),
          meta: { requireAuth: true }
        },
        {
          path: 'Test',
          name: 'Test',
          component: () => import('./components/Test.vue'),
          meta: { requireAuth: true }
        },
        {
          path: 'TestDetail',
          name: 'TestDetail',
          component: () => import('./components/TestDetail.vue'),
          meta: { requireAuth: true }
        }
      ]
    },
    {
      path: '/apiText',
      name: 'ApiText',
      component: () => import('./views/ApiTemp.vue')
    }
  ]
})

export default router
