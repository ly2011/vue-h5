<template>
  <div class="detail">
    <h3 class="title">我是详情页</h3>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  created () {
    // console.log('我是参数: ', this.$route.params.id)
    console.log('我是属性id: ', this.id)
  }
}
</script>

<style lang="less" scoped>
.title {
  color: @blue-color;
}
</style>
