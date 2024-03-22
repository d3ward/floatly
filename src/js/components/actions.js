function scrollTo(element, to, duration) {
	if (duration <= 0) return
	let difference = to - element.scrollTop
	let perTick = (difference / duration) * 10
	setTimeout(function () {
		element.scrollTop = element.scrollTop + perTick
		if (element.scrollTop === to) return
		scrollTo(element, to, duration - 10)
	}, 10)
}

export const a_func = {
	ct: function () {
		chrome.runtime.sendMessage({ closeThis: true })
	},
	ont: function () {
		chrome.runtime.sendMessage({ chromeURL: 'newtab' })
	},
	dt: function () {
		window.open(window.location.href)
	},
	stt: function (scroll_speed) {
		scrollTo(document.documentElement, 0, scroll_speed)
	},
	stb: function (scroll_speed) {
		scrollTo(document.documentElement, document.body.clientHeight, scroll_speed)
	},
	fs: function (callback) {
		callback()
	},
	ctu: function () {
		chrome.runtime.sendMessage({ copyToClip: true })
	},
	oui: function () {
		chrome.runtime.sendMessage({ newTabInc: true })
	},
	ob: function () {
		chrome.runtime.sendMessage({ chromeURL: 'chrome://bookmarks' })
	},
	od: function () {
		chrome.runtime.sendMessage({ chromeURL: 'chrome://downloads' })
	},
	of: function () {
		chrome.runtime.sendMessage({ chromeURL: 'chrome://flags' })
	},
	oe: function () {
		chrome.runtime.sendMessage({ chromeURL: 'chrome://extensions' })
	},
	os: function () {
		chrome.runtime.sendMessage({ chromeURL: 'chrome://settings' })
	},
	ohp: function (url) {
		chrome.runtime.sendMessage({ chromeURL: url })
	},
	oh: function () {
		chrome.runtime.sendMessage({ chromeURL: 'chrome://history' })
	},
	vsc: function () {
		chrome.runtime.sendMessage({ chromeURL: 'view-source:' + window.location.href })
	},
	rt: function () {
		window.location.reload()
	},
	bt: function () {
		chrome.runtime.sendMessage({ book: true, url: window.location.href, title: document.title })
	},
	st: function () {
		try {
			chrome.runtime.sendMessage({ shareURL: 'window.location.href' })
		} catch (err) {
			console.log(err)
			navigator.share({ url: window.location.href })
		}
	},
	gb: function () {
		window.history.back()
	},
}
