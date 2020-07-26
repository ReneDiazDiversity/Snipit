document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').addEventListener('click', onclick, false);
//     function onclick() {
//         chrome.tabs.query({currentWindow: true, active: true},
//         function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, 'THIS MESSAGE NO LONGER GETS DISPLAYED IN THE ALERT BOX: This is the new message that content.js displays when the:\n\n"This is what pops out when you click the extension logo in the Chrome menu bar."\n\nbutton is clicked.', setCount);
//         })
//     }
//     function setCount(res) {
//         const div = document.createElement('div');
//         div.textContent = `${res.count} occurrences`; // string interpolation
//         document.body.appendChild(div);
//     }
// }, false);


  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.targetText).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.targetText[url]}`
    document.body.appendChild(div)
  })
}, false)
