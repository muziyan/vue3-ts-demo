<template>
  <canvas
    ref="canvas"
  >
      <p>you browser not support canvas!</p>
  </canvas>
</template>

<script setup lang="ts">
import {defineProps, ref, onMounted} from "vue";
import draw from "./index"

const canvas = ref("null");
const props = defineProps({
  size:{
    type:Number,
    default:300
  },
  text:{
    type:String,
    default:""
  },
  bgColor:{
    type:String
  },
  textColor:{
    type:String
  },
  borderColor:{
    type:String,
    default:"#A5DEF1"
  },
  speed:{
    type:Number,
    default:4
  },
  start:{
    type:Number,
    default:0
  },
  end:{
    type:Number,
    default:30
  },
  radius:{
    type:Number
  },
  lineWidth:{
    type:Number,
    default:5
  }
});

onMounted(()=>{
  draw(canvas,props);
})




</script>