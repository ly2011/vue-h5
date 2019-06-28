<template>
  <div class="category">
    <div class="search-box">
      <van-search placeholder="点击前往搜索" />
      <div class="search-mask" @click="$router.push({name: 'search'})"></div>
    </div>
    <div class="category-content">
      <van-sidebar :active-key="navActive" @change="navclick">
        <van-sidebar-item v-for="(item, index) in navList" :title="item.name" :key="item.id || index"></van-sidebar-item>
      </van-sidebar>
      <div class="branch-list">
        <ul class="branch-item-wrap">
          <li v-for="(item, index) in goods" :key="index" @click="toProductList(item.id)" class="branch-item">
            <div class="img-box"><img :src="item.pic_url" :alt="item.name"></div>
            <div class="title">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      navActive: 0,
      navList: [],
      searchData: {
        shop_id: 1
      } // 搜索条件
    }
  },
  computed: {
    ...mapState('list', {
      tableData (state) {
        return state.list
      },
      pagination (state) {
        return state.pagination
      },
      loading: state => state.loading
    }),
    goods () {
      const tableData = this.tableData
      const navActive = this.navActive
      return tableData.length ? tableData[navActive].children || [] : []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.initData()
    },
    navclick (key) {
      console.log(key)
      this.navActive = key
    },
    ...mapActions('list', ['fetchList', 'changeLoading']),
    initData () {
      this.navList = Array.from({ length: 20 }, (v, k) => ({ id: k + 1, name: '宠物生活' }))
      this.getTableData()
    },
    async getTableData () { // 查询
      this.changeLoading({ payload: true })
      const params = this.getParams()
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
    },
    toProductList (id = '') {
      this.$router.push({
        name: 'products',
        query: {
          keyword: '',
          itemClass: id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.category {
  overflow: hidden;
  background-color: #fff;
  .search-box {
    position: relative;
  }
  .search-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }
}
.category-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
}
.branch-list {
  flex: 1;
  // margin-left: 85px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  .branch-item-wrap {
    padding: 20px 40px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 33.333333%;
    .branch-item {
      padding-right: 3%;
      box-sizing: border-box;
      margin-bottom: 40px;
    }
    .img-box {
      display: inline-block;
      max-width: 100%;
      width: 140px;
      height: 140px;
    }
    img {
      max-width: 100%;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
