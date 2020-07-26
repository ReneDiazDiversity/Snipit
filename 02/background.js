function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

var status = "Not run";
function determineAction(){
    if (status === "Not run") {
        console.log(status);
        chrome.tabs.executeScript({
            file: "insert.js"
        });
        console.log(status);
        status = "Open";
    }
    if (status === "Open")  { openNav (); }
    // else if (status === -1) { closeNav(); }
    // console.log(status);
}

chrome.browserAction.onClicked.addListener(function (tab) {
    determineAction();
})





window.targetText = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.targetText[request.url] = request.count
})
