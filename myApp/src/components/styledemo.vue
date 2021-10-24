<!--
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-24 17:14:54
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-24 18:10:46
-->


<template>
  <view class="text">文字颜色为{{ color }},点击后变为红色</view>
</template>

<script>
import { ref,toRefs } from 'vue'
export default {
  props:{
    color: {type: String}
  },
  // 不从父组件获取内容时定义color变量
  //  data(props) {
  //   return {
  //     color: ref('red')
  //   }
  // },
  setup(props){
    const { color } = toRefs(props)
    return {
      color,
    }
  }
}
</script>

<style>
.text {
  color: var(--color);
}
</style>
