// content.js => a JavaScript file that runs in the context of web pages.

// Content scripts have some limitations.
// They cannot use chrome.* APIs, with the exception of extension, i18n, runtime, and storage.

var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log("First Href: " + firstHref);

// listen to the arbitrary JSON payload sent by background script
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action_event") {
            var firstHref = $("a[href^='http']").eq(0).attr("href");
            console.log("First Href from the listener: " + firstHref);

            // send the URL to background.js so that it could open it in a new tab
            // content script cannot open new tabs
            chrome.runtime.sendMessage({ "message": "open_new_tab_event", "url": firstHref });
        }
    }
);
