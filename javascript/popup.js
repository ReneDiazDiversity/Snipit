document.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementById('button');
    button.addEventListener('click', function(){
        addLink();
    })
});

function addLink(){
    let queryInfo ={
        currentWindow: true,
        active: true
    };

    chrome.tabs.query(queryInfo, function(tabs){
        let url = tabs[0].url;
        let urlOutput = document.getElementById('urlOutput')
        urlOutput.innerHTML = url;
    })
}