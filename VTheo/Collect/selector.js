
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

    $('.timestampbegin').append('<p>' + localStorage["time"] + '</p>');
    $('.timestampbegin').append('<a target="_blank" href="' + localStorage["link"] + '">'+ localStorage["link"] +'</a>');

})