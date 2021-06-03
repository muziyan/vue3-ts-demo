import {
  AuthInfoInterface,
  UserInfoInterface,
  UserStateInterface
} from "../interface/userInterface";
import {Module} from "vuex";

const user:Module<UserStateInterface,any> =  {
  namespaced:true,
  state:{
    userInfo:{},
    isLogin:false,
    token_value:null,
    token_type:null
  },
  getters:{
    getUserInfo(state){
      return state.userInfo;
    },
    getToken(state){
      return `${state.token_type} ${state.token_value}`;
    }
  },
  mutations:{
    setUserInfo(state,payload:UserInfoInterface){
      state.userInfo = payload
    },
    setLoginInfo(state){
      state.isLogin = !state.isLogin
    }
  },
  actions:{
    async getUser({commit},payload:AuthInfoInterface){
      // let res = await login(payload);
      commit("setUserInfo", {})
      commit("setLoginInfo")
      return new Promise(resolve => {
        resolve("登录成功!")
      })
    }
  }
}

export default user;