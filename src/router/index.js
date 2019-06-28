import Vue from 'vue'
import Router from 'vue-router'

import Mine from './mine'
import List from './list'
import Product from './product'

import AsyncLoader from '@/utils/async-loader'

// import Layout from '@/layouts/index.vue'
const TabBar = AsyncLoader('components/common/tabbar')
const Home = AsyncLoader('views/home')
const Detail = AsyncLoader('views/detail')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        tabbar: TabBar
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      props: true
    },
    ...List,
    ...Mine,
    ...Product,
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
