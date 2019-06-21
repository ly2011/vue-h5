<template>
  <div class="home">
    <h3 class="title red">我会变黑色</h3>
    <button @click="getTableData">拉取数据</button>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import { mapState, mapActions } from 'vuex'
import { formatDate } from '@/utils/assist'
export default {
  components: {
    HelloWorld
  },
  name: 'home',
  data () {
    return {
      active: 0,
      now: Date.now(),
      searchData: {} // 搜索条件
    }
  },
  computed: {
    ...mapState('mine', {
      tableData (state) {
        return state.list
      },
      pagination (state) {
        return state.pagination
      },
      loading: state => state.loading
    })
  },
  created () {
    this.initData()
  },
  methods: {
    ...mapActions('mine', ['fetchList', 'changeLoading']),
    initData () {
      console.log('now - format: ', formatDate(this.now, 'YYYY-MM'))
    },
    async getTableData () { // 查询
      this.changeLoading({ payload: true })
      const params = this.getParams()
      console.log('params: ', params)
      const postData = {
        payload: {
          currentPage: 1,
          pageSize: 10,
          ...params
        },
        callback (err) {
        }
      }
      await this.fetchList(postData)
      this.changeLoading({ payload: false })
    },
    getParams () { // 获取查询参数
      const params = { ...this.searchData }
      params.currentPage = this.pagination.currentPage
      params.pageSize = this.pagination.pageSize
      return params
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  color: $primary-color;
  // background-color: red;
  // height: 2000px;
}
</style>
