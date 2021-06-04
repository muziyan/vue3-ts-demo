import { isObject } from "./index"

type DeepFlatObj = {
  [key : string] : any
}

const deepFlatObj = (obj:DeepFlatObj) => {
  if(!obj || !isObject(obj)) return {};
  let result:DeepFlatObj = {};
  Object.keys(obj).forEach(key => {
    if(isObject(obj[key])){
      result = Object.assign(result,deepFlatObj(obj[key]));
    }else{
      result[key] = obj[key]
    }
  })

  console.log(result)

  return {
    ...result
  }
}

export default deepFlatObj;
