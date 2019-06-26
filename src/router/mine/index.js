import AsyncLoader from '@/utils/async-loader'
const TabBar = AsyncLoader('components/common/tabbar')
const Mine = AsyncLoader('views/mine')
export default [
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      tabbar: TabBar
    },
    meta: {
      keepAlive: true
    }
  }
]
