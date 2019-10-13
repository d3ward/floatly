chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install")
    chrome.runtime.openOptionsPage();
});
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.runtime.openOptionsPage();
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
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
  if(message.chromeURL) chrome.tabs.create({ url: message.chromeURL });
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