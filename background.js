// background script has access to all chrome.* APIs

// content script has access to the current webpage loaded in chrome
// background script does not have access to the current webpage loaded in chrome

// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function (tab) {
    
    // send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action_event", "url": chrome.extension.getURL("debug.css") });
    });
});
