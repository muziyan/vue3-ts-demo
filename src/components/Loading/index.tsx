import {defineComponent,reactive,ref, toRefs, watch} from "vue"

import "./index.scss"

const loading = defineComponent({
  props:{
    type:{
      type:String,
      default:"line",
      validator:(val:string)=>{
        return ['line','full'].includes(val)
      }
    },
    loading:{
      type:Boolean,
      default:false
    },
    loadingText:{
      type:String
    },
    animationColor:{
      type:String
    },
  },
  setup(props){
    const {type,loadingText,loading,animationColor} = toRefs(props);

    let flag = ref(false);

    flag.value = loading.value

    watch(loading,(val)=>{
      if(!val){
        setTimeout(()=> flag.value = false,500);
      }
    })

    const lineStyle = reactive({
      backgroundColor:animationColor
    })

    const fullStyle = reactive({
      borderColor:animationColor
    })
  
    return ()=> {
      
      const fullElement = (
        <div class="loading-full">
          <div 
            class="loading-full-content"
            style={fullStyle}
          ></div>
          <span class="loading-full__text">
            {loadingText.value}
            <span class="loading-full-omit-box">
              <b class="loading-full__omit">...</b>
            </span>
          </span>
        </div>
      );
        
      const lineElementClass = loading.value ? 
        `loading-line-content--animation` : 
        `loading-line-content--loaded` ;

      const lineElement = (
        <div class="loading-line">
          <div 
            class={lineElementClass}
            style={lineStyle}  
          ></div>
        </div>
      )

      return flag.value ? ( type.value === 'line' ? lineElement : type.value === 'full' ? fullElement : "" ) : "";
    }
  }
});

export default loading;