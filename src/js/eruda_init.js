chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "eruda_toggle") {
		sendResponse({ success: true });
		if (document.getElementById('./src/js/eruda_toggle.js'))
			document.getElementById('./src/js/eruda_toggle.js').remove();
		addScriptToHead('./src/js/eruda_toggle.js');
	}
});
addScriptToHead('./src/js/eruda.min.js');
addScriptToHead('./src/js/eruda_toggle.js');
function addScriptToHead(url) {
	const script = document.createElement('script');
	script.id = url;
	script.src = chrome.extension.getURL(url);
	(document.head||document.documentElement).appendChild(script);
}
