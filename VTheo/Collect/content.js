chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["pages"] = request.pages;
       console.log(localStorage["pages"])
    }
);