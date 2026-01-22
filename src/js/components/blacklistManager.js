export class ItemManager {
	constructor(containerId) {
		this.containerId = containerId
	}

	generateID() {
		return Math.random().toString(36).substr(2, 9)
	}

	addToContainer(val) {
		if (val.length > 2) {
			const div = document.createElement('div')
			const id = this.generateID()
			const checkbox = document.createElement('input')
			checkbox.type = 'checkbox'
			checkbox.name = 'tbch'
			checkbox.id = id
			const label = document.createElement('label')
			label.className = 'chk'
			label.setAttribute('for', id)
			label.textContent = val
			div.appendChild(checkbox)
			div.appendChild(label)
			document.getElementById(this.containerId).prepend(div)
		}
	}

	removeFromContainer() {
		const container = document.getElementById(this.containerId)
		const items = container.querySelectorAll("input[name='tbch']:checked")
		items.forEach((item) => {
			item.parentElement.remove()
		})
	}
}
