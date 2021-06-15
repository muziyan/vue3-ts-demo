<template>
  <div class="video">
    <video ref="rtcVideo" class="video-rtc" autoplay></video>
  </div>
  <button @click="handleStartCapture">开启视频捕获</button>
  <button @click="handleStopCapture">关闭视频捕获</button>
</template>

<script lang="ts" setup>
import { reactive, ref } from "@vue/reactivity";

import {startCapture, stopCapture} from "./index"

const rtcVideo = ref(null);
const recorder = ref(null)

const dgmOptions = reactive({
  video: {
    cursor: "always"
  },
  audio: false
})

const handleStartCapture = async () => {
   recorder.value = await startCapture(dgmOptions,rtcVideo)
}
const handleStopCapture = () => {
  stopCapture(rtcVideo,recorder)
}



</script>

<style lang="scss">
  .video{
    padding: 30px;;
    width: 50vw;
    height: 80vh;
    background:#000;
    &-rtc{
      width:100%;
      height:100%;
    }
  }
</style>