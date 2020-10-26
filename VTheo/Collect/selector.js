
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

    
    $('.timestampbegin').append('<a target="_blank" href="' + localStorage["link"] + '">'+ localStorage["thumbnails"] + '<p class="time">' + localStorage["time"] + '</p>'+'</a>');

})