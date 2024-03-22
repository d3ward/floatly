import actions from '../data/actions.json'
import { BottomSheet } from './components/bottomsheet'
import { SwipeManager } from './components/swipeManager'
import { Snackbar } from './components/snackbar'
import { getEventListeners } from './components/utilities'
import { rotate } from './components/rotate'
import { a_func } from './components/actions'
const fab_css = require('../css/fab/fab.css').toString()
const fab_h_css = require('../css/fab/fab_h.css').toString()
const fab_r_css = require('../css/fab/fab_r.css').toString()
const fab_s_css = require('../css/fab/fab_s.css').toString()
var snackbar = new Snackbar({
	topPos: '10px',
	classNames: 'success',
})
var ev_li = getEventListeners()
var actions_icon_div = {}
for (var key in actions) {
	var value = actions[key]
	actions_icon_div[key] =
		'<div data-id="' + key + '" role="button" aria-label="' + value.name + '">' + value.icon + '</div>'
}
function toggleFS() {
	const fs = document.querySelector('.fab_cnt>[data-id="fs"]')
	const isFullscreen = fs.classList.contains('fullscreen')

	if (isFullscreen) {
		snackbar.show('Exit fullscreen mode')
		const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen

		if (exitFullscreen) {
			exitFullscreen.call(document)
		}
		fs.classList.remove('fullscreen')
	} else {
		const elem = document.documentElement
		const requestFullscreen = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen

		if (requestFullscreen) {
			requestFullscreen.call(elem)
		}
		fs.classList.add('fullscreen')
		snackbar.show('Enable fullscreen mode')
	}
}

// Function to handle fullscreen change event
function handleFullscreenChange() {
	const fs = document.querySelector('.fab_cnt>[data-id="fs"]')
	if (fs) {
		const isFullscreen =
			document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement

		if (isFullscreen) {
			fs.classList.add('fullscreen')
		} else {
			fs.classList.remove('fullscreen')
		}
	}
}

