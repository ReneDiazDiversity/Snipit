chrome.runtime.onMessage.addListener( function(request, sendResponse){
       //localStorage["pages"] = request.pages;
       //console.log(localStorage["pages"])
       if(request.text === 'report_back'){
        sendResponse(document.all[0].outerHTML);
       }
    }
);