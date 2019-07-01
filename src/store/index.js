import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine'
import list from './modules/list'
import product from './modules/product'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mine,
    list,
    product
  }
})

export default store
