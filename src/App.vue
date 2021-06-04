<template>
  <!-- <router-view :key="path"></router-view> -->
  <!-- <div style="width: 500px;height: 300px;background-color: #eee" v-ripple>ripple</div> -->
  <Vmodel 
    v-model:value="VModelValue"
  />
</template>

<script lang="ts" setup>

// get current route path
import getCurrentRoute from "./utils/currentRoutePath";   
import Vmodel from "./components/VModel/index.vue"
const {path} = getCurrentRoute();
import {useStore} from "vuex";
import {ref, computed, onMounted,} from "vue";
import type { MaybeRef } from "./utils/module";

const store = useStore();

const submit = async ()=>{
  await store.dispatch("user/getUser",{name:"test",password:"test"})
}

submit();

const start:MaybeRef<Number> = ref(30);

const end:MaybeRef<number> = ref(50);

const userInfo:MaybeRef<object> = computed(()=> store.state["user/userInfo"]);
const isLogin:MaybeRef<boolean> = computed(() => store.state["user/isLogin"])


const VModelValue = ref("v-model")

</script>

<style>

</style>
