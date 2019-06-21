<template>
  <section class="app-main">
    <!-- <div class="sider">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/mine">mine</router-link> |
      </div>
    </div> -->
    <div class="content">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
