document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'changeTextColor') {
            document.body.style.color = request.color;
        }
    });
});