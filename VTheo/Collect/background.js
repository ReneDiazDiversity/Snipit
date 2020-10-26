//https://github.com/chaosifier/TubeMark

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    console.log("received " + msg.type);
    localStorage["time"] = Math.round(msg.time);
    localStorage["link"] = msg.url.replace('https://www.youtube.com/watch?v=','https://youtu.be/') + '?t=' + Math.round(msg.time);
});



// A function to use as callback
    // function doStuffWithDom(domContent) {
    // console.log('I received the following DOM content:\n' + domContent);
    // localStorage["time"] = domContent.time;
    // localStorage["link"] = domContent.url;
    // }

// When the browser-action button is clicked...


// chrome.commands.onCommand.addListener(function (command, tab) {
//     if (command === "save"){
//         //console.log(tab)
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// })





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