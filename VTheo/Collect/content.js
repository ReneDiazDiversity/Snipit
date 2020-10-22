chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
       //localStorage["pages"] = request.pages;
       //console.log(localStorage["pages"])
       
       if(request.text === 'report_back'){
        //ytplayer = document.getElementById("movie_player");
        
        //console.log(document.getElementsByTagName('video')[0])
        //sendResponse(document.PlayerState)
        //sendResponse(document.all[0].outerHTML);
        console.log('coucou')
        document.getElementsByClassName("video-stream")[0].pause();
        console.log(document.getElementsByClassName("video-stream")[0].currentTime);
        sendResponse(document.getElementsByClassName("video-stream")[0].currentTime);
       }
    }
);




function performBookmarkIconClickAction() {
    document.getElementsByClassName("video-stream")[0].pause();
    console.log(document.getElementsByClassName("video-stream")[0].currentTime);
    sendResponse(document.getElementsByClassName("video-stream")[0].currentTime);
}
  
  
  
  function extractInfoFromCurrentVideo() {
    var theScript = document.createElement("script");
    theScript.type = "text/javascript";
    var code = `window.postMessage(
      { 
          type: "CUR_VIDEO_INFO", 
          args: {
              title : document.getElementsByClassName("ytp-title-link yt-uix-sessionlink")[0].innerText,
              url : document.getElementsByClassName("ytp-title-link yt-uix-sessionlink")[0].href,
              playbackTime: document.getElementsByClassName("video-stream")[0].getCurrentTime()
          }
      }, "*");`;
    try {
        theScript.appendChild(document.createTextNode(code));
        document.body.appendChild(theScript);
    } catch (e) {
        theScript.text = code;
        document.body.appendChild(theScript);
    }
    
  }
  
  let videoInfo = {
    id: "",
    title: "",
    playbackTime: 0
  };
  
  // listen for call from page
  window.addEventListener(
    "message",
    function(event) {
      // We only accept messages from ourselves
      // if (event.source != window) return;
      if (event.data && event.data.type) {
        if (event.data.type == "CUR_VIDEO_INFO") {
            videoInfo.id = getVideoIdFromUrl(event.data.args.url);
            videoInfo.title = event.data.args.title;
            videoInfo.playbackTime = event.data.args.playbackTime;
        } else if (event.data.type == "SKIP_TO_TIME") {
            document.getElementsByClassName("video-stream")[0].currentTime =
            event.data.time;
            document.getElementsByClassName("video-stream")[0].play();
        }
      }
    },
    false
  );
  
  function getVideoIdFromUrl(url) {
    var video_id = window.location.search.split("v=")[1];
    var ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }