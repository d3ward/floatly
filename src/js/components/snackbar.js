export function Snackbar(option) {
	const t = this
	t.snack = document.createElement('div')
	t.snack.className = 'snackbar'
	t.message = document.createElement('div')
	t.snack.appendChild(t.message)
	document.body.appendChild(t.snack)

	t.top = option.topPos
	t.classNames = option.classNames
	t.autoClose = true
	t.autoCloseTimeout = 3000

	let timeoutId // Variable to hold the timeout ID

	// Methods
	t.reset = function () {
		t.message.innerHTML = ''
	}

	t.show = function (msg) {
		t.hide()
		t.message.innerHTML = msg
		t.snack.style.top = t.top

		if (t.autoClose) {
			clearTimeout(timeoutId) // Clear any existing timeout
			timeoutId = setTimeout(function () {
				t.hide()
			}, t.autoCloseTimeout)
		}
	}

	t.hide = function () {
		t.snack.style.top = '-100%'
		t.reset()
	}
}
