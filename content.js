// content.js => a JavaScript file that runs in the context of web pages.

// Content scripts have some limitations.
// They cannot use chrome.* APIs, with the exception of extension, i18n, runtime, and storage.

// listen to the arbitrary JSON payload sent by background script
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const id = "debugcss";

        if (request.message === "clicked_browser_action_event") {
            // Check if debug.css is already applied and toggle it.
            if (document.getElementById(id)) {
                // Found => remove it.
                var element = document.getElementById(id);
                element.parentNode.removeChild(element);
            } else {
                // Not found => add it.
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = request.url;
                link.id = "debugcss";
                document.getElementsByTagName("head")[0].appendChild(link);
            }
        }
    }
);
