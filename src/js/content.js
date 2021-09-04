

function addStyle(css) {
    let head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head)return;
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
var scroll_speed=800;
function scrollTo(element, to,duration) {
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
    document.getElementById("ac4").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M136 320h-112C10.75 320 0 330.7 0 344c0 13.25 10.75 24 24 24H112v88C112 469.3 122.7 480 136 480S160 469.3 160 456v-112C160 330.7 149.3 320 136 320zM312 192h112C437.3 192 448 181.3 448 168c0-13.26-10.75-24-24-24H336V56C336 42.74 325.3 32 312 32S288 42.74 288 56v112C288 181.3 298.7 192 312 192zM136 32C122.7 32 112 42.74 112 56V144H24C10.75 144 0 154.7 0 168C0 181.3 10.75 192 24 192h112C149.3 192 160 181.3 160 168v-112C160 42.74 149.3 32 136 32zM424 320h-112C298.7 320 288 330.7 288 344v112c0 13.25 10.75 24 24 24s24-10.75 24-24V368h88c13.25 0 24-10.75 24-24C448 330.7 437.3 320 424 320z"></path></svg>';
}
function closeFullscreen() {
    if (document.exitFullscreen) {document.exitFullscreen();} 
    else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();} 
    else if (document.msExitFullscreen) {document.msExitFullscreen();}
    document.getElementById("ac4").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M136 32h-112C10.75 32 0 42.75 0 56v112C0 181.3 10.75 192 24 192C37.26 192 48 181.3 48 168V80h88C149.3 80 160 69.25 160 56S149.3 32 136 32zM424 32h-112C298.7 32 288 42.75 288 56c0 13.26 10.75 24 24 24h88v88C400 181.3 410.7 192 424 192S448 181.3 448 168v-112C448 42.75 437.3 32 424 32zM136 432H48v-88C48 330.7 37.25 320 24 320S0 330.7 0 344v112C0 469.3 10.75 480 24 480h112C149.3 480 160 469.3 160 456C160 442.7 149.3 432 136 432zM424 320c-13.26 0-24 10.75-24 24v88h-88c-13.26 0-24 10.75-24 24S298.7 480 312 480h112c13.25 0 24-10.75 24-24v-112C448 330.7 437.3 320 424 320z"></path></svg>';
}
function is_touch_device() {
    try {document.createEvent("TouchEvent");return true;} catch (e) {return false;}
}
function openB(){
    let flt=document.getElementById("fly"); 
    if(flt.classList.contains("open")) flt.classList.remove("open"); 
    else flt.classList.add("open");
}
function enableAutoHideOnScroll(s,f,fb){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById(s).style.bottom = f;
    } else {
        document.getElementById(s).style.bottom = fb;
    }
    prevScrollpos = currentScrollPos;
    }
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
    '<div id="ac0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM304.1 175c-9.375-9.375-24.56-9.375-33.94 0L224 222.1L176.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03L143 303c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L224 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94l-47.03-47.03l47.03-47.03C314.3 199.6 314.3 184.4 304.1 175z"></path></svg></div>',
    '<div id="ac1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H224C188.7 0 160 28.65 160 64v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0zM464 288c0 8.822-7.178 16-16 16H224C215.2 304 208 296.8 208 288V64c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16V288zM304 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V224c0-8.822 7.178-16 16-16h64V160H64C28.65 160 0 188.7 0 224v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-64h-48V448z"></path></svg></div>',
    '<div id="ac2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M55.1 241.9L192 120.2l136 121.6c4.563 4.094 10.28 6.125 16 6.125c6.594 0 13.16-2.687 17.88-7.1c8.844-9.874 8-25.06-1.875-33.87L208 70.14c-9.125-8.187-22.88-8.187-32 0L23.99 206.1C14.12 214.9 13.28 230.1 22.12 240C30.93 249.9 46.15 250.7 55.1 241.9zM208 262.1c-9.125-8.187-22.88-8.187-32 0l-152 135.1c-9.875 8.812-10.72 23.1-1.875 33.87c8.813 9.906 24.03 10.72 33.88 1.875L192 312.2l136 121.6c4.563 4.094 10.28 6.125 16 6.125c6.594 0 13.16-2.687 17.88-7.1c8.844-9.874 8-25.06-1.875-33.87L208 262.1z"></path></svg></div>',
    '<div id="ac3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M328 270.1L192 391.8L55.1 270.1c-4.563-4.094-10.28-6.125-16-6.125c-6.594 0-13.16 2.687-17.88 7.1C13.28 281.9 14.12 297.1 23.99 305.9l152 135.1c9.125 8.187 22.88 8.187 32 0l152-135.1c9.875-8.812 10.72-23.1 1.875-33.87C353.1 262.1 337.8 261.3 328 270.1zM175.1 249.9c9.125 8.187 22.88 8.187 32 0l152-135.1c9.875-8.812 10.72-23.1 1.875-33.87c-8.813-9.906-24.03-10.72-33.88-1.875L192 199.8L55.1 78.13c-4.563-4.094-10.28-6.125-16-6.125c-6.594 0-13.16 2.687-17.88 7.1C13.28 89.88 14.12 105.1 23.99 113.9L175.1 249.9z"></path></svg></div>',
    '<div id="ac4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M136 32h-112C10.75 32 0 42.75 0 56v112C0 181.3 10.75 192 24 192C37.26 192 48 181.3 48 168V80h88C149.3 80 160 69.25 160 56S149.3 32 136 32zM424 32h-112C298.7 32 288 42.75 288 56c0 13.26 10.75 24 24 24h88v88C400 181.3 410.7 192 424 192S448 181.3 448 168v-112C448 42.75 437.3 32 424 32zM136 432H48v-88C48 330.7 37.25 320 24 320S0 330.7 0 344v112C0 469.3 10.75 480 24 480h112C149.3 480 160 469.3 160 456C160 442.7 149.3 432 136 432zM424 320c-13.26 0-24 10.75-24 24v88h-88c-13.26 0-24 10.75-24 24S298.7 480 312 480h112c13.25 0 24-10.75 24-24v-112C448 330.7 437.3 320 424 320z"></path></svg></div>',
    '<div id="ac5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"></path></svg></div>',
    '<div id="ac6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M378.8 339.7l35.26-82.28c3.188-7.422 2.406-15.94-2.031-22.67S400.1 224 392 224h-44.54c2.664-10.29 4.534-20.88 4.534-32c0-9.492-1.19-18.68-3.151-27.58C389.9 155.6 416 142.6 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.58 26.1 27.62 67.15 36.42C97.19 173.3 96 182.6 96 192.1C96 203.2 97.86 213.7 100.5 224H56C47.94 224 40.41 228 35.97 234.8S30.75 250 33.94 257.5l35.26 82.28C27.41 371.3 0 420.9 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.9 420.6 371.3 378.8 339.7zM224 272c-34.41 0-63.56-21.96-74.83-52.52C154.4 222.1 160.1 224 166.4 224h12.33c16.46 0 30.29-10.39 35.63-24.99C215.9 194.9 219.6 192 224 192s8.105 2.887 9.615 7.008C238.1 213.6 252.8 224 269.3 224h12.33c6.299 0 11.1-1.857 17.25-4.516C287.6 250 258.4 272 224 272zM48.71 464c4.765-44.31 35.35-77.19 40.66-77.19l16.56 38.64C109.8 434.6 118.7 440 128 440c3.156 0 6.375-.625 9.469-1.938c12.16-5.219 17.81-19.33 12.59-31.52L92.41 272h32.41C139.5 290.2 158.9 304.2 181.5 312.2L208 352l-32 112H48.71zM272 464l-32-112l26.53-39.79C289.1 304.2 308.5 290.2 323.2 272h32.41l-57.66 134.5c-5.219 12.19 .4375 26.3 12.59 31.52C313.6 439.4 316.8 440 320 440c9.312 0 18.16-5.453 22.06-14.55l16.56-38.64c5.776 0 35.94 33.25 40.66 77.19H272z"></path></svg></div>',
    '<div id="ac7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C512 124.7 483.3 96 448 96zM464 416c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144v159.1c0 13.41 15.52 20.86 25.1 12.48L336 273.3l54 43.2C400.5 324.8 416 317.4 416 303.1V144h32c8.822 0 16 7.176 16 16V416z"></path></svg></div>',
    '<div id="ac8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C512 124.7 483.3 96 448 96zM464 416c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144h192c8.822 0 16 7.176 16 16V416zM319 271L280 310.1V208c0-13.25-10.75-24-24-24S232 194.8 232 208v102.1L192.1 271c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l80 80C243.7 389.7 249.9 392 256 392s12.28-2.344 16.97-7.031l80-80c9.375-9.375 9.375-24.56 0-33.94S328.4 261.7 319 271z"></path></svg></div>',
    '<div id="ac9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87c-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464C0 501.3 10.75 512 24 512s24-10.75 24-24v-104c53.59-23.86 96.02-31.81 132.8-31.81c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1c-30.8 0-58.31-7-87.44-14.41c-32.01-8.141-68.29-17.37-111.1-17.37c-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54c28.24 .0039 49.12 6.711 73.31 14.48c25.38 8.148 54.13 17.39 90.58 17.39c35.43 0 72.24-8.496 114.9-26.61V319.8z"></path></svg></div>',
    '<div id="ac10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M425 182c-3.027 0-6.031 .1758-9 .5195V170C416 126.4 372.8 96 333.1 96h-4.519c.3457-2.969 .5193-5.973 .5193-9c0-48.79-43.92-87-100-87c-56.07 0-100 38.21-100 87c0 3.027 .1761 6.031 .5218 9h-56.52C33.2 96 0 129.2 0 170v66.21C0 253.8 6.77 269.9 17.85 282C6.77 294.1 0 310.2 0 327.8V438C0 478.8 33.2 512 73.1 512h110.2c17.63 0 33.72-6.77 45.79-17.85C242.1 505.2 258.2 512 275.8 512h58.21C372.8 512 416 481.6 416 438v-56.52c2.969 .3438 5.973 .5195 9 .5195C473.8 382 512 338.1 512 282S473.8 182 425 182zM425 334c-26.35 0-25.77-26-45.21-26C368.9 308 368 316.9 368 327.8V438c0 14.36-19.64 26-34 26h-58.21C264.9 464 256 455.1 256 444.2c0-19.25 25.1-18.88 25.1-45.21c0-21.54-23.28-39-52-39c-28.72 0-52 17.46-52 39c0 26.35 26 25.77 26 45.21C204 455.1 195.1 464 184.2 464H73.1C59.64 464 48 452.4 48 438v-110.2C48 316.9 56.86 308 67.79 308c19.25 0 18.88 26 45.21 26c21.54 0 39-23.28 39-52s-17.46-52-39-52C86.65 230 87.23 256 67.79 256C56.86 256 48 247.1 48 236.2V170C48 155.6 59.64 144 73.1 144h110.2C195.1 144 204 143.1 204 132.2c0-19.25-26-18.88-26-45.21c0-21.54 23.28-39 52-39c28.72 0 52 17.46 52 39C281.1 113.4 256 112.8 256 132.2C256 143.1 264.9 144 275.8 144h58.21C348.4 144 368 155.6 368 170v66.21C368 247.1 368.9 256 379.8 256c19.25 0 18.88-26 45.21-26c21.54 0 39 23.28 39 52S446.5 334 425 334z"></path></svg></div>',
    '<div id="ac11"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.1 315.1c0-8.652-4.607-16.84-12.36-21.39l-32.91-18.97C459.5 269.1 459.8 262.5 459.8 256s-.3228-13.1-.9683-19.62l32.91-18.97c7.752-4.548 12.36-12.74 12.36-21.39c0-21.27-49.32-128.2-84.52-128.2c-4.244 0-8.51 1.094-12.37 3.357l-32.78 18.97c-10.71-7.742-22.07-14.32-34.07-19.74V32.49c0-11.23-7.484-21.04-18.33-23.88C300.5 2.871 278.3 0 256 0C233.8 0 211.5 2.871 189.9 8.613C179.1 11.45 171.6 21.26 171.6 32.49v37.94c-12 5.42-23.36 12-34.07 19.74l-32.78-18.97C100.9 68.94 96.63 67.85 92.38 67.85c-.0025 0 .0025 0 0 0c-32.46 0-84.52 101.7-84.52 128.2c0 8.652 4.607 16.84 12.36 21.39l32.91 18.97C52.49 242.9 52.17 249.5 52.17 256s.3228 13.1 .9683 19.62L20.23 294.6C12.47 299.1 7.867 307.3 7.867 315.1c0 21.27 49.32 128.2 84.52 128.2c4.244 0 8.51-1.094 12.37-3.357l32.78-18.97c10.71 7.742 22.07 14.32 34.07 19.74v37.94c0 11.23 7.484 21.04 18.33 23.88C211.5 509.1 233.7 512 255.1 512c22.25 0 44.47-2.871 66.08-8.613c10.84-2.84 18.33-12.65 18.33-23.88v-37.94c12-5.42 23.36-12 34.07-19.74l32.78 18.97c3.855 2.264 8.123 3.357 12.37 3.357C452.1 444.2 504.1 342.4 504.1 315.1zM415.2 389.1l-43.66-25.26c-42.06 30.39-32.33 24.73-79.17 45.89v50.24c-13.29 2.341-25.58 3.18-36.44 3.18c-15.42 0-27.95-1.693-36.36-3.176v-50.24c-46.95-21.21-37.18-15.54-79.17-45.89l-43.64 25.25c-15.74-18.69-28.07-40.05-36.41-63.11L103.1 301.7C101.4 276.1 100.1 266.1 100.1 256c0-10.02 1.268-20.08 3.81-45.76L60.37 185.2C68.69 162.1 81.05 140.7 96.77 122l43.66 25.26c42.06-30.39 32.33-24.73 79.17-45.89V51.18c13.29-2.341 25.58-3.18 36.44-3.18c15.42 0 27.95 1.693 36.36 3.176v50.24c46.95 21.21 37.18 15.54 79.17 45.89l43.64-25.25c15.74 18.69 28.07 40.05 36.4 63.11L408 210.3c2.538 25.64 3.81 35.64 3.81 45.68c0 10.02-1.268 20.08-3.81 45.76l43.58 25.12C443.3 349.9 430.9 371.3 415.2 389.1zM256 159.1c-52.88 0-96 43.13-96 96S203.1 351.1 256 351.1s96-43.13 96-96S308.9 159.1 256 159.1zM256 304C229.5 304 208 282.5 208 256S229.5 208 256 208s48 21.53 48 48S282.5 304 256 304z"></path></svg></div>',
    '<div id="ac12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M567.5 229.7l-263.1-224C299 1.891 293.5 .0029 288 .0029S276.1 1.891 272.5 5.672L8.471 229.7C2.877 234.4 0 241.2 0 247.1c0 16.03 13.69 24 24.01 24c5.484 0 11-1.865 15.52-5.686L64 245.5l.0039 186.5c.002 44.18 35.82 79.1 80 79.1h287.1c44.18 0 79.1-35.82 80-79.1l-.001-186.5l24.47 20.76c4.516 3.812 10.03 5.688 15.52 5.688c10.16 0 24.02-8.031 24.02-24C575.1 241.2 573.1 234.4 567.5 229.7zM335.1 463.1H240V320h95.1V463.1zM463.1 431.1c0 17.6-14.4 32-32 32h-47.1V312c0-22.06-17.94-40-40-40H232C209.9 272 192 289.9 192 312v151.1H144c-17.6 0-32-14.4-32-32V207.1c0-.9629-.4375-1.783-.5488-2.717L287.1 55.46l175.1 149.4V431.1z"></path></svg></div>',
    '<div id="ac13"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C176.2 32 103.7 75.57 64 142.1V56C64 42.75 53.25 32 40 32S16 42.75 16 56v144C16 213.3 26.75 224 40 224h128C181.3 224 192 213.3 192 200S181.3 176 168 176H99.54C129.2 118.3 189.5 79.96 256 79.96c97.03 0 176 79.01 176 176s-78.97 175.1-176 175.1c-41.09 0-81.09-14.44-112.6-40.72c-10.16-8.5-25.31-7.156-33.81 3.062c-8.5 10.19-7.125 25.31 3.062 33.81C152.8 461.6 203.7 480 256 480c123.5 0 224-100.5 224-224S379.5 32 256 32zM256 128C242.8 128 232 138.8 232 152V272c0 7.75 3.741 15.03 10.04 19.53l56 40C302.3 334.6 307.2 336 311.1 336c7.484 0 14.86-3.5 19.55-10.06c7.703-10.78 5.203-25.75-5.578-33.47L280 259.7L280 152C280 138.8 269.3 128 256 128z"></path></svg></div>',
    '<div id="ac14"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M162.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C137.8 386.1 142.9 388 148 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L128.3 320l33.86-33.84C169.1 278.3 169.1 265.7 162.1 257.8zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM221.9 257.8c-7.812 7.812-7.812 20.5 0 28.31L255.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C225.8 386.1 230.9 388 236 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48C242.3 250 229.7 250 221.9 257.8z"></path></svg></div>',
    '<div id="ac15"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 40v160C496 213.3 485.3 224 472 224h-160C298.8 224 288 213.3 288 200s10.75-24 24-24h100.5C382.8 118.3 322.5 80 256 80C158.1 80 80 158.1 80 256s78.97 176 176 176c41.09 0 81.09-14.47 112.6-40.75c10.16-8.5 25.31-7.156 33.81 3.062c8.5 10.19 7.125 25.31-3.062 33.81c-40.16 33.44-91.17 51.77-143.5 51.77C132.4 479.9 32 379.5 32 256s100.4-223.9 223.9-223.9c79.85 0 152.4 43.46 192.1 109.1V40c0-13.25 10.75-24 24-24S496 26.75 496 40z"></path></svg></div>',
    '<div id="ac16"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V96C512 60.66 483.3 32 448 32zM464 416c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h384c8.822 0 16 7.176 16 16V416zM240 256c0-6.719-2.828-13.16-7.781-17.69l-96-88C126.5 141.4 111.3 142 102.3 151.8S94.02 176.8 103.8 185.7L180.5 256l-76.7 70.31c-9.766 8.938-10.42 24.12-1.469 33.91C107 365.4 113.5 368 120 368c5.797 0 11.61-2.094 16.22-6.312l96-88C237.2 269.2 240 262.7 240 256zM392 336h-144C234.8 336 224 346.8 224 360S234.8 384 248 384h144c13.25 0 24-10.75 24-24S405.3 336 392 336z"></path></svg></div>',
    '<div id="ac17"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.5 171.5l-146.4-21.29l-65.43-132.4C310.9 5.971 299.4-.002 287.1 0C276.6 0 265.1 5.899 259.3 17.8L193.8 150.2L47.47 171.5C21.2 175.3 10.68 207.6 29.72 226.1l105.9 102.1L110.6 474.6C107 495.3 123.6 512 142.2 512c4.932 0 10.01-1.172 14.88-3.75L288 439.6l130.9 68.7c4.865 2.553 9.926 3.713 14.85 3.713c18.61 0 35.21-16.61 31.65-37.41l-25.05-145.5l105.9-102.1C565.3 207.6 554.8 175.3 528.5 171.5zM390.2 320.6l22.4 130.1l-117.2-61.48c-4.655-2.442-10.21-2.442-14.87 .0001L163.4 450.7l22.4-130.1C186.7 315.4 184.1 310.1 181.2 306.4l-94.7-92.09l130.9-19.04C222.6 194.5 227.1 191.2 229.4 186.5L288 67.99l58.59 118.5c2.331 4.717 6.833 7.986 12.04 8.744l130.9 19.04l-94.7 92.09C391 310.1 389.3 315.4 390.2 320.6z"></path></svg></div>',
    '<div id="ac18"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 288c-28.86 0-54.44 12.1-72.04 33.15L189.8 276.1C191.2 269.6 192 262.9 192 256S191.2 242.4 189.8 235.9l90.14-45.07C297.6 211 323.1 224 352 224c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96c0 6.898 .7969 13.6 2.18 20.08L168 193.2C150.4 172.1 124.9 160 96 160C42.98 160 0 202.1 0 256s42.98 96 96 96c28.86 0 54.44-12.1 72.04-33.15l90.14 45.07C256.8 370.4 256 377.1 256 384c0 53.02 42.98 96 96 96s96-42.98 96-96S405 288 352 288zM352 80c26.47 0 48 21.53 48 48S378.5 176 352 176S304 154.5 304 128S325.5 80 352 80zM96 304C69.53 304 48 282.5 48 256S69.53 208 96 208S144 229.5 144 256S122.5 304 96 304zM352 432c-26.47 0-48-21.53-48-48s21.53-48 48-48s48 21.53 48 48S378.5 432 352 432z"></path></svg></div>',
    '<div id="ac19"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z"></path></svg></div>'
  ];


    var aFunctions = {
    ac0: function () {chrome.runtime.sendMessage({closeThis: true});},
    ac1: function () {window.open(window.location.href);},
    ac2: function () {scrollTo(document.documentElement, 0,scroll_speed);},
    ac3: function () {scrollTo(document.documentElement, document.body.clientHeight,scroll_speed);},
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
    ac18: function() {try {navigator.share({url:window.location.href})} catch(err) {console.log(err)}},
    ac19: function(){window.history.back();}
};

