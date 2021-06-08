import {defineComponent, reactive, ref, toRefs} from "vue"

import "./index.scss"

const avatar = defineComponent({
  name:"avatar",
  props:{
    url:{
      type:String
    },
    customClass:{
      type:String
    },
    type:{
      type:String,
      default:"circle",
      validator:(val:string)=>{
        return ['square','circle'].includes(val)
      }
    },
    size:{
      type:[Number,String],
      default:"default",
      validator:(val:string | number):boolean=>{
        if(typeof val === 'number'){
          return !!val;
        }else if(typeof val === 'string'){
          return ['default','small','large'].includes(val);
        }
        return false;
      }
    }
  },
  setup(props){
    const {url,customClass,type,size} = toRefs(props);

    return ()=>{

      const typeClass = ref(`avatar--${type.value}`);
      let className = customClass.value ? `${customClass.value} ${typeClass.value}` : `${typeClass.value}`;
      let avatarStyle = reactive({});

      if(typeof size.value === 'string' && size.value !== 'default'){
        className += ` avatar--${size.value}`;
      }else if(typeof size.value === 'number'){
        const sizeVal = size.value;
        avatarStyle = {
          width:`${sizeVal}px`,
          height:`${sizeVal}px`,
        }
      }

      const hasUrlElement = (<img 
        class={className} 
        style={avatarStyle}
        src={url.value ? url.value : ""} 
        alt="avatar" 
      />)

      const notUrlElement = (
        <div 
          class={`${className} avatar--not`}
          style={avatarStyle}
        ></div>
      );

      const element = url.value ?  hasUrlElement : notUrlElement;

      return element;
    }
  }
})

export default avatar;