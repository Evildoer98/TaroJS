/*
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 16:42:03
 */

// 项目编译配置目录 ———— 生产环境配置
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
