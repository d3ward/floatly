chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "eruda_toggle") {
		sendResponse({ success: true });
		if (document.getElementById('eruda_toggle.js'))
			document.getElementById('eruda_toggle.js').remove();
		addScriptToHead('eruda_toggle.js');
	}
});
addScriptToHead('eruda.min.js');
addScriptToHead('eruda_toggle.js');
function addScriptToHead(url) {
	const script = document.createElement('script');
	script.id = url;
	script.src = chrome.extension.getURL(url);
	(document.head||document.documentElement).appendChild(script);
}
