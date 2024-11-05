function changeTextColor(color) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {textColor: color});
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "changeColor") {
        changeTextColor(request.color);
    }
});