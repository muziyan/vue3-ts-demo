import type {App} from "@vue/runtime-core";
import {HttpInterface} from "../common/axios.module";
import ApiModules from "./modules"
import {inject} from "vue";

const apiModulesKey = Symbol("api-modules-key")

function api($http:HttpInterface){
  const apiModules = ApiModules($http);
  return {
    ...apiModules
  };
}

export default {
  install(app:App){
    const $http = app.config.globalProperties.$http;
    const $api = api($http);
    app.config.globalProperties.$api = $api;
    app.provide(apiModulesKey,$api)
  }
}

export const useApi = ()=> inject(apiModulesKey);
