import "./ripple.scss"

const computeRippleStyle = (element,event)=>{
  const {top,left} = element.getBoundingClientRect();
  const {clientWidth,clientHeight} = element;

  const radius = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2;
  const size = radius * 2;

  const localX = event.clientX - left;
  const localY = event.clientY - top;

  const centerX = (clientWidth - size) / 2;
  const centerY = (clientHeight - size) / 2;

  const x = localX - centerX;
  const y = localY - centerY;

  return {
    x,y,centerX,centerY,size
  }
}

const createRipple = (event)=>{
  const container = event.target;
  const {x,y,centerX,centerY,size} = computeRippleStyle(container,event);

  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.opacity = '0';
  ripple.style.transform = `"translate(${x}px,${y}px) scale3d(.3,.3,.3);"`
  ripple.dataset.createdAt = String(performance.now());

  const {position} = window.getComputedStyle(container);

  container.style.overflow = 'hidden';

  position === 'static' && (container.style.position = 'relative');

  container.appendChild(ripple);

  window.setTimeout(()=>{
    ripple.style.transform = `translate(${centerX}px,${centerY}px) scale3d(1,1,1)`
    ripple.style.opacity = `.25`;
  })
}

const removeRipple = (event)=>{
  const container = event.target;
  if(!container) return;
  const ripples = container?.querySelectorAll(".ripple");
  if(!ripples.length) return;

  const lastRipple = ripples[ripples.length - 1];
  const delay = 300 - performance.now() - Number(lastRipple.dataset.createdAt);

  setTimeout(()=>{
    lastRipple.style.opacity = '0';
    setTimeout(()=> lastRipple.parentNode?.removeChild(lastRipple),300);
  },delay)
}

const VRipple = {
  mounted(el:HTMLDivElement){
    el.addEventListener("mousedown",createRipple);
    document.addEventListener("mouseup",removeRipple);
  },
  unmounted(el:Element){
    el.removeEventListener("mousedown",createRipple);
    document.removeEventListener("mouseup",removeRipple);
  }
}

export default VRipple;