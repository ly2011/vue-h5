<template>
  <van-list v-model="loading" :finished="finished" :offset="100" @load="loadMore" v-bind="$attrs" :immediate-check="false">
    <is-empty v-if="isEmpty">{{emptyText}}</is-empty>
    <slot v-else></slot>
    <div v-if="finished" class="no-more">{{onMoreText}}</div>
  </van-list>
</template>

<script>
import { get } from 'lodash'
import isEmpty from 'components/common/is-empty'
import request from '@/utils/ajax'
import { sleep } from '@/utils/assist'
import loadMore from '@/mixins/load-more'
const DEFAULT_CONFIG = {
  params: {},
  headers: {}
}
export default {
  name: 'infinity-scroll',
  mixins: [loadMore],
  components: { isEmpty },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    resKey: {
      type: String,
      default: 'items'
    },
    pageKey: {
      type: String,
      default: 'page'
    },
    emptyText: {
      type: String,
      default: '抱歉，找不到结果~'
    },
    onMoreText: {
      type: String,
      default: '没有更多了~'
    },
    perPage: Number,
    beforeRequest: Function
  },
  created () {
    this.resetInit()
  },
  methods: {
    beforeInitData () {
      return this.beforeRequest ? this.beforeRequest() : DEFAULT_CONFIG
    },
    async initData () {
      try {
        const { params, headers } = this.beforeInitData()
        const perPage = this.perPage || this.pages.perPage
        const { data } = await request({
          url: this.apiUrl,
          headers,
          params: {
            'per-page': perPage,
            page: this.pages.currPage,
            ...params
          }
        })
        await sleep(1000)
        // console.log('data: ', data)
        const items = get(data, this.resKey, [])
        const page = get(data, this.pageKey, null)
        console.log('page: ', page)
        this.$emit('onLoad', items)
        return page
      } catch (error) {
        console.error('请求出错: ', error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.no-more {
  text-align: center;
  padding: 20px 0;
  color: @font-color-gray;
}
</style>
