import {AuthInfoInterface} from "../../store/interface/userInterface";
import {HttpInterface} from "../../common/axios.module";

export default ($http:HttpInterface)=>{

  const login = async (data:AuthInfoInterface)=> await $http.post("/auth/login",data);

  return {
    login
  }
}

