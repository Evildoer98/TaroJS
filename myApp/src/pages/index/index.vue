<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-25 14:31:09
-->
<template>
  <view class="index">
    <view class="h3">
      composition API:
    </view>
    <Case1 />

    <view class="h3">
      Teleport:
    </view>
    <Toast :user = username />
    <view id="teleportToast"></view>

    <view class="h3">
      setup语法糖:
    </view>
    <Setup msg="hello"/>

    <view class="h3">
      style-vars语法糖:
    </view>
    <Styledemo :color = color @tap="changeColor"/>
  </view>
</template>

<script>
import { ref, computed, onMounted, toRefs, watch } from 'vue'

import Case1 from "../../components/case1.vue"
import Toast from "../../components/toast.vue"
import Styledemo from "../../components/styledemo.vue"
import Setup from "../../components/setup.vue"

export default {
  components:{
    Case1,
    Toast,
    Styledemo,
    Setup,
  },
  setup () {
    const msg = ref('Hello Vue3')
    const username = ref('user1')
    const count = ref(0)
    const color = ref('blue')
    const changeColor = ()=>{
      color.value = 'red'
    }

    return {
      username,
      msg,
      changeColor,
      color,
    }
  },
  onReady () {
    console.log('onReady')
  }
}
</script>
<style lang="scss">
.index{
  padding: 20px;
  .h3 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 0;
  }
}
</style>
