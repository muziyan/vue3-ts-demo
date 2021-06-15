import { unref } from "vue";


export const startCapture = async (displayMediaOption,rtcVideo) =>{ 

  displayMediaOption = unref(displayMediaOption)
  rtcVideo = unref(rtcVideo)

  let captureStream = null;

  let mediaRecorder = null;
  const mediaRecorderChunks = [];
  const mediaRecorderOptions = {
    mimeType: "video/webm; codecs=vp9"
  }

  try {

    captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOption)
    rtcVideo.srcObject = captureStream;
    
    mediaRecorder = new MediaRecorder(captureStream,mediaRecorderOptions);

    mediaRecorder.ondataavailable = event => {
      if(event.data.size > 0){
        mediaRecorderChunks.push(event.data)
        console.log(event.data)
        download(mediaRecorderChunks)
      }  
    }
    mediaRecorder.start()
    

    dumpOptionsInfo(rtcVideo)
  } catch(err){
    console.error("Error: ",err)
  }
  
  return mediaRecorder;
}

export const stopCapture = (rtcVideo,mediaRecorder) => {
  rtcVideo = unref(rtcVideo)
  mediaRecorder = unref(mediaRecorder)
  let tracks = rtcVideo.srcObject.getTracks();
  tracks.forEach(track  => track.stop());

  mediaRecorder.stop()
  rtcVideo.srcObject = null
}


const download = (chunks) => {
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
}

const dumpOptionsInfo = (rtcVideo) => {
  const videoTrack = rtcVideo.srcObject.getVideoTracks()[0];

  console.log(videoTrack)

  // console.info("Track settings:");
  // console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  // console.info("Track constraints:");
  // console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));

}