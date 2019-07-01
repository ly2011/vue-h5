<template>
  <div class="product-list">
    <div class="search-box">
      <van-search v-model="searchVal" placeholder="请输入商品名称" showAction />
    </div>
    <van-tabs v-model="tabActive">
      <van-tab v-for="(tab, tabIndex) in tabsItem" :title="tab.name" :key="tab.type" :disabled="tab.sort === false">
        <InfinityScroll :ref="'tabScrolls' + tabIndex" class="full-page scroll-wrap fix-height" :beforeRequest="beforeRequest" :apiUrl="listApi" @onLoad="onLoad(tabIndex, $event)">
          <van-card class="card-box" lazy-load v-for="(item, i) in tab.items" :key="i" :tag="item.is_haitao ? '海淘': ''" price="2.00" desc="描述信息" title="商品标题" :thumb="item.pic_url" origin-price="10.00" @click="itemClick(item.id)">
          </van-card>
        </InfinityScroll>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import InfinityScroll from 'components/common/infinity-scroll'
export default {
  components: { InfinityScroll },
  data () {
    return {
      searchVal: '',
      listApi: '/moreGoods',
      shop_id: 1,
      tabActive: 0,
      tabsItem: [
        { name: '默认', sort: '', items: [] },
        { name: '销量', sort: 'sold_quantity', items: [] },
        { name: '最新', sort: 'created_at', items: [] },
        { name: '筛选', sort: false, items: [] }
      ]
    }
  },
  methods: {
    onLoad (i, items) {
      this.tabsItem[i].items.push(...items)
    },
    beforeRequest () {
      return {
        params: {
          q: this.searchVal,
          shop_id: this.shop_id
        }
      }
    },
    itemClick (id) {
      this.$router.push({ name: 'productDetail', params: { itemId: id } })
    }
  }
}
</script>

<style lang="less" scoped>
.product-list {
  background-color: #fff;
  padding-bottom: 0;
  overflow: hidden;
}
.fix-height {
  padding-bottom: 176px;
}
.card-box {
  .van-card__content {
    height: 200px;
  }
  .van-card__title {
    margin-bottom: 20px;
  }
  .van-card__desc {
    max-height: 96px;
    line-height: 32px;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 3;
    // white-space: normal;
  }
  .van-card__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
