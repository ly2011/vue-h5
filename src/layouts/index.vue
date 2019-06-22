<template>
  <section class="app-main">
    <div class="content">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="wap-home" replace to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="send-gift-o" replace to="/list">品类</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" replace to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less" scoped>
.app-main {
  height: 100vh;
  width: 100vw;

  .content {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
