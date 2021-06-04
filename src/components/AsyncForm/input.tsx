import {defineComponent,ref, toRefs, VNode} from "vue"

import {Input,InputNumber,Select,Radio,Upload,TimePicker} from "ant-design-vue"


 const AsyncInput =  defineComponent({
  props:{
    value:{
      type:String
    },
    type:{
      type:String,
      default:"text"
    },
    attrType:{
      type:String,
      default:"text"
    },
    options:{
      type:Object
    }
  },
  emits:["update:value",'on-blue'],
  components:{
    Input,
    InputNumber,
    Select,
    Radio,
    Upload,
    TimePicker
  },
  setup(props,{emit}){
    const {value,type,attrType,options} = toRefs(props);

    let element:JSX.Element | VNode | null;

    const handleChange = function(event:any){ 
      let {target} = event as any;
      console.log(target.value);
      emit("update:value",target.value);            
    }

    const handleClick = ():any =>{ 
        emit("on-blue",123);
    }

    switch(type.value){
      case "text":
        if(attrType.value === 'number'){
          
        }else{
          element = (
          <Input 
            type={attrType?.value} 
            v-model:value={value?.value} 
            onInput={handleChange}
            onBlur={handleClick}
            {...options?.value} 
          />
          );
        }
        break;


      default:
        element = null;
    }



    return ()=>{


      return (element);
    }
  }
})

export default AsyncInput;