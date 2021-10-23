/*
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 16:43:00
 */

// 项目入口文件
import { createApp } from 'vue'
import store from './store'

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App
