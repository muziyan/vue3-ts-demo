import type { MaybeRef, MaybeRefObject } from './../../utils/module.d';
import { unref } from "vue";

type RTCVideo = any

// 开始屏幕共享
export const startCapture = async (displayMediaOption:MaybeRefObject,rtcVideo:RTCVideo) =>{ 

  // 建构 ref 数据
  displayMediaOption = unref(displayMediaOption)
  rtcVideo = unref(rtcVideo)

  let captureStream = null;

  let mediaRecorder = null;
  const mediaRecorderChunks:Array<any> = [];
  const mediaRecorderOptions = {
    mimeType: "video/webm; codecs=vp9"
  }

  try {

    captureStream = await navigator.mediaDevices?.getDisplayMedia(displayMediaOption)
    rtcVideo.srcObject = captureStream;
    
    mediaRecorder = new MediaRecorder(captureStream,mediaRecorderOptions);

    mediaRecorder.ondataavailable = event => {
      if(event.data.size > 0){
        mediaRecorderChunks.push(event.data)
        download(mediaRecorderChunks)
      }  
    }
    mediaRecorder.start()
    

  } catch(err){
    console.error("Error: ",err)
  }
  
  return mediaRecorder;
}

export const stopCapture = (rtcVideo:RTCVideo,mediaRecorder:MaybeRef<any>) => {
  rtcVideo = unref(rtcVideo)
  mediaRecorder = unref(mediaRecorder)


  let tracks = rtcVideo.srcObject.getTracks();
  tracks.forEach((track:any)  => track.stop());
  
  mediaRecorder.stop()
  rtcVideo.srcObject = null
}


const download = (chunks:Array<any>) => {
  const blob = new Blob(chunks,{
    type: "video/webm"
  })
  const url = URL.createObjectURL(blob)
  let aTag = document.createElement('a');
  document.querySelector("body")?.appendChild(aTag);
  aTag.style.display = "none";
  aTag.href = url;
  aTag.download = "rtc-demo.webm"
  aTag.click()
  window.URL.revokeObjectURL(url)
  aTag.remove()
}