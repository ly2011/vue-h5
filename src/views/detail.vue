<template>
  <div class="detail">
    <h3 class="title">我是详情页</h3>
  </div>
</template>

<script>
export default {
  created () {
    console.log('我是参数: ', this.$route.params.id)
  }
}
</script>

<style lang="less" scoped>
.title {
  color: @blue-color;
}
</style>
