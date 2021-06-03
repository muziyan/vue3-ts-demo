import {AppConfig, getCurrentInstance} from "vue";

export default () =>{
  const app = getCurrentInstance();
  const appConfig:AppConfig | undefined = app?.appContext?.config;

  return {
    use(type:string,options:any){
      return appConfig?.globalProperties[type](options) || console.error(`not found ${type}`);
    },
    add(type:string,fn:() => any){
      if(appConfig){
        appConfig.globalProperties[type] = fn;
      }else{
        console.error("config error");
      }
    }
  }
}