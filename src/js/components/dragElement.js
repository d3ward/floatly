export function dragElement(el) {
	let startPosX = 0,
		startPosY = 0

	function mouseMove(e) {
		const { clientX, clientY } = e.touches ? e.touches[0] : e
		const newPosX = startPosX - clientX
		startPosX = clientX
		startPosY = clientY

		document.body.style.setProperty('--fab-y', `${screen.height - startPosY - 25}px`)
		document.body.style.setProperty('--fab-x', `${el.offsetLeft - newPosX}px`)
	}

	el.addEventListener('mousedown', function (e) {
		e.preventDefault()
		startPosX = e.clientX
		startPosY = e.clientY

		document.addEventListener('mousemove', mouseMove)
		document.addEventListener('mouseup', function () {
			document.removeEventListener('mousemove', mouseMove)
		})
	})

	el.addEventListener('touchstart', function (e) {
		e.preventDefault()
		const { clientX, clientY } = e.touches[0]
		startPosX = clientX
		startPosY = clientY

		document.addEventListener('touchmove', mouseMove)
		document.addEventListener('touchend', function () {
			document.removeEventListener('touchmove', mouseMove)
		})
	})
}
