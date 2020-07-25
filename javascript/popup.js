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


chrome.tabs.executeScript(
    {
        code: "window.getSelection().toString();"
    }, function(selection){
        console.log(selection[0]);
        if(selection [0].length > 0){
            document.getElementById('highlighted').value = selection[0]
        }
    }
)