var splist,posf;
// Get use options and inject 
chrome.storage.local.get({
    style:"fab",
    colors: ["#663fa6", "#ffffff", "#663fa6", "#ffffff", "#101010","#663fa6", "#ffffff"],
    userActions: [],
    fstyle:0,
    fpos:0,
    options:{"opt0":false,"scroll_speed":800},
    pos: ["20px","20px"],
    blist:["github.com","youtube.com"],
    splist:[1,2,3]
}, function (items) {
    let blist=items.blist;
    let curl=window.location.href;
    let blacklisted=true;
    splist=items.splist;
    let ua = items.userActions;
    for (var i = 0; i < blist.length; i++)if (curl.indexOf(blist[i]) > -1) blacklisted=false;
    if(blacklisted){
        let c = items.colors;
        let pos=items.pos;
        let f=items.fpos;
        scroll_speed=items.options["scroll_speed"];
        const floatly_icon= '<svg width="120" height="50px" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg"><g fill="'+c[1]+'"><path d="M88.145 344.395c.635-.034.01-.016-.016.039 55.687-.237 82.908-79.477 82.156-106.913l-.477-84.963c.504-13.136.047-27.086.047-40.261-33.154-1.467-75.592 31.933-81.458 66.23 0 0 8.747 150.07-.252 165.868z" fill-opacity=".778" /><path d="M90.45 216.65l1.32 58.446c18.794-22.983 48.96-40.274 77.798-44.567 95.996-9.51 95.878-57.47 94.727-76.747-16.568 6.26-56.987-8.573-94.301 0-41.389 8.484-74.504 47.715-79.543 62.868zm208.732-181.1c-21.638 7.432-82.703-11.041-128.245 0-45.542 11.04-88.642 73.618-82.54 142.977 10.616-29.708 59.812-64.162 81.457-66.23 127.386-4.045 128.283-49.094 129.328-76.748z" /></g></svg>';
        if(items.style == "fab" && items.fstyle == 0){
            posf=f;
            if(ua.includes(17)>-1) chrome.runtime.sendMessage({book:"check",url:window.location.href});
            if(ua.includes(16)>-1)chrome.runtime.sendMessage({eruda: true});
            let innerString = '<div id="fly_btn">'+floatly_icon+'</div><div class="a_ib">';
            for (let i = 0; i < ua.length; i++) innerString += acDivs[ua[i]];
            innerString += '</div>';
            let content= document.createElement('div');
            content.innerHTML= '<style>#fly div svg{height:26px;color:'+c[3]+' !important}#fly{position:fixed;bottom:'+pos[0]+';left:'+pos[1]+';padding:0!important;width:50px;margin:0;height:50px;z-index: 1000000;transition: bottom .1s linear;}#fly_btn{position: absolute;z-index: 1000000;height:50px;width:50px;background-color: ' + c[0] + '!important; color:' + c[1] + '!important; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); user-select: none;display: flex;justify-content: center;align-items: center;}#fly_btn #svg1,#fly.open #fly_btn svg:nth-child(2){display:inline;}#ac4.fullscreen svg:nth-child(2),#ac4 svg:nth-child(1){display:inline;}#ac4.fullscreen svg:nth-child(1),#ac4 svg:nth-child(2){display:none;}#fly_btn svg:nth-child(2),#fly.open #fly_btn #svg1{display:none;}::-webkit-scrollbar{display: none;}.a_ib{position:absolute;overflow:auto;display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;gap:5px;bottom:calc(100% + 10px);padding:5px!important;left:calc(5px - '+pos[1]+');width:calc(100vw - 10px);opacity:0;visibility:hidden;background-color:'+c[4]+'!important;border-radius:50px;box-shadow:0 5px 20px #101010;transition:all .3s ease-in-out}.a_ib div{display:inline-flex;justify-content:center;align-items:center;width:46px;flex:0 0 auto;height:46px;padding:0!important;color:'+c[3]+';background-color:'+c[2]+'!important;border-radius:50%;box-shadow:0 5px 20px rgb(0 0 0 / 15%)}#fly.open .a_ib{opacity:1;visibility:visible}</style>'+
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
            if(items.options["opt0"]){
                enableAutoHideOnScroll("fly",pos[0],'calc(-60px + '+pos[0]+')');
            }
        }else if(items.style == "duet"){
            
            if(ua.includes(17)>-1) chrome.runtime.sendMessage({book:"check",url:window.location.href});
            let innerString = '';
            let a=0;
            for (let i = 0; i < 6; i++) {
                if(ua[i]!=-1){
                    a++;innerString += acDivs[ua[i]];
                }
            }
            let content= document.createElement('div');
            content.innerHTML= '<style>#duplet{display: grid;grid-template-columns: repeat('+a+', 1fr);width: 100%;margin: auto;'+
               ' background:'+c[5]+';color:'+c[6]+'; position:fixed;bottom:0;z-index:99999999;transition: bottom .1s linear;}#duplet>div>svg{height:20px;margin:auto;}#duplet>div{position:relative;text-decoration:none;float:left;margin:6px;outline:0;border:none;border-radius:8px;text-align:center;padding:6px;}#duplet>div:after {content: "";background: '+c[1]+';display: block;position: absolute;width: 200px;height: 200px;top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 50%;opacity: 0;transition: all 0.8s;}  #duplet>div:active:after {width: 0;height: 0;opacity: 0.7;transition: 0s;</style>'+
                '<div id="duplet">'+innerString+'</div>';
            //Add duplet bar
            document.body.appendChild(content);
            for (let i = 0; i < ua.length; i++) 
                if(ua[i]!=-1) 
                document.getElementById('ac' + ua[i]).onclick = function (event) {aFunctions[event.currentTarget.id]();};
                if(items.options["opt0"]){
                    enableAutoHideOnScroll("duplet",0,"-50px");
                }
        }else{
            posf=f;
            if(ua.includes(17)>-1) chrome.runtime.sendMessage({book:"check",url:window.location.href});
            if(ua.includes(16)>-1)chrome.runtime.sendMessage({eruda: true});
            let innerString = '<div class="circular-menu"><div class="circle" id="circle">';
            for (let i = 0; i < ua.length; i++) innerString += acDivs[ua[i]];
            innerString += '</div><div id="fly_btn">'+floatly_icon+'</div></div>';
            let content= document.createElement('div');
            content.innerHTML= '<style>#fly div svg{height:25px;color:'+c[3]+' !important}#fly{position:fixed;bottom:calc(-125px + '+pos[0]+');left:calc(-125px + '+pos[1]+');width: 300px;height: 300px;padding: 0 !important;transition: bottom .1s linear;margin: 0;z-index: 1000;pointer-events:none;}.circular-menu{width:300px;height:300px;margin:0 auto;position:relative;pointer-events:none;}.circle{'+((f==1)?"transform: rotateZ(-90deg);":"")+'width:300px;height:300px;opacity:0;visibility:hidden;border-radius:50%;background-color:' + c[4] + '!important;}.open.circle{opacity:1;visibility:visible!important;pointer-events:auto;}.circle div{text-decoration:none;background-color:' + c[2] + '!important;color:' + c[2] + '!important;display:flex;align-items:center;justify-content:center;border-radius:50%;height:46px;width:46px;margin-left:-23px;margin-top:-23px;position:absolute;text-align:center}#fly_btn{top:calc(50% - 25px);left:calc(50% - 25px);position:absolute;z-index:1000000;height:50px;width:50px;background-color:' + c[0] + '!important;color:' + c[1] + '!important;border-radius:50%;box-shadow:0 5px 20px rgb(0 0 0 / 15%);user-select:none;display:flex;justify-content:center;align-items:center;pointer-events:auto;}</style>'+
                '<div id="fly">'+innerString+'</div>';
            //Add floatly
            document.body.appendChild(content);
            var l=ua.length; 
            if(l<6)l=l*4 - 4;
            if(l>18)l=18;
            for (let i = 0; i < ua.length; i++){
                const el = document.getElementById('ac' + ua[i])
                el.onclick = function (event) {aFunctions[event.currentTarget.id]();};
                var z = (50 - 40*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4);
                var t= (50 + 40*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4);
                var ang= 2*(1/l)*i*Math.PI;
                el.style.left = z+"%";
                el.style.top = (i<19)? t + "%" : "calc("+t + "% + 50px)" ;
                el.style.transform = `rotateZ(${ang}rad)`;
            }
            
            //Add Swipe on Floatly
            var fbtn = document.getElementById("fly_btn");
            fbtn.oncontextmenu= function(){aFunctions["ac"+splist[0]]();return false;}
            fbtn.onclick= function(e){ e.preventDefault(); document.querySelector('.circle').classList.toggle('open');};
            function is_td() {
                try {
                  document.createEvent("TouchEvent");
                  return true;
                } catch (e) {
                  return false;
                }
              }
              const isTD= is_td();
              var mLstnr = ['touchmove','touchend','touchstart'];
              if(!isTD){
                  mLstnr=['mousemove','mouseup','mousedown'];
              }
              const rotate = (EL) => {
                
                let ang = (f==1)? -1.57079633 : 0; // All angles are expressed in radians
                let angStart = 0;
                let isStart = false;
              
                const angXY = (ev) => {
                  const bcr = EL.getBoundingClientRect();
                  const radius = bcr.width / 2;
                  const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
                  const y = clientY - bcr.top - radius;  // y from center
                  const x = clientX - bcr.left - radius; // x from center
                  return Math.atan2(y, x);
                };
              
                const mousedown = (ev) => {
                  isStart = true;
                  angStart = angXY(ev) - ang;
                };
              
                const mousemove = (ev) => {
                  if (!isStart) return;
                  ev.preventDefault();
                  ang = angXY(ev) - angStart;
                  EL.style.transform = `rotateZ(${ang}rad)`;
                };
              
                const mouseup = () => {
                  isStart = false; 
                };
              
                EL.addEventListener(mLstnr[2], mousedown,{passive:false});
                document.addEventListener(mLstnr[0], mousemove,{passive:false});
                document.addEventListener(mLstnr[1], mouseup,{passive:false});
              };
              rotate(document.getElementById("circle"));
              if(items.options["opt0"]){
                enableAutoHideOnScroll("fly",'calc(-125px + '+pos[0]+')','calc(-200px + '+pos[0]+')');
            }
        }
    }
});
chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if(request.bookmarked!=undefined){
            const v=document.getElementById("ac17");
            if(v){
                if(request.bookmarked)v.innerHTML='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
                else v.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>';
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