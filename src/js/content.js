
function addStyle(css) {
    let head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head)return;
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 10;
    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
function openFS() {
    let fs = document.getElementById("ac4");
    if (fs.classList.contains("fullscreen")) {
        closeFullscreen();
        fs.classList.remove("fullscreen");
    } else {
        openFullscreen();
        fs.classList.add("fullscreen");
    }
}
function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {elem.requestFullscreen();} 
    else if (elem.webkitRequestFullscreen) {elem.webkitRequestFullscreen();} 
    else if (elem.msRequestFullscreen) {elem.msRequestFullscreen();}
    document.getElementById("fly").classList.remove("open");
}
function closeFullscreen() {
    if (document.exitFullscreen) {document.exitFullscreen();} 
    else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();} 
    else if (document.msExitFullscreen) {document.msExitFullscreen();}
    document.getElementById("fly").classList.remove("open");
}
function is_touch_device() {
    try {document.createEvent("TouchEvent");return true;} catch (e) {return false;}
}
function openB(){
    let flt=document.getElementById("fly"); 
    if(flt.classList.contains("open")) flt.classList.remove("open"); 
    else flt.classList.add("open");
}
function addScriptToHead(url) {
	const script = document.createElement('script');
	script.id = url;
	script.src = chrome.extension.getURL(url);
	document.head.appendChild(script);
}
var erudaS=false;
function erudaC(){
    if(erudaS) eruda.hide();
    else eruda.show();
    erudaS=!erudaS;
}

var acDivs = [
    '<div id="ac0"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac1"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg></div>',
    '<div id="ac2"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac3"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac4"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac5"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg></div>',
    '<div id="ac6"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg></div>',
    '<div id="ac7"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg></div>',
    '<div id="ac8"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac9"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac10"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg></div>',
    '<div id="ac11"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac12"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg></div>',
    '<div id="ac13"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac14"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac15"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac16"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg></div>',
    '<div id="ac17"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>',
    '<div id="ac18"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg></div>'
];

    var aFunctions = {
    ac0: function () {chrome.runtime.sendMessage({closeThis: true});},
    ac1: function () {window.open(window.location.href);},
    ac2: function () {scrollTo(document.documentElement, 0, 800);},
    ac3: function () {scrollTo(document.documentElement, document.body.clientHeight, 800);},
    ac4: function () {openFS();},
    ac5: function () {chrome.runtime.sendMessage({copyToClip: true});},
    ac6: function () {chrome.runtime.sendMessage({newTabInc: true});},
    ac7: function () {chrome.runtime.sendMessage({chromeURL: "chrome-native://bookmarks"});},
    ac8: function () {chrome.runtime.sendMessage({chromeURL: "chrome-native://downloads"});},
    ac9: function () {chrome.runtime.sendMessage({chromeURL: "chrome://flags"});},
    ac10: function () {chrome.runtime.sendMessage({chromeURL: "chrome://extensions"});},
    ac11: function () {chrome.runtime.sendMessage({chromeURL: "chrome://settings"});},
    ac12: function () {chrome.runtime.sendMessage({chromeURL: "chrome://newtab"});},
    ac13: function () {chrome.runtime.sendMessage({chromeURL: "chrome://history"});},
    ac14: function () {chrome.runtime.sendMessage({chromeURL: "view-source:" + window.location.href});},
    ac15: function () {window.location.reload();},
    ac16: function () {chrome.runtime.sendMessage({eruda: true})},
    ac17: function() {chrome.runtime.sendMessage({book:true,url:window.location.href ,title:document.title});},
    ac18: function() {try {navigator.share({url:window.location.href})} catch(err) {console.log(err)}}
};
chrome.runtime.onMessage.addListener(
    function(request, sender) {
      if(request.bookmarked!=undefined){
          if(request.bookmarked)document.getElementById("ac17").innerHTML='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
          else document.getElementById("ac17").innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>';
        }
    });
