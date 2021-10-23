/*
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 18:33:43
 */

// 项目入口文件
import { createApp } from 'vue'
import store from './store'

import './app.scss'

const App = createApp({
  // 可以使用所有 Vue 生命周期方法
  mounted() {

  },

  // 对应 onLaunch
  onLaunch () {

  },

  // 对应 onshow
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

  // 对应onHide
  onHide () {

  }
})

App.use(store)

export default App
