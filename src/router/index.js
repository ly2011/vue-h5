import Vue from 'vue'
import Router from 'vue-router'

import Mine from './mine'
import List from './list'

import AsyncLoader from '@/utils/async-loader'

import Layout from '@/layouts/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: AsyncLoader('views/home.vue')
        },
        {
          path: '/detail',
          name: 'detail',
          component: AsyncLoader('views/detail.vue')
        },
        ...List,
        ...Mine
      ]
    }
  ]
})