var splist,posf;
// Get use options and inject 
chrome.storage.local.get({
    colors: ["#0878A5", "#ffffff", "#0878A5", "#ffffff", "#101010"],
    actions: [0, 1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16],
    userActions: [],
    fpos:0,
    blist:["github.com"],
    splist:[1,2,3]
}, function (items) {
    let blist=items.blist;
    let curl=window.location.href;
    let blacklisted=true;
    splist=items.splist;
    for (var i = 0; i < blist.length; i++)if (curl.indexOf(blist[i]) > -1) blacklisted=false;
    if(blacklisted){
        let c = items.colors;
        let f=items.fpos;
        posf=f;
        let ua = items.userActions;
        if(ua.includes(17)>-1) chrome.runtime.sendMessage({book:"check",url:window.location.href});
        if(ua.includes(16)>-1)chrome.runtime.sendMessage({eruda: true});
        let innerString = '<div id="fly_btn"><svg id="svg1" fill="currentColor" width="23px" height="50px" viewBox="0 0 144 219"> <path id="pth1" fill="'+c[1]+'"  d="M 45.00,106.00 C 38.94,106.68 33.40,110.01 34.27,117.00 35.33,125.50 43.67,123.32 42.99,134.04 42.99,134.04 35.58,182.00 35.58,182.00 34.38,187.43 30.22,200.37 31.65,204.99 33.82,211.99 43.24,214.36 48.67,209.57 54.41,204.52 56.70,193.27 57.92,186.00 57.92,186.00 61.13,162.00 61.13,162.00 61.13,162.00 65.00,127.00 65.00,127.00 69.30,127.00 82.79,127.68 85.95,125.98 92.64,122.36 92.29,110.28 86.79,107.02 83.99,105.36 70.95,106.00 67.00,106.00 67.00,106.00 67.00,57.00 67.00,57.00 67.06,52.52 67.30,46.97 71.22,44.05 85.15,33.70 92.85,54.30 101.00,58.91 106.89,62.25 114.88,60.55 115.87,53.00 117.24,42.48 111.19,34.02 103.00,28.17 88.46,17.78 67.69,16.15 54.18,29.30 44.57,38.66 46.02,49.90 46.00,62.00 46.00,62.00 45.00,79.00 45.00,79.00 45.00,79.00 45.00,106.00 45.00,106.00 Z"/></svg><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div><div class="a_ib">';
        for (let i = 0; i < ua.length; i++) innerString += acDivs[ua[i]];
        innerString += '</div>';
        let content= document.createElement('div');
        content.innerHTML= '<style>#pth1{fill:'+c[1]+'!important;}#fly div svg{height:26px;color:'+c[3]+' !important}#fly{position:fixed;bottom:5px;'+((f==0)?"left":"right")+':5px;padding:0!important;width:50px;margin:0;height:50px;z-index: 1000000;}#fly_btn{position: absolute;z-index: 1000000;height:50px;width:50px;background-color: ' + c[0] + '!important; color:' + c[1] + '!important; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); user-select: none;display: flex;justify-content: center;align-items: center;}#fly_btn #svg1,#fly.open #fly_btn svg:nth-child(2){display:inline;}#ac4.fullscreen svg:nth-child(2),#ac4 svg:nth-child(1){display:inline;}#ac4.fullscreen svg:nth-child(1),#ac4 svg:nth-child(2){display:none;}#fly_btn svg:nth-child(2),#fly.open #fly_btn #svg1{display:none;}::-webkit-scrollbar{display: none;}.a_ib{position:absolute; text-align:'+((f)?"right;":"left;")+' white-space: nowrap; overflow-x: auto;padding:0!important;'+((f)?"right:0;":"")+' padding-'+((f==0)?"left":"right")+':54px !important; width: 0px; height: 50px;opacity:0; background-color:' + c[4] + '!important; border-radius:50px; box-shadow: 0px 5px 20px #101010; transition: all .2s ease-in-out;}.a_ib div{display: inline-flex;justify-content: center;align-items: center;width: 50px; height:50px;margin-left:4px;padding:0!important;background-color:' + c[2] + '!important;border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);}#fly.open{width:calc(100vw - 10px);}#fly.open .a_ib{opacity:1;width:calc(100vw - 62px);}</style>'+
            '<div id="fly">'+innerString+'</div>';
        //Add floatly
        document.body.appendChild(content);
        for (let i = 0; i < ua.length; i++)document.getElementById('ac' + ua[i]).onclick = function (event) {aFunctions[event.currentTarget.id]();};
        //Add Swipe on Floatly
        var fbtn = document.getElementById("fly_btn");
        fbtn.oncontextmenu= function(){aFunctions["ac"+splist[0]]();return false;}
        fbtn.onclick= function(){openB(); };
        if(is_touch_device()){
            fbtn.addEventListener("touchstart", startTouch, false);
            fbtn.addEventListener("touchmove", moveTouch, false);
            fbtn.addEventListener("touchend", endTouch, false);
        }
    }
});
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
var diffX =null;
var diffY =null;
var locked2=false;
var locked1=false;
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
function moveTouch(e) {
  let el=e.currentTarget;
  if (initialX === null || initialY === null)return;
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  diffX = initialX - currentX;
  diffY = initialY - currentY;
  if(locked1)diffY = 0;
  if(locked2)diffX = 0;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if((Math.abs(diffX) - Math.abs(diffY)) >10)locked1=true;
    if (diffX > 0 && diffX<135) {el.style.right = (Math.abs(diffX)) + 'px';} 
    else if(!posf && diffX> -135){ el.style.left = (Math.abs(diffX)) + 'px';}  
  } else { 
    if((Math.abs(diffY) - Math.abs(diffX)) >10)locked2=true;
    if (diffY > 0 && diffY < 135) { el.style.bottom = (Math.abs(diffY)) + 'px';} 
  }
  e.preventDefault();
}; 
function endTouch(e) {
    var el = e.currentTarget;
    locked1=locked2=false;
    if(posf)el.style.right = "0px";  else el.style.left = "0px"; 
    el.style.bottom = "0px";
    if (diffX > 130 || diffX < -130) aFunctions["ac"+splist[2]]();
    if(diffY > 130 )aFunctions["ac"+splist[1]]();
    diffX = null;
    diffY = null;
}