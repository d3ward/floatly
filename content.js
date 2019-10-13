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
var acDivs = [
    '<div id="ac0"><i class="far fa-window-close"></i></div>',
    '<div id="ac1"><i class="far fa-clone"></i></div>',
    '<div id="ac2"><i class="fas fa-arrow-up"></i></div>',
    '<div id="ac3"><i class="fas fa-arrow-down"></i></div>',
    '<div id="ac4"><i class="fas fa-expand-arrows-alt"></i><i class="fas fa-compress-arrows-alt"></i></div>',
    '<div id="ac5"><i class="far fa-clipboard"></i></div>',
    '<div id="ac6"><i class="fas fa-user-secret"></i></div>',
    '<div id="ac7"><i class="fas fa-bookmark"></i></div>',
    '<div id="ac8"><i class="fas fa-download"></i></div>',
    '<div id="ac9"><i class="fas fa-flag"></i></div>',
    '<div id="ac10"><i class="fas fa-puzzle-piece"></i></div>',
    '<div id="ac11"><i class="fas fa-cog"></i></div>',
    '<div id="ac12"><i class="fas fa-home"></i></div>',
    '<div id="ac13"><i class="fas fa-history"></i></div>',
    '<div id="ac14"><i class="fas fa-code"></i></div>',
    '<div id="ac15"><i class="fas fa-redo"></i></div>'];
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
    ac15: function () {window.location.reload();}};
var splist,posf;
// Get use options and inject 
chrome.storage.local.get({
    colors: ["#0878A5", "#ffffff", "#0878A5", "#ffffff", "#101010"],
    actions: [0, 1, 2, 3, 4, 5, 6],
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
        let link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css";
        document.body.appendChild(link);
        let script = document.createElement('script');
        script.appendChild(document.createTextNode('function openB(){let flt=document.getElementById("fly"); if(flt.classList.contains("open")) flt.classList.remove("open"); else flt.classList.add("open");}'));
        document.body.appendChild(script);
        let div = document.createElement("div");
        div.id = "fly";
        let c = items.colors;
        let f=items.fpos;
        posf=f;
        addStyle('#pth1{fill:'+c[1]+'!important;}div i{line-height:50px!important}#fly{position:fixed;bottom:5px;'+((f==0)?"left":"right")+':5px;padding:0!important;width:50px;margin:0;height:50px;z-index:9999;}#fly_btn{position: absolute;z-index: 99999;width: 50px;height:50px;padding:0!important;font-size:22px !important;text-align:center; line-height:50px!important; background-color: ' + c[0] + '!important; color:' + c[1] + '!important; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); user-select: none;}#fly_btn #svg1,#fly.open #fly_btn i:nth-child(2){display:inline;}#ac4.fullscreen i:nth-child(2),#ac4 i:nth-child(1){display:inline;}#ac4.fullscreen i:nth-child(1),#ac4 i:nth-child(2){display:none;}#fly_btn i:nth-child(2),#fly.open #fly_btn #svg1{display:none;}::-webkit-scrollbar{display: none;}.a_ib{position:absolute; text-align:'+((f)?"right;":"left;")+' white-space: nowrap; overflow-x: auto;padding:0!important;'+((f)?"right:0;":"")+' padding-'+((f==0)?"left":"right")+':54px !important; width: 0px; height: 50px;opacity:0; background-color:' + c[4] + '!important; border-radius:50px; box-shadow: 0px 5px 20px #101010; transition: all .2s ease-in-out;}.a_ib div{display:inline-table;width: 50px; height:46px;margin-left:4px;padding:0!important;font-size:22px!important; text-align:center; background-color:' + c[2] + '!important; color:' + c[3] + '!important; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);}#fly.open{width:calc(100vw - 10px);}#fly.open .a_ib{opacity:1;width:calc(100vw - 62px);}');
        let ua = items.userActions;
        let innerString = '<div id="fly_btn" onclick="openB();"><svg id="svg1" width="23px" height="50px" viewBox="0 0 144 219"> <path id="pth1" fill="'+c[1]+'"  d="M 45.00,106.00 C 38.94,106.68 33.40,110.01 34.27,117.00 35.33,125.50 43.67,123.32 42.99,134.04 42.99,134.04 35.58,182.00 35.58,182.00 34.38,187.43 30.22,200.37 31.65,204.99 33.82,211.99 43.24,214.36 48.67,209.57 54.41,204.52 56.70,193.27 57.92,186.00 57.92,186.00 61.13,162.00 61.13,162.00 61.13,162.00 65.00,127.00 65.00,127.00 69.30,127.00 82.79,127.68 85.95,125.98 92.64,122.36 92.29,110.28 86.79,107.02 83.99,105.36 70.95,106.00 67.00,106.00 67.00,106.00 67.00,57.00 67.00,57.00 67.06,52.52 67.30,46.97 71.22,44.05 85.15,33.70 92.85,54.30 101.00,58.91 106.89,62.25 114.88,60.55 115.87,53.00 117.24,42.48 111.19,34.02 103.00,28.17 88.46,17.78 67.69,16.15 54.18,29.30 44.57,38.66 46.02,49.90 46.00,62.00 46.00,62.00 45.00,79.00 45.00,79.00 45.00,79.00 45.00,106.00 45.00,106.00 Z"/></svg><i class="fas fa-times"></i></div><div class="a_ib">';
        for (let i = 0; i < ua.length; i++) innerString += acDivs[ua[i]];
        innerString += '</div>';
        div.innerHTML = innerString;
        //Add floatly
        document.body.appendChild(div);
        for (let i = 0; i < ua.length; i++)document.getElementById('ac' + ua[i]).onclick = function (event) {aFunctions[event.currentTarget.id]();};
        //Add Swipe on Floatly
        var fbtn = document.getElementById("fly_btn");
        fbtn.oncontextmenu= function(){aFunctions["ac"+splist[0]]();}
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