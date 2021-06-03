
export interface UserStateInterface {
  userInfo?:UserInfoInterface,
  isLogin?:boolean,
  token_value?:string | null,
  token_type?:string | null
}

export declare interface UserInfoInterface{
  avatar?:string,
  name?:string
}

export interface AuthInfoInterface{
  phone?:number,
  name?:string,
  password:string
}