import {defineComponent, reactive, toRefs, unref} from "vue"

import "./index.scss"

enum ModeEnum{
  PREVIEW = "preview",
  EDIT = "edit",
  ALL = 'all'
}

const editor = defineComponent({
  props:{
    mode:{
      type:String,
      default:"all",
      validator:(val:string)=>{
        return ['edit','preview','all'].includes(val);
      }
    }
  },
  setup(props){

    const {mode} = toRefs(props);

    const worker = new Worker("./worker.js");

    const postMessage = (msg:string) => {
      worker.postMessage(msg)
    }

    return ()=>{

      const toolsElement = (
        <div class="editor-tools"></div>
      )

      const editElement = (
        <div class="editor-content__edit" contenteditable>

        </div>
      )

      const previewElement = (
        <div class="editor-content__preview">
          
        </div>
      )

      const allModeElement = (
        <>
          <editElement />
          <previewElement />
        </>
      )


      const modeElement = reactive({
        all:allModeElement,
        edit:editElement,
        preview:previewElement
      })

      const contentElement = (
        <div class="editor-content">
          {
            mode.value && modeElement[unref(mode as ModeEnum)]
          }
        </div>
      )
      
      return (
        <div class="editor">
          <toolsElement />
          <contentElement />
          <button onClick={()=> postMessage("测试")}>worker btn</button>
        </div>
      )
    }
  }
});

export default editor;