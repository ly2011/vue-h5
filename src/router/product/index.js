import AsyncLoader from '@/utils/async-loader'
const Products = AsyncLoader('views/product/list')
export default [
  {
    path: '/products',
    name: 'products',
    components: {
      default: Products
    },
    meta: {
      keepAlive: true
    }
  }
]
