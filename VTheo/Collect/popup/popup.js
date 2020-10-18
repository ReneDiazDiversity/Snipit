
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    $('.gallery').append('<a href="' + localStorage["pages"] + '">'+ localStorage["pages"] +'</a>');
    $('.gallery').append('<img src="' + localStorage["images"] + '" />');
    $('.gallery').append('<p>' + localStorage["quotes"] + '</p>');
})