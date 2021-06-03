import {HttpInterface} from "../../common/axios.module";
import Auth from "./auth.api";


export default ($http:HttpInterface):object | null=>{

  const auth = Auth($http);

  return {
    auth
  }
}

// not working
/*
  const paths = import.meta.glob("./*.api.ts");
  Object.keys(paths).forEach(async (key : string) => {
    let reg = /[\w]+/;
    let module = await paths[key]();
    let newString:RegExpExecArray | null = reg.exec(key)
    if (newString) {
      key = newString[0]
      modules[key] = module.default($http)
    }else{
      modules[key] = module.default($http)
    }
  })
*/
