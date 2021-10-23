/*
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 16:44:47
 */

// babel 配置

// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: true
    }]
  ]
}
