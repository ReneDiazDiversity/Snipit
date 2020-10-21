chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
       //localStorage["pages"] = request.pages;
       //console.log(localStorage["pages"])
       console.log('coucou')
       if(request.text === 'report_back'){
        ytplayer = document.getElementById("movie_player");
        
        console.log(document.getElementsByTagName('video')[0])
        sendResponse(ytplayer)
        //sendResponse(document.all[0].outerHTML);
       }
    }
);