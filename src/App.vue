<template>
  <router-view :key="path"></router-view>
  <div style="width: 500px;height: 300px;background-color: #eee" v-ripple>ripple</div>
</template>

<script lang="ts" setup>

// get current route path
import getCurrentRoute from "./utils/currentRoutePath";   
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


</script>

<style>

</style>
