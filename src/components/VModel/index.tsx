import {computed, defineComponent, toRefs} from "vue";


const VModel = defineComponent({
  name:"VModel",
  props:{
    value:{
      type:String,
      required:true
    }
  },
  emits:['update:value'],
  setup(props,{emit}){

    const {value} = toRefs(props);

    const handleClick = ()=>{
      handleEmit("测试")
    }
    const handleChange =(e:Event)=>{
      const {target} = e as any;
      handleEmit(target.value);
    }

    const handleEmit = (val:string)=> {
      emit("update:value",val)
    }

    const currentValue = computed(()=> value);

    return ()=>{
      return (
        <>
          <button onClick={handleClick}>测试</button>
          <div>{currentValue}</div>
          <input type="text" value={value.value} onInput={handleChange} />
        </>
      )
    }
  }
});

export default VModel;