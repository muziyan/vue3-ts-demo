import {Store} from "vuex";
import {AxiosError, AxiosInstance, AxiosResponse, Method} from "axios";
import {MaybeRefObject, MaybeRefString} from "../utils/module";
import {AuthInfoInterface} from "../store/interface/userInterface";

export declare interface HttpInterface{
  store:Store<any>,
  $http:AxiosInstance | undefined,
  requestInterceptors:() => void,
  responseInterceptors:() => void,
  request:(type:Method,url:MaybeRefString,data?:MaybeRefObject)=>Promise<AxiosResponse>,
  get: (url: MaybeRefString) => Promise<AxiosResponse>,
  post:(url:MaybeRefString,data:MaybeRefObject) => Promise<AxiosResponse>,
  remove:(url:MaybeRefString,data:MaybeRefObject) => Promise<AxiosResponse>,
  update:(url:MaybeRefString,data:MaybeRefObject) => Promise<AxiosResponse>,
  error:(err:AxiosError)=>void
}