import '../sass/index.sass'
import A11yDialog from 'a11y-dialog'
import { navbar } from './components/navbar'
import { themeManager } from './components/themeManager'
import { gotop } from './components/gotop'
import { pagesRoute } from './components/pagesRoute'
import { aos } from './components/aos'

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	const dialog_support = new A11yDialog(
		document.querySelector('#dlg_support')
	)
	new themeManager()
	new navbar()
	new gotop()
	new aos()
	new pagesRoute()
})
