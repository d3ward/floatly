export class SwipeManager {
	constructor(selector, options = {}) {
		this.element = document.querySelector(selector)

		this.thresholds = {
			up: options.thresholds.up ?? 0,
			down: options.thresholds.down ?? 0,
			left: options.thresholds.left ?? 0,
			right: options.thresholds.right ?? 0,
		}

		this.callbacks = {
			up: options.onup ?? null,
			down: options.ondown ?? null,
			left: options.onleft ?? null,
			right: options.onright ?? null,
		}

		this.events = options.events || {
			start: 'mousedown',
			move: 'mousemove',
			end: 'mouseup',
		}
		this.movementThreshold = 5
		this.currentDirection = null
		this.dragging = false
		this.startX = 0
		this.startY = 0

		this.handleStart = this.handleStart.bind(this)
		this.handleMove = this.handleMove.bind(this)
		this.handleEnd = this.handleEnd.bind(this)

		this.element.addEventListener(this.events.start, this.handleStart, { passive: false })
		document.addEventListener(this.events.move, this.handleMove, { passive: false })
		document.addEventListener(this.events.end, this.handleEnd)
	}

	handleStart(event) {
		this.dragging = true
		this.startX
		this.startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX
		this.startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY
	}

	handleMove(event) {
		if (!this.dragging) return

		const currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX
		const currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY

		const deltaX = currentX - this.startX
		const deltaY = currentY - this.startY

		// Check if the movement exceeds the movement threshold
		if (Math.abs(deltaX) >= this.movementThreshold || Math.abs(deltaY) >= this.movementThreshold) {
			event.preventDefault()

			if (this.currentDirection === null) {
				if (Math.abs(deltaX) > Math.abs(deltaY)) {
					this.currentDirection = deltaX > 0 ? 'right' : 'left'
				} else {
					this.currentDirection = deltaY > 0 ? 'down' : 'up'
				}
			}

			const threshold = this.thresholds[this.currentDirection]

			let translationX = 0
			let translationY = 0

			if (this.currentDirection === 'left' || this.currentDirection === 'right') {
				translationX =
					this.currentDirection === 'left' ? Math.max(deltaX, -threshold) : Math.min(deltaX, threshold)
			} else {
				translationY =
					this.currentDirection === 'up' ? Math.max(deltaY, -threshold) : Math.min(deltaY, threshold)
			}

			this.element.style.transform = `translate(${translationX}px, ${translationY}px)`
		}
	}

	handleEnd(event) {
		if (!this.dragging) return

		let translationX = 0
		let translationY = 0

		const transformValues = this.element.style.transform.match(/-?\d+\.?\d*px/g)

		if (transformValues) {
			translationX = parseFloat(transformValues[0])
			translationY = parseFloat(transformValues[1])
		}

		let distance = 0
		if (this.currentDirection === 'left' || this.currentDirection === 'right') {
			distance = Math.abs(translationX)
		} else {
			distance = Math.abs(translationY)
		}

		if (distance >= this.thresholds[this.currentDirection] && this.callbacks[this.currentDirection]) {
			this.callbacks[this.currentDirection](event) // Add event parameter to callback
		}
		this.element.style.transform = ''

		this.dragging = false
		this.currentDirection = null
		this.startX = 0
		this.startY = 0
	}
}
