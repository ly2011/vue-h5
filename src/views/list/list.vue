<template>
  <div class="category">
    <div class="search-box">
      <van-search placeholder="点击前往搜索"/>
      <div class="search-mask" @click="$router.push({name: 'search'})"></div>
    </div>
    <div class="category-content">
      <van-sidebar :active-key="navActive" @change="navclick">
        <van-sidebar-item v-for="(item, index) in navList" :title="item.name" :key="item.id || index"></van-sidebar-item>
      </van-sidebar>
      <div class="branch-list">我是右边的内容</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navActive: 0,
      navList: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.navList = Array.from({ length: 20 }, (v, k) => ({ id: k + 1, name: '宠物生活' }))
    },
    navclick (key) {
      console.log(key)
      this.navActive = key
    }
  }
}
</script>

<style lang="less" scoped>
.category-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.branch-list {
  flex: 1;
  // margin-left: 85px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
