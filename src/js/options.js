import Sortable from 'sortablejs'
import Picker from 'vanilla-picker'
//import '../css/options.css'
import actions from '../data/actions.json'
import A11yDialog from 'a11y-dialog'
import '../sass/options.sass'
import { themeManager } from './components/themeManager'
import { openFullscreen, closeFullscreen } from './components/fullscreen'
import { getEventListeners, generateID } from './components/utilities'
import { BottomSheet } from './components/bottomsheet'
import { dragElement } from './components/dragElement'
import { SwipeManager } from './components/swipeManager'
import { aos } from './components/aos'
import { rotate } from './components/rotate'
import { ItemManager } from './components/blacklistManager'

const clvn_dialog = new A11yDialog(document.querySelector('#dlg_clvn'))
const itemManager = new ItemManager('tbtb')
var ev_li = getEventListeners()
var actions_name = { null: 'None' }
var actions_icon_div = {}
var actions_options = ['<option value="0">None</option>']

for (var key in actions) {
	var value = actions[key]
	actions_icon_div[key] =
		'<div data-id="' + key + '" role="button" aria-label="' + value.name + '">' + value.icon + '</div>'
	actions_name[key] = value.name
	actions_options.push('<option value="' + key + '">' + value.name + '</option>')
}
for (let j = 0; j < 5; j++) {
	document.getElementById('sa-' + j).innerHTML = actions_options
	document.getElementById('sa-' + j).value = null
}
for (let j = 0; j < 6; j++) {
	document.getElementById('bb_sa-' + j).innerHTML = actions_options
	document.getElementById('bb_sa-' + j).value = null
}

/* ----- Initialize bottom sheet component ---- */

const bottomSheet = new BottomSheet('#fab_s_bs', {
	threshold: 50,
	eventMap: ev_li,
})
document.getElementById('fab_s_btn').addEventListener('click', () => {
	bottomSheet.show()
})
const SM_options = {
	events: ev_li,
	thresholds: {
		up: 50,
		down: 50,
		left: 50,
		right: 50,
	},
	onup: () => console.log('User swiped up!'),
	ondown: () => console.log('User swiped down!'),
	onleft: () => console.log('User swiped left!'),
	onright: () => console.log('User swiped right!'),
}
const fhb = new SwipeManager('#fab_h_btn', SM_options)
const frb = new SwipeManager('#fab_r_btn', SM_options)
const fsb = new SwipeManager('#fab_s_btn', SM_options)
/* ============================================ */
/*               Save User Config               */
/* ============================================ */
function save_options() {
	var colors = [],
		bab_actions = [],
		fab_actions = [],
		blacklist = [],
		swipe_actions = [],
		fab_pos = {}
	var style = document.querySelector('input[name="f-style"]:checked').value
	var tbtb = document.querySelectorAll('#tbtb>div')
	var options = {
		scroll_hide: document.getElementById('scroll_hide').checked,
		scroll_speed: document.getElementById('scroll_speed').value,
		home_url: document.getElementById('home_url').value,
	}
	//Get colors
	for (var i = 0; i < 9; i++) colors.push(getComputedStyle(document.body).getPropertyValue('--ftlcl' + i))
	//Blacklist
	for (let i = 0; i < tbtb.length; i++) blacklist.push(tbtb[i].textContent)

	if (style == 'fab') {
		var uc = document.getElementById('uv').querySelectorAll('div')
		fab_pos['y'] = getComputedStyle(document.body).getPropertyValue('--fab-y')
		fab_pos['x'] = getComputedStyle(document.body).getPropertyValue('--fab-x')
		var fab_style = document.getElementById('fab_style').value
		for (var a = 0; a < uc.length; a++) fab_actions.push(uc[a].getAttribute('data-id'))
		for (let j = 0; j < 5; j++) swipe_actions.push(document.getElementById('sa-' + j).value)
		chrome.storage.local.set(
			{
				style: style,
				colors: colors,
				fab_actions: fab_actions,
				fab_pos: fab_pos,
				options: options,
				fab_style: fab_style,
				blacklist: blacklist,
				swipe_actions: swipe_actions,
			},
			function () {
				alert(
					'Options saved.<br>Remember to reload the page where the Floatly is used to update the style and actions',
				)
			},
		)
	} else {
		for (let j = 0; j < 6; j++) bab_actions.push(document.getElementById('bb_sa-' + j).value)
		chrome.storage.local.set(
			{
				style: style,
				colors: colors,
				blacklist: blacklist,
				options: options,
				bab_actions: bab_actions,
			},
			function () {
				alert('Options saved.<br>Remember to reload the page where the bottom Bar is used to update actions')
			},
		)
	}
}
//Add fab listeners

