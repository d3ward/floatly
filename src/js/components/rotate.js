//fab_radial rotate events
export const rotate = (EL, ev_li) => {
	let ang = 0
	let angStart = 0
	let isStart = false

	const angXY = (ev) => {
		const bcr = EL.getBoundingClientRect()
		const radius = bcr.width / 2
		const { clientX, clientY } = ev.touches ? ev.touches[0] : ev
		const y = clientY - bcr.top - radius
		const x = clientX - bcr.left - radius
		return Math.atan2(y, x)
	}

	const mousedown = (ev) => {
		isStart = true
		angStart = angXY(ev) - ang
	}

	const mousemove = (ev) => {
		if (!isStart) return
		ev.preventDefault()
		ang = angXY(ev) - angStart
		EL.style.transform = `rotateZ(${ang}rad)`

		const childAng = (ang / (2 * Math.PI)) * 360 // change from negative to positive
		const children = EL.querySelectorAll('#fab_r_cnt > div')
		children.forEach((child) => {
			child.style.transform = `rotateZ(${-childAng}deg)`
		})
	}

	const mouseup = () => {
		isStart = false
	}

	EL.addEventListener(ev_li['start'], mousedown, { passive: false })
	document.addEventListener(ev_li['move'], mousemove, { passive: false })
	document.addEventListener(ev_li['end'], mouseup, { passive: false })
}
