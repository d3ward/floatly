export class BottomSheet {
	constructor(selector, options = {}) {
		this.bottomSheet = document.querySelector(selector)
		this.activeClass = 'active'
		this.options = {
			threshold: options.threshold || 100,
			eventMap: options.eventMap || {
				start: 'mousedown',
				move: 'mousemove',
				end: 'mouseup',
			},
		}
		this.init()
	}

	init() {
		this.bottomSheet
			.querySelector('.bs-handle')
			.addEventListener(this.options.eventMap.start, this.startDrag.bind(this), { passive: false })
		this.bottomSheet.querySelector('.bs-scrim').addEventListener('click', this.hide.bind(this), { passive: false })
		this.bottomSheet.querySelector('.bs-footer').addEventListener('click', this.hide.bind(this), { passive: false })
	}

	startDrag(event) {
		event.preventDefault()
		navigator.vibrate(100)
		const initialY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY
		let currentY = initialY

		const onMove = (moveEvent) => {
			moveEvent.preventDefault()
			currentY = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientY : moveEvent.clientY
			const offsetY = initialY - currentY
			console.log(offsetY)
			if (offsetY < 40) {
				var m = '' + offsetY * -1
				if (offsetY > 0) m = '-' + offsetY
				if (offsetY * -1 >= this.options.threshold) navigator.vibrate(100)
				this.bottomSheet.querySelector('.bs-sheet').style.transform = `translateY(${m}px)`
			}
		}

		const onEnd = (endEvent) => {
			endEvent.preventDefault()
			navigator.vibrate(100)
			const offsetY = initialY - currentY

			if (offsetY * -1 >= this.options.threshold) {
				this.hide()
			} else {
				this.show()
			}

			document.removeEventListener(this.options.eventMap.move, onMove)
			document.removeEventListener(this.options.eventMap.end, onEnd)
		}

		document.addEventListener(this.options.eventMap.move, onMove, { passive: false })
		document.addEventListener(this.options.eventMap.end, onEnd, { passive: false })
	}

	show() {
		this.bottomSheet.classList.add(this.activeClass)
		this.bottomSheet.querySelector('.bs-sheet').style.transform = 'translateY(0)'
	}

	hide() {
		this.bottomSheet.classList.remove(this.activeClass)
		this.bottomSheet.querySelector('.bs-sheet').style.transform = 'translateY(100%)'
	}
}
