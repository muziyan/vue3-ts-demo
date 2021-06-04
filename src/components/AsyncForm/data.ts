import type {ButtonProps} from 'ant-design-vue/lib/button/buttonTypes';
import type { FormProps } from 'ant-design-vue/lib/form';

export type InputType = "text" | "radio" | "select" | "time" | "upload" 

export type InputAttrType = "text" | "password" | "number"

// type inputData<T> = 

export interface ListItemInterface {
  label?:string,
  name:string,
  inputType:InputType,
  inputAttrType?:InputAttrType,
  inputData?:object,
  placeholder?:string
}

export interface ButtonType extends ButtonProps
{
  show:boolean,
  text?:string
}

export interface AsyncFormPropsInterface {
  customClass?:string,
  formAttrData?:FormProps,
  list:Array<ListItemInterface>,
  confirm?:ButtonType,
  cancel?:ButtonType
}


export interface ModalInterface {
  [ key : string] : any
}

export const AsyncFormProp = {
  formAttrData:{
    type:Object,
    required:false
  },
  customClass:{
    type:String,
    required:false
  },
  list:{
    type:Array,
    required:true,
    default:{
      inputType:'text',
      inputAttrType:'text'
    }
  },
  confirm:{
    type:Object,
    default(){
      return {      
        show:true,
        text:"确认"
      }
    }
  },
  cancel:{
    type:Object,
    default(){
      return {      
        show:false,
        text:"重置"
      }
    }
  }
}

