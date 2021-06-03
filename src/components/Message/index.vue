<template>
  <div class="message">
    <div class="message-inner">
      <div
        v-for="(item) in data.messageList"
        :key="item.message"
        :class="classStatus(item.type)"
      >{{ item.message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import globalFn from "../../utils/globalFn";
import type {MaybeRefArray} from "../../utils/module";


const data = reactive({
  messageList:[
    {
      type:"error",
      message:"测试"
    }
  ]
});

const classStatus = (type)=>{
  return [
    'message-item',
    'message-item--'+type
  ]
}

const message = (option) => {
  data.messageList.push(option);
}

globalFn().add("$message",message);

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>