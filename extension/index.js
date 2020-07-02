// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
    const tab = chrome.tabs.create({url: 'https://www.google.com/search?q=translate'}, function (newTab) {
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
            chrome.tabs.executeScript(null, { file: "script.js" });
        });
    });
});