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
			div.innerHTML = `<input type="checkbox" name="tbch" id="${id}"><label class="chk" for="${id}">${val}</label>`
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
