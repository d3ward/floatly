export function getEventListeners() {
	const isTouchDevice = 'ontouchstart' in window

	const events = {
		start: isTouchDevice ? 'touchstart' : 'mousedown',
		move: isTouchDevice ? 'touchmove' : 'mousemove',
		end: isTouchDevice ? 'touchend' : 'mouseup',
	}

	return events
}
export function generateID() {
	return '_' + Math.random().toString(36).substr(2, 5)
}
