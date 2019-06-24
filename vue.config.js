const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// const vuxLoader = require('@vux/loader')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      sass: {
        data: `@import "src/styles/common/var.scss";`
      }
    }
  },
  configureWebpack: config => {
    // 更改入口文件的路径
    // config.entry.app = resolve('src/main.js')
    // 添加插件
    // vuxLoader.merge(config, {
    //   options: {},
    //   plugins: ['vux-ui']
    // })
    config.optimization = {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      splitChunks: {
        minChunks: 2,
        minSize: 20000,
        maxAsyncRequests: 20,
        maxInitialRequests: 30,
        name: false
      }
    }
    config.plugins.push(new HardSourceWebpackPlugin())
    // config.output = Object.assign({}, config.output, {
    //   filename: '[name].[hash].js',
    //   chunkFilename: '[name].[hash].js'
    // })
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('components', resolve('src/components'))
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    // config.plugins.delete('case-sensitive-paths')
  },
  // 打包时不生成.map文件，减少体积，加快速度
  productionSourceMap: false,
  runtimeCompiler: true,
  // transpileDependencies: ['vux'], // 开启后会导致vux/axios文件报错
  devServer: {
    useLocalIp: true,
    port: 3000,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
