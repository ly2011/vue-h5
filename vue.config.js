const path = require('path')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
      // sass: {
      //   data: `@import "src/styles/common/var.scss";`
      // }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 这个是加上自己的路径，
        // 注意：试过不能使用别名路径
        resolve('src/styles/common/var.less')
        // resolve('src/styles/common/index.less')
      ]
    }
  },
  configureWebpack: config => {
    // 更改入口文件的路径
    // config.entry.app = resolve('src/main.js')
    // 添加插件
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
    // config.plugins.push(new HardSourceWebpackPlugin()) // TODO: windows有坑，暂时关闭
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
    port: 5000,
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
