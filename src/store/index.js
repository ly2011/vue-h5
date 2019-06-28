import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine'
import list from './modules/list'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mine,
    list
  }
})

export default store
