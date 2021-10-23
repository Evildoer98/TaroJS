<!--
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-23 15:45:42
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 20:16:30
-->
<template>
  <view class="index">
    <!-- <NumberDisplay/>
    <NumberSubmit/> -->
    <text>{{msg}}</text>
    <button @tap="increment">+1</button>
    <view>existCount: {{existCount}}</view>
    <view>新增{{count}}</view>
    <view>total: {{total}}</view>
  </view>
</template>

<script>
// import NumberDisplay from '../../components/NumberDisplay.vue'
// import NumberSubmit from '../../components/NumberSubmit.vue'

import {ref, computed, onMounted, toRefs, watch} from 'vue'
export default {
  // name: 'Index',
  // components: {
  //   NumberDisplay,
  //   NumberSubmit
  // }
  name: 'case',
  setup (props) {
    const msg = ref('My Demo')
    const count = ref(0)
    const existCount = ref(2)

    const total = computed (() => count.value + existCount.value)

    function increment () {
      count.value++
    }

    onMounted(() => {
      console.log('computed mounted');
    })
    return {
      increment,
      existCount,
      total,
      count
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
