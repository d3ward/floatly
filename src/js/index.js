import './css/main.css'
import { navbar } from './components/navbar'
import { themeManager } from './components/themeManager'
import { gotop } from './components/gotop'
import { pagesRoute } from './components/pagesRoute'
import { aos } from './components/aos'

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	new themeManager()
	new navbar()
	new gotop()
	new aos()
	new pagesRoute()
})
