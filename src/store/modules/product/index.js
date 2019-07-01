import { getGoodDetail } from './services'
const product = {
  namespaced: true,
  state: {
    loading: false,
    info: null
  },

  mutations: {
    saveDetail: (state, payload = {}) => {
      const {
        data = null
      } = payload
      state.info = data
    },
    saveLoading: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    async fetchDetail ({ commit }, { payload, callback } = {}) {
      const params = payload
      try {
        const { data } = await getGoodDetail(params)
        commit('saveDetail', {
          data
        })
        callback && callback(null, data)
      } catch (error) {
        callback && callback({ msg: '请求出错' })
      }
    },
    async changeLoading ({ commit }, { payload, callback } = {}) {
      const loading = !!payload
      commit('saveLoading', loading)
      callback && callback(null)
    }
  }
}

export default product
