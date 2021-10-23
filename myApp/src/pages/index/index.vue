<!--
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 19:29:42
-->
<template>
  <view class="index">
    <!-- <NumberDisplay/>
    <NumberSubmit/> -->
    <text>{{msg}}</text>
  </view>
</template>

<script>
// import NumberDisplay from '../../components/NumberDisplay.vue'
// import NumberSubmit from '../../components/NumberSubmit.vue'

import {ref} from 'vue'
export default {
  // name: 'Index',
  // components: {
  //   NumberDisplay,
  //   NumberSubmit
  // }

  setup () {
    const msg = ref('My Demo')
    return {
      msg
    }
  }

}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
