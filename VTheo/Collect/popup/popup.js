
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    $('.gallery').append('<div class="card"> <a target="_blank" href="' + localStorage["link"] + '">'+ localStorage["link"] +'</a>');
    $('.gallery').append('<p>' + localStorage["time"] + '</p>');
    $('.gallery').append('<a href="' + localStorage["pages"] + '">'+ localStorage["pages"] +'</a>');
    $('.gallery').append('<img src="' + localStorage["images"] + '" />');
    $('.gallery').append('<p>' + localStorage["quotes"] + '</p>');
})