document.querySelectorAll('.fab_btn').forEach((el) => {
	el.addEventListener('click', () => {
		console.log('Single click on fab')
		let flt = el.parentNode
		if (flt.classList.contains('open')) flt.classList.remove('open')
		else flt.classList.add('open')
	})
	el.oncontextmenu = () => {
		console.log('Long click on fab')
	}
})

//Add rotate event listenter on fab_radial
rotate(document.getElementById('fab_r_cnt'), ev_li)
/* ============================================ */
function setup_preview(style, f_style) {
	var stf = document.querySelector('.f-preview.show')
	if (stf != undefined) stf.classList.remove('show')
	if (style == 'fab') {
		if (f_style == 'horizontal') {
			console.log('fab-horizontal')
			//Set actions
			document.getElementById('fab_h_cnt').innerHTML = document.querySelector('#uv').innerHTML
			//Show floatly preview
			document.getElementById('f-1').classList.add('show')
		} else if (f_style == 'radial') {
			document.querySelector('#fab_r_cnt').innerHTML = document.querySelector('#uv').innerHTML
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
			document.getElementById('f-2').classList.add('show')
		} else if (f_style == 'sheet') {
			document.getElementById('fab_s_cnt').innerHTML = document.querySelector('#uv').innerHTML
			document.getElementById('f-3').classList.add('show')
		}
		document.querySelectorAll('.f-preview.show .fab_cnt>*').forEach((el) => {
			el.addEventListener('click', () => {
				console.log(el.dataset['id'])
			})
		})
	} else {
		var list = []
		for (let j = 0; j < 6; j++) list.push(document.getElementById('bb_sa-' + j).value)
		var actions = ''
		for (let j = 0; j < list.length; j++) {
			let k = list[j]
			let aic = actions_icon_div[k]
			if (aic != undefined && aic) {
				actions += aic
			}
		}
		document.getElementById('bab').innerHTML = actions
		document.getElementById('f-4').classList.add('show')
		document.querySelectorAll('#bab>*').forEach((el) => {
			el.addEventListener('click', () => {
				console.log(el.dataset['id'])
			})
		})
	}
}

/* ============================================ */
/*              Restore User Config             */
/* ============================================ */
function restore_options() {
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
			let av = ' ',
				uv = ' '
			const fab_style = items.fab_style,
				style = items.style,
				colors = items.colors,
				bab_actions = items.bab_actions,
				fab_actions = items.fab_actions,
				blacklist = items.blacklist,
				fab_pos = items.fab_pos,
				swipe_actions = items.swipe_actions,
				options = items.options

			//Set fab swipe actions
			for (let j = 0; j < 5; j++)
				document.getElementById('sa-' + j).value = swipe_actions[j] ? swipe_actions[j] : null
			//Set fab actions
			for (var k in actions_icon_div) {
				if (!fab_actions.includes(k)) {
					av += actions_icon_div[k]
				}
			}
			for (var f = 0; f < fab_actions.length; f++) uv += actions_icon_div[fab_actions[f]]
			//Set available actions and user actions
			document.getElementById('av').innerHTML = av
			document.getElementById('uv').innerHTML = uv

			//Set home url
			document.getElementById('home_url').value = options['home_url']
			//Set on scroll hide
			document.getElementById('scroll_hide').checked = options['scroll_hide']
			//Set scroll speed with slider
			const ss = document.getElementById('scroll_speed')
			const ssv = document.getElementById('scroll_speed_v')
			var ss_v = options['scroll_speed']
			ssv.innerText = ss_v
			ss.value = ss_v
			ss.addEventListener('input', function () {
				ssv.innerText = parseInt(ss.value)
			})
			//Set fab style
			document.getElementById('fab_style').value = fab_style

			//Set bab actions
			for (let j = 0; j < 6; j++) {
				var el = document.getElementById('bb_sa-' + j)
				el.value = bab_actions[j] ? bab_actions[j] : null
				el.onchange = () => {
					setup_preview('bab', fab_style, bab_actions)
				}
			}
			//Set fab position
			document.body.style.setProperty('--fab-y', fab_pos['y'])
			document.body.style.setProperty('--fab-x', fab_pos['x'])
			//Set Floatly style
			if (items.style == 'fab') {
				document.getElementById('tb2-1').checked = true
				setup_preview(style, fab_style)
			} else {
				document.getElementById('tb2-2').checked = true
				setup_preview(style, fab_style, bab_actions)
			}

			for (var i = 0; i < 7; i++) document.body.style.setProperty('--ftlcl' + i, colors[i])
			for (let i = 0; i < blacklist.length; i++) itemManager.addToContainer(blacklist[i])
		},
	)

	dragElement(document.getElementById('mm_move'))
	/* ============================================ */
	/*                Sortable Config               */
	/* ============================================ */
	new Sortable(document.getElementById('av'), {
		group: 'shared',
		animation: 150,
		ghostClass: 'av_ghost',
		chosenClass: 'av_chosen',
		sort: false,
		onChoose: function (evt) {
			document.getElementById('sv').innerHTML = actions_name[evt.item.dataset.id]
			setup_preview('fab', document.getElementById('fab_style').value)
		},
	})
	new Sortable(document.getElementById('uv'), {
		group: 'shared',
		animation: 150,
		onChoose: function (evt) {
			document.getElementById('sv').innerHTML = actions_name[evt.item.dataset.id]
		},
		onAdd: function () {
			setup_preview(
				document.getElementById('tb2-1').checked == true ? 'fab' : 'bab',
				document.getElementById('fab_style').value,
			)
		},
	})
	/* ============================================ */
}

