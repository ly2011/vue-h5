import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/vant'
import filters from '@/filters'
import '@/styles/index.less'

Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
