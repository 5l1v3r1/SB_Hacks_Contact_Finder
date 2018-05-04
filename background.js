chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'mail.google.com' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// Background message that will contain all the emails and send the data to the
// inject_to script
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // query the active tab, which will be only one tab
    //and inject the script in it
    var emailString = response;
    for (i = 0; i < 50; i++) {
      chrome.tabs.executeScript(tabs[0].id, {
          code: 'var emailString = ' + JSON.stringify(response)
      }, function() {
          chrome.tabs.executeScript(tabs[0].id, {file: 'inject_to.js'});
      });
    }
  });
});