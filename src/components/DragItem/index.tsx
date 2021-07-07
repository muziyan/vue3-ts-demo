import { defineComponent } from "@vue/runtime-core";
import { reactive, toRefs} from "@vue/runtime-dom";

import "./index.scss"

const DragItem = defineComponent({
  name:"DragItem",
  props:{
    isMove:{
      type:Boolean,
      default:false
    }
  },
  emits:['update:isMove'],
  setup(props,{slots,emit}){
    const {isMove} = toRefs(props);
    const style = reactive({
      top:0,
      left:0
    })

    // change move status and bind isMove value
    const updateIsMove = (status:boolean) => {
      emit("update:isMove",status)
    }
    const updateIsMoveTrue = () => updateIsMove(true)
    const updateIsMoveFalse = () => updateIsMove(false)

    const handleMousedown = (e:MouseEvent) => {
      updateIsMoveTrue()
      const target = e.target;

    }
  
    const handleMouseup = () => {
      updateIsMoveFalse()
    }
    
    const handleMousemove = () => {
        if(!isMove.value) {
          updateIsMoveFalse()
          return false;
        }
        console.log("move")
    }
    
    return ()=>{

      return (
        <div 
          class={"drag-item"}
          onMousedown={handleMousedown}
          onMousemove={handleMousemove}
          onMouseup={handleMouseup}
          onMouseleave={updateIsMoveFalse}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default DragItem;