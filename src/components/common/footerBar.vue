<template>
  <div>
    <tabbar>
      <tabbar-item v-for="(item,index) in footerTab" :key="index">
        <img slot="icon" :src="tabName == item.tabName ? item.src_on : item.src_off">
        <span slot="label" class="blue">{{item.tabText}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
// import meOff from '@/assets/images/footerBar/me_off.png'
// import meOn from '@/assets/images/footerBar/me_on.png'

// // import { Tabbar, TabbarItem } from 'vux'
// import Tabbar from 'vux/src/components/tabbar/tabbar.vue'
// import TabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
// export default {
//   components: {
//     Tabbar,
//     TabbarItem
//   },
//   props: {
//     tabIndex: null,
//     tabName: null
//   },
//   data () {
//     return {
//       // tab导航项，tab项里有图标（暗色亮色两种）、文字、指向路由、索引号
//       footerTab: [
//         {
//           src_off: meOff,
//           src_on: meOn,
//           tabText: '首页',
//           tabName: 'mine',
//           routerPath: '/mine',
//           index: 0
//         },
//         {
//           src_off: meOff,
//           src_on: meOn,
//           tabText: '品类',
//           tabName: 'mine',
//           routerPath: '/mine',
//           index: 1
//         },
//         {
//           src_off: meOff,
//           src_on: meOn,
//           tabText: '我的',
//           tabName: 'mine',
//           routerPath: '/mine',
//           index: 2
//         }
//       ]
//     }
//   },
//   methods: {

//   }
// }
// </script>

// <style scoped lang="scss">

// </style>
