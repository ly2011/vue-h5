/**
 * bug: vue 异步组件采用参数路径报错(解决方案：不管是../还是@/都不能出现在参数(chunkPath)中)
 *
 * https://segmentfault.com/q/1010000012485066
 * https://github.com/mrdulin/blog/issues/43
 * 懒加载
 * @param {String} chunkPath 相对路径(../还是@/都不能出现在参数中!!!)
 */
const AsyncLoader = chunkPath => {
  return () => import(/* webpackChunkName: "chunk-[request]" */ `@/${chunkPath}`)
}

export default AsyncLoader
