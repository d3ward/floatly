function initializeEruda() {
	eruda.init();
}
if (window.eruda) {
	if (!eruda._isInit) {
		initializeEruda();
	} else {
		const devTools = eruda._$el[0].querySelector('.eruda-dev-tools');
		if (devTools.offsetHeight > 0)
			eruda.hide();
		else
			eruda.show();
	}
} else {
	let readyStateCheckInterval = setInterval(function() {
		if (window.eruda) {
			clearInterval(readyStateCheckInterval);
			initializeEruda();
		}
	}, 40);
}
