export function openFullscreen() {
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	}
}
export function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen()
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen()
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen()
	}
}
