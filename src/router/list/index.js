import AsyncLoader from '@/utils/async-loader'
const TabBar = AsyncLoader('components/common/tabbar')
const List = AsyncLoader('views/list/list')
export default [
  {
    path: '/list',
    name: 'list',
    components: {
      default: List,
      tabbar: TabBar
    },
    meta: {
      keepAlive: true
    }
  }
]
