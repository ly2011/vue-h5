<template>
  <div class="product_detail">
    <van-swipe :autoplay="3000">
      <van-swipe-item  v-for="(image, index) in itemImgs" :key="index">
        <img v-lazy="image.url" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <van-cell-group v-if="goods" class="cell-group">
      <van-cell class="info">
        <div>
          <span class="price">{{goods.sales_price}}</span>
          <span class="market_price">{{goods.market_price}}</span>
        </div>
        <div class="title">
          <van-tag v-if="goods.is_haitao" plain type="danger">海淘</van-tag>
          {{goods.name}}
        </div>
        <div class="intro">{{goods.sell_point}}</div>
        <div class="dispatch">发货地： {{goods.ship_address.city}}</div>
      </van-cell>
    </van-cell-group>
    <div v-if="goods" class="desc">
      <div class="desc_title">商品详情</div>
      <div class="desc_wrap" v-html="goods.desc"></div>
    </div>
    <van-goods-action>
      <van-goods-action-icon @click="doContact" icon="chat-o" text="客服" iconClass="red afterTag" />
      <van-goods-action-icon @click="toCart" icon="cart-o" text="购物车" :info="cartInfo"/>
      <van-goods-action-icon @click="addCollect" icon="goods-collect-o" text="收藏"/>
      <van-goods-action-button type="warning" @click="addCart" text="加入购物车" />
      <van-goods-action-button type="danger" @click="doBuyNow" icon="" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    itemId: [String, Number]
  },
  data () {
    return {
      showContact: false,
      cartInfo: '5'
    }
  },
  computed: {
    ...mapState('product', {
      goods (state) {
        return state.info
      },
      loading: state => state.loading
    }),
    itemImgs () {
      return this.goods ? this.goods.item_imgs : []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    ...mapActions('product', ['fetchDetail', 'changeLoading']),
    initData () {
      this.getGoodsInfo()
    },
    async getGoodsInfo () { // 查询
      this.changeLoading({ payload: true })
      const postData = {
        payload: {},
        callback (err) {
        }
      }
      await this.fetchDetail(postData)
      this.changeLoading({ payload: false })
    },
    doBuyNow () {},
    addCart () {},
    doContact () {
      this.showContact = true
    },
    toCart () {
      this.$router.push({ name: 'cart' })
    },
    addCollect () {
      this.$toast({
        message: '已添加至我的收藏',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .product_detail {
    img {
      max-width: 100%;
    }
  }
  .cell_group {
    margin-bottom: 30px;
  }
  .price {
    font-size: 40px;
    color: @red;
    margin-right: 20px;
  }
  .market_price {
    color: @font-color-gray;
    text-decoration: line-through;
    font-size: @font-size-small;
  }
  .title {
    line-height: 1.4;
  }
  .dispatch {
    font-size: @font-size-small;
    color: @font-color-gray;
  }
  .intro {
    line-height: 36px;
    margin: 5px 0;
    font-size: @font-size-small;
    color: @font-color-gray;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .desc {
    background-color: #fff;
    p {
      padding: 0 20px;
    }
    ::v-deep img {
      max-width: 100%;
      display: block;
    }
  }
  .desc_title {
    padding: 20px 0;
    text-align: center;
  }
</style>
