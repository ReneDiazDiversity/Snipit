

function MyGenericClick(info, tab){
    console.log("Clicked on page:", info, tab)

    localStorage["pages"] = info.pageUrl;
}



function MyImageClick(info, tab){
    console.log("Clicked an image",info, tab)
    
    localStorage["images"] = info.srcUrl;
}

function MyQuoteClick(info, tab){
    console.log("Clicked a quote",info, tab)

    localStorage["quotes"] = info.selectionText;
    
}


chrome.contextMenus.create({
    "title": "Collect page",
    "contexts" : ["page"],
    "onclick": MyGenericClick
})

chrome.contextMenus.create({
    "title": "Collect Image",
    "contexts" : ["image"],
    "onclick": MyImageClick
})

chrome.contextMenus.create({
    "title": "Collect Quote",
    "contexts" : ["selection"],
    "onclick": MyQuoteClick
})


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg);
    sendResponse({"text": "Received the links"});
})