<template>
  <div class="is-empty">
    <div>
      <img :src="emptyImg" :alt="emptyTextAlt" :style="imgStyle" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import emptyImg from '@/assets/images/is_empty.png'
export default {
  name: 'is-empty',
  props: {
    emptyTextAlt: {
      type: String,
      default: '无商品'
    },
    imgStyle: {
      type: Object,
      default: () => ({
        width: '20%'
      })
    }
  },
  data () {
    return {
      emptyImg
    }
  }
}
</script>

<style lang="less" scoped>
.is-empty {
  text-align: center;
  color: @font-color-gray;
  padding-top: 200px;

  > div {
    margin-bottom: 40px;
  }
}
</style>
