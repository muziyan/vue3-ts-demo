import {toRefs} from "vue"
import {useRoute} from "vue-router";

export default ()=>{
  const route = useRoute();
  return {
    ...toRefs(route)
  }
}