export function navbar() {
	var t = this
	t.n = document.querySelector('nav')
	t.bo = document.body.style.overflow
	t.close = function () {
		t.bo = 'auto'
		t.n.classList.remove('active')
	}
	t.open = function () {
		t.bo = 'hidden'
		t.n.classList.add('active')
	}
	if (t.n) {
		document.querySelector('nav>button').addEventListener('click', function () {
			console.log('toggleNav')
			if (t.n.classList.contains('active')) t.close()
			else t.open()
		})
		document.querySelectorAll('nav ul > a').forEach((n) => n.addEventListener('click', t.close()))
	}
}
