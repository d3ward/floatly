chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install")
    chrome.runtime.openOptionsPage();
});
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.runtime.openOptionsPage();
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.book) {
    chrome.bookmarks.search(message.url, function (result) {
      var t=(result.length > 0);
      if (message.book != "check") {
        if (t) {
          chrome.bookmarks.remove(result[result.length - 1].id);
        } else {
          chrome.bookmarks.create({
            
            url: message.url,
            title: message.title
          });
        }
        t=!t;
      }
      chrome.tabs.sendMessage(sender.tab.id, {bookmarked: t});
    })

  }
  if (message.eruda) {
    chrome.tabs.sendMessage(sender.tab.id, {
      action: "eruda_toggle"
    }, (response) => {
      if (!response || !response.success) {
        chrome.runtime.lastError.message;
        chrome.tabs.executeScript(sender.tab.id, {
          file: './src/js/eruda_init.js'
        });
      }
    });
  }
  if (message.closeThis) chrome.tabs.remove(sender.tab.id);
  if (message.copyToClip) {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      var input = document.createElement('textarea');
      document.body.appendChild(input);
      input.value = tabs[0].url;
      input.focus();
      input.select();
      document.execCommand('Copy');
      input.remove();
    });
  }
  if (message.chromeURL) chrome.tabs.create({
    url: message.chromeURL
  });
  if (message.newTabInc)
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      chrome.windows.create({
        "url": tabs[0].url,
        "incognito": true
      });
    });
  if (message.settings)
    chrome.runtime.openOptionsPage();
});