/* ============================================ */
/*              Config Color Picker             */
/* ============================================ */

clvn_dialog.on('show', () => {
	document.body.style.overflow = 'hidden'
})
clvn_dialog.on('hide', () => {
	document.body.style.overflow = ''
})

let current_color, t_current_color

var picker = new Picker({
	parent: document.querySelector('#cp_v'),
	popup: false,
})
picker.onChange = (color) => {
	current_color = color.rgbaString
}
// Reset the color value when clicking the cancel/close button
document.getElementById('cancel-button').addEventListener('click', () => {
	picker.setColor('transparent', true)
	current_color = null
})

// Log the color value when clicking the OK button
document.getElementById('ok-button').addEventListener('click', () => {
	document.body.style.setProperty('--ftlcl' + t_current_color, current_color)
	clvn_dialog.hide()
})
function f_cp_rgb(t) {
	t_current_color = t
	let color = getComputedStyle(document.body).getPropertyValue('--ftlcl' + t)
	picker.setColor(color, true)
	clvn_dialog.show()
}
/* ============================================ */

document.addEventListener('DOMContentLoaded', () => {
	restore_options()
	new themeManager()
	new aos()
	const elements = document.querySelectorAll('.stt_clfrt')
	elements.forEach((el, index) => {
		el.addEventListener('click', function () {
			f_cp_rgb(index)
		})
	})
	document.getElementById('save').addEventListener('click', save_options)
	//Exit from custom fab position mode
	document.getElementById('mm_exit').addEventListener('click', () => {
		document.getElementById('mm_bg').classList.remove('show')
		document.getElementById('mm_move').style.display = 'none'
		closeFullscreen()
	})
	//Reset custom fab postion to default
	document.getElementById('mm_reset').addEventListener('click', () => {
		document.body.style.setProperty('--fab-y', '20px')
		document.body.style.setProperty('--fab-x', '20px')
	})
	//Enable custom fab position mode
	document.querySelector('#mm_btn').addEventListener('click', () => {
		openFullscreen()
		document.getElementById('mm_bg').classList.add('show')
		document.getElementById('mm_move').style.display = 'flex'
	})
	document.getElementById('tb2-1').onchange = () => {
		setup_preview('fab', document.getElementById('fab_style').value)
	}
	document.getElementById('tb2-2').onchange = () => {
		setup_preview('bab')
	}
	document.getElementById('fab_style').onchange = () => {
		setup_preview('fab', document.getElementById('fab_style').value)
	}

	//Blacklist Manager
	document.getElementById('b-tb').onclick = function () {
		itemManager.addToContainer(document.getElementById('i-tb').value)
	}
	document.getElementById('d-tb').onclick = function () {
		itemManager.removeFromContainer()
	}
})