// Event listener for fullscreen change event
document.addEventListener('fullscreenchange', handleFullscreenChange)
document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
document.addEventListener('msfullscreenchange', handleFullscreenChange)
function enableAutoHideOnScroll(s, f, fb) {
	var prevScrollpos = window.pageYOffset
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset
		if (prevScrollpos > currentScrollPos) {
			document.getElementById(s).style.bottom = f
		} else {
			document.getElementById(s).style.bottom = fb
		}
		prevScrollpos = currentScrollPos
	}
}
var splist, posf
// Get use options and inject
chrome.storage.local.get(
	{
		style: 'fab',
		colors: ['#0878A5', '#ffffff', '#0878A5', '#ffffff', '#ffffff', '#101010', '#101010', '#0878A5', '#ffffff'],
		fab_actions: [],
		bab_actions: [],
		fab_style: 'horizontal',
		fab_pos: { x: '20px', y: '20px' },
		options: {
			scroll_hide: false,
			scroll_speed: 800,
			home_url: 'chrome://newtab',
		},
		blacklist: ['github.com', 'youtube.com'],
		swipe_actions: ['0', '0', '0', '0', '0'],
	},
	function (items) {
		let blist = items.blacklist
		let curl = window.location.href
		for (var b = 0; b < blist.length; b++) if (curl.indexOf(blist[b]) > -1) return
		//Set colors
		for (var i = 0; i < items.colors.length; i++) document.body.style.setProperty('--ftlcl' + i, items.colors[i])
		//Set fab position
		document.body.style.setProperty('--fab-y', items.fab_pos['y'])
		document.body.style.setProperty('--fab-x', items.fab_pos['x'])

		//General configuration
		var fab_html = ''
		var home_url = items.options['home_url']
		var scroll_speed = items.options['scroll_speed']
		var scroll_hide = items.options['scroll_hide']
		const sa = items.swipe_actions
		if (items.style == 'fab') {
			const SM_options = {
				events: ev_li,
				thresholds: {
					up: sa[1] != '0' ? 50 : 0,
					down: sa[2] != '0' ? 50 : 0,
					right: sa[3] != '0' ? 50 : 0,
					left: sa[4] != '0' ? 50 : 0,
				},
				onup: () => sa[1] != '0' && a_func[sa[1]],
				ondown: () => sa[2] != '0' && a_func[sa[2]],
				onright: () => sa[3] != '0' && a_func[sa[3]],
				onleft: () => sa[4] != '0' && a_func[sa[4]],
			}
			const fa = items.fab_actions
			const f_style = items.fab_style
			const f_icon =
				'<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 375 375"><path fill-opacity=".778" d="M88.145 344.395c.635-.034.01-.016-.016.039 55.687-.237 82.908-79.477 82.156-106.913l-.477-84.963c.504-13.136.047-27.086.047-40.261-33.154-1.467-75.592 31.933-81.458 66.23 0 0 8.747 150.07-.252 165.868z"/><path d="m90.45 216.65 1.32 58.446c18.794-22.983 48.96-40.274 77.798-44.567 95.996-9.51 95.878-57.47 94.727-76.747-16.568 6.26-56.987-8.573-94.301 0-41.389 8.484-74.504 47.715-79.543 62.868zm208.732-181.1c-21.638 7.432-82.703-11.041-128.245 0-45.542 11.04-88.642 73.618-82.54 142.977 10.616-29.708 59.812-64.162 81.457-66.23 127.386-4.045 128.283-49.094 129.328-76.748z"/></svg>'

			for (let f = 0; f < fa.length; f++) if (actions_icon_div[fa[f]]) fab_html += actions_icon_div[fa[f]]
			if (f_style == 'horizontal') {
				//Inject fab html
				let content = document.createElement('div')
				content.innerHTML =
					'<style>' +
					fab_css +
					fab_h_css +
					'</style>' +
					'<div id="fab_h" class="fab_wrap"><div id="fab_h_btn" class="fab_btn">' +
					f_icon +
					'</div><div id="fab_h_cnt" class="fab_cnt">' +
					fab_html +
					'</div></div>'
				document.body.appendChild(content)
				new SwipeManager('#fab_h_btn', SM_options)
			} else if (f_style == 'radial') {
				//Inject fab html
				let content = document.createElement('div')
				content.innerHTML =
					'<style>' +
					fab_css +
					fab_r_css +
					'</style>' +
					'<div id="fab_r" class="fab_wrap"><div class="fab_cnt" id="fab_r_cnt">' +
					fab_html +
					'</div><div id="fab_r_btn" class="fab_btn">' +
					f_icon +
					'</div></div>'
				document.body.appendChild(content)
				//Set actions
				const u = document.querySelectorAll('#fab_r_cnt > *')
				let l = u.length
				if (l < 6) l = l * 4 - 5
				if (l > 18) l = 18
				u.forEach((el, i) => {
					const z = (50 - 40 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4)
					const t = (50 + 40 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4)
					const ang = 2 * (1 / l) * i * Math.PI
					const childAng = (ang / (2 * Math.PI)) * 360 // Calculate initial rotation angle for the child
					el.style.left = `${z}%`
					el.style.top = i < 19 ? `${t}%` : `calc(${t}% + 50px)`
					el.style.transform = `rotateZ(${-ang}rad) rotateZ(${childAng}deg)` // Apply initial rotation to the icon
				})
				rotate(document.getElementById('fab_r_cnt'), ev_li)
				new SwipeManager('#fab_r_btn', SM_options)
			} else if (f_style == 'sheet') {
				//Inject fab html
				let content = document.createElement('div')
				content.innerHTML =
					'<style>' +
					fab_css +
					fab_s_css +
					'</style>' +
					'<div id="fab_s" class="fab_wrap"><div id="fab_s_btn" class="fab_btn">' +
					f_icon +
					'</div><div id="fab_s_bs" class="bottom-sheet"><div class="bs-scrim"></div><div class="bs-sheet"><div class="bs-handle"><span></span></div><div class="bs-cnt grid"><div id="fab_s_cnt" class="fab_cnt" >' +
					fab_html +
					'</div></div><div class="bs-footer">Close</div></div></div></div>'
				document.body.appendChild(content)
				new SwipeManager('#fab_s_btn', SM_options)
				const bottomSheet = new BottomSheet('#fab_s_bs', {
					threshold: 50,
					eventMap: ev_li,
				})
				document.getElementById('fab_s_btn').addEventListener('click', () => {
					bottomSheet.show()
				})
			}
			if (scroll_hide) {
				enableAutoHideOnScroll('fly', 'calc(-125px + ' + posf[0] + ')', 'calc(-200px + ' + posf[0] + ')')
			}
			const f_btn = document.querySelector('.fab_btn')
			f_btn.addEventListener('click', () => {
				console.log('Single click on fab')
				let flt = f_btn.parentNode
				if (flt.classList.contains('open')) flt.classList.remove('open')
				else flt.classList.add('open')
			})
			f_btn.addEventListener('contextmenu', function (event) {
				event.preventDefault()
				//snackbar.show(actions[el.dataset['id']].name)
				snackbar.show('Long click action')
			})

			document.querySelectorAll('.fab_cnt>*').forEach((el) => {
				el.addEventListener('click', () => {
					if (el.dataset['id'] != 'bt' || el.dataset['id'] != 'bt')
						snackbar.show(actions[el.dataset['id']].name)
					if (el.dataset['id'] == 'stt' || el.dataset['id'] == 'stb') a_func[el.dataset['id']](scroll_speed)
					else if (el.dataset['id'] == 'fs') a_func[el.dataset['id']](toggleFS)
					else if (el.dataset['id'] == 'ohp') a_func[el.dataset['id']](home_url)
					else a_func[el.dataset['id']]()
				})
			})

			if (document.querySelector('.fab_cnt>[data-id="bt"]'))
				chrome.runtime.sendMessage({ book: 'check', url: window.location.href, title: document.title })
			if (items.options['opt0']) {
				enableAutoHideOnScroll('fly', posf[0], 'calc(-60px + ' + posf[0] + ')')
			}
		} else {
			const ba = items.bab_actions
			for (let f = 0; f < ba.length; f++) if (actions_icon_div[ba[f]]) fab_html += actions_icon_div[ba[f]]
			let content = document.createElement('div')
			content.innerHTML =
				'<style>.bab{display:flex;width:100%;margin:auto;height:50px;align-items:center;justify-content:space-evenly;border-radius:0;background:var(--ftlcl7);position:fixed;bottom:0;left:0;z-index:999}.bab>div{position:relative;display:inline-flex;justify-content:center;align-items:center;width:46px;flex:0 0 auto;height:46px;padding:0 !important;text-decoration:none;color:var(--ftlcl8)}</style>' +
				'<div class="bab" id="bab">' +
				fab_html +
				'</div>'
			document.body.appendChild(content)
			document.querySelectorAll('#bab>*').forEach((el) => {
				el.addEventListener('click', () => {
					console.log(el.dataset['id'])
				})
			})
			if (items.options['scroll_hide']) {
				enableAutoHideOnScroll('bab', 0, '-50px')
			}
		}
		//Check if current url is bookmarked
		//if (ua.includes(17) > -1) chrome.runtime.sendMessage({ book: 'check', url: window.location.href })
	},
)
chrome.runtime.onMessage.addListener(function (request, sender) {
	if (request.bookmarked != undefined) {
		let bt = document.querySelector('.fab_cnt>[data-id="bt"]')
		if (bt)
			if (request.bookmarked) {
				bt.classList.add('bookmark')
				snackbar.show(actions['bt'].name)
			} else {
				bt.classList.remove('bookmark')
				snackbar.show('Removed bookmark')
			}
	}
})
