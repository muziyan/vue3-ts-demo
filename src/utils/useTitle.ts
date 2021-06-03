import { MaybeRef } from './module';
import { ref, watch } from 'vue';
export default (newTitle:MaybeRef<string | null | undefined>)=>{

  const title = ref(newTitle || document.title);

  watch(title,(t) => {
    if(t != null){
      document.title = t;
    }
  },{immediate:true})

  return title;
}