import {MaybeRef, MaybeRefNumber, MaybeRefString} from "../../utils/module";
import {onUnmounted, unref} from "vue";

interface OptionsInterface {
  size?:MaybeRefNumber,
  text?:MaybeRefString,
  bgColor?:MaybeRefString,
  textColor?:MaybeRefString,
  borderColor?:MaybeRefString,
  speed?:MaybeRefNumber,
  start?:MaybeRefNumber,
  end?:MaybeRefNumber,
  radius?:MaybeRefNumber,
  lineWidth?:MaybeRefNumber
}

export default (el:MaybeRef<HTMLCanvasElement | any>,options:OptionsInterface) => {
  const canvas = unref(el);

  let {size,speed,lineWidth,radius,start,end,text,bgColor,textColor,borderColor} = options;

  let animationId:MaybeRef<number> = 0;

  lineWidth = lineWidth || 5;
  size = size || 300;

  canvas.width = canvas.height = size;

  const context = canvas.getContext('2d');  // get 2d drawing board
  const [centerX,centerY] = [(+size) / 2, (+size) / 2]; // X and Y axis
  const rad = (Math.PI * 2) / 100;
  speed = speed || 4 ; // loading speed
  [start,end] = [start || 0,end || 50]; // start pointer and end pointer

  const reverse = start >= end;
  radius = radius || ((+size) / 2 - (+lineWidth) * 2);


  // draw circle ring
  function drawRing(color:MaybeRefString,copies:MaybeRef<number | null>,isClose:MaybeRef<boolean>){
    context.save();
    context.beginPath();
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.arc(
      centerX,
      centerY,
      radius,
      !isClose ? -Math.PI / 2 : 0,
      copies ? -Math.PI / 2 + (+copies) * rad : -Math.PI * 2,
      false
    )
    context.stroke();
    isClose && context.closePath();
    context.restore();
  }

  // draw text
  function drawText(type:MaybeRef<number | string>){
    context.save();
    context.fillStyle = textColor || borderColor || bgColor;
    context.font = "30px";
    context.textAlign = "center";
    context.textBaseline = "middle";
    if (typeof type === "string") {
      context.fillText(type, centerX, centerY);
    }else if(typeof type === "number"){
      context.fillText(type + "%", centerX, centerY);
    }
    context.restore();
  }

  // refresh view
  function refreshView(){
    cancelAnimation();
    if (start !== end){
      animationId = window.requestAnimationFrame(refreshView);
    }

    if (typeof size === "number") {
      context.clearRect(0, 0, size, size);
    }
    if(typeof bgColor === "string"){
      drawRing(bgColor,null,true);
    }else{
      drawRing("#000",null,true);
    }
    if(text && typeof text === 'string'){
      drawText(text);
    }else if(start && typeof start === 'number'){
      drawText(start);
    }
    if(typeof borderColor === 'string' && typeof start === 'number'){
      drawRing(borderColor,start,false);
    }else{
      drawRing("pink",0,false);
    }
    if(typeof start === 'number' && typeof speed === 'number' && typeof end === 'number'){
      start = start + speed * (start >= end ? -1 : 1);
      if (reverse) {
        if (start < end) {
          start = end
        }
      } else {
        if (start > end) {
          start = end
        }
      }
    }
  }

  refreshView();

  // cancel animation frame
  function cancelAnimation(){
    if (typeof animationId === "number" && animationId) {
      window.cancelAnimationFrame(animationId);
    }
  }

  onUnmounted(()=> cancelAnimation())
}
