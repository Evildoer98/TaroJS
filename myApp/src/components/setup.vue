<!--
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-24 17:14:31
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-24 17:30:16
-->

<template>
  <view>
    <view>count:{{ count }},msg:{{ info }}</view>
    <button @tap="incAndChangeInfo">
      增加 1修改msg
    </button>
  </view>

</template>


<script>
import { ref, toRefs } from 'vue'
export default {
  props: {
    msg: String
  },
  setup (props) {
    const count = ref(0)
    const info = ref(props.msg)
    const incAndChangeInfo = () => {
      count.value++
      info.value = "change hello" + count.value
    }
    return {
      count,
      info,
      incAndChangeInfo
    }
  }
}
</script>
