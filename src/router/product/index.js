import AsyncLoader from '@/utils/async-loader'
const Products = AsyncLoader('views/product/list')
const ProductDetail = AsyncLoader('views/product/detail')
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
  },
  {
    path: '/product/:itemId',
    name: 'productDetail',
    component: ProductDetail,
    props: true
  }
]
