<template>
  <div class="detail">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.id">
        <template slot="title">
          <span class="title">{{item.title}}</span>
          <van-tag type="danger">优秀</van-tag>
        </template>
        <template slot="default">
          <van-button type="primary" size="mini">我是标题内容</van-button>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import request from '@/utils/ajax'
const getGoodDetail = (params = {}) => {
  return request({
    baseURL: 'https://cnodejs.org/api/v1',
    url: '/topics',
    method: 'get',
    params
  })
}
export default {
  data () {
    return {
      list: [],
      page: 1,
      limit: 5,
      loading: false,
      finished: false
    }
  },
  created () {
    // this.getTableData()
  },
  methods: {
    async getTableData () {
      try {
        const params = {
          page: this.page,
          limit: this.limit
        }
        const { data } = await getGoodDetail(params)
        console.log('data: ', data)
        this.list.push(...data)
        this.page++
        this.loading = false
        if (this.list.length > 100) {
          this.finished = true
        }
      } catch (error) {

      }
    },
    onLoad () {
      this.getTableData()
      // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 500);
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  color: @blue-color;
}
.detail {
  padding-bottom: 0;
}
</style>
