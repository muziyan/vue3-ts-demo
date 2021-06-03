import {inject, unref} from "vue";
import type {AxiosError, AxiosRequestConfig, Method} from "axios"
import axios, {AxiosResponse} from "axios";
import type {MaybeRefObject, MaybeRefString} from "../utils/module"
import type {App} from "@vue/runtime-core";
import {Store} from "vuex";
import {HttpInterface} from "./axios.module";

const axiosKey = Symbol("axios-http");

class Http implements HttpInterface{
  $http;
  store;

  constructor(store:Store<any>,options:AxiosRequestConfig) {
    this.store = store;
    this.$http = axios.create(options);
    this.requestInterceptors();
    this.responseInterceptors();
  }

  requestInterceptors(){
    this.$http?.interceptors.request.use((config:AxiosRequestConfig) => {
      const token = this.store?.getters['user/getToken'];
      if(token){
        config.headers.authorize = token;
      }
      return config;
    },(err:AxiosError)=>{
      return Promise.reject(err);
    })
  }

  responseInterceptors(){
    this.$http?.interceptors.response.use((res:AxiosResponse) => {
      let {data} = res;
      return data;
    },(err:AxiosError)=>{
      this.error(err);
      return Promise.reject(err);
    })
  }

  async request(type:Method = 'get',url: MaybeRefString,data?:MaybeRefObject){
    url = unref(url);
    return this.$http?.request({
      method:type,
      url:url,
      data: data ? unref(data) : {}
    })
  }

  async get(url: MaybeRefString): Promise<AxiosResponse> {
    return this.request('get',url);
  }

  async post(url:MaybeRefString,data?:MaybeRefObject){
    return this.request('post',url,data);
  }

  async remove(url:MaybeRefString,data?:MaybeRefObject){
    return this.request('delete',url,data);
  }

  async update(url:MaybeRefString,data?:MaybeRefObject){
    return this.request('put',url,data);
  }

  error(error:AxiosError){
    console.error(error);
  }
}

export default {
  install(app:App,options:object){
   const $http = new Http(app.config.globalProperties.$store,Object.assign({
      baseURL: "http://localhost:8080/api/v1",
      timeout: 3000
    },options));
    app.config.globalProperties.$http = $http;
    app.provide(axiosKey,$http)
  }
};

export const useHttp = () => inject(axiosKey)

