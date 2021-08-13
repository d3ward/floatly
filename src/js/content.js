
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
    '<div id="ac0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM304.1 175c-9.375-9.375-24.56-9.375-33.94 0L224 222.1L176.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03L143 303c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L224 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94l-47.03-47.03l47.03-47.03C314.3 199.6 314.3 184.4 304.1 175z"></path></svg></div>',
    '<div id="ac1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H224C188.7 0 160 28.65 160 64v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0zM464 288c0 8.822-7.178 16-16 16H224C215.2 304 208 296.8 208 288V64c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16V288zM304 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V224c0-8.822 7.178-16 16-16h64V160H64C28.65 160 0 188.7 0 224v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-64h-48V448z"></path></svg></div>',
    '<div id="ac2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"></path></svg></div>',
    '<div id="ac3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"></path></svg></div>',
    '<div id="ac4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M428.2 290.4c-11.97-4.969-25.72-2.219-34.87 6.937l-47.03 47.04L257.9 256l88.4-88.41l47.03 47.03c6.127 6.117 14.3 9.352 22.63 9.352c4.117 0 8.276-.7977 12.24-2.415c11.97-4.953 19.75-16.62 19.75-29.56V56c0-13.25-10.74-23.1-23.1-23.1h-135.1c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.937 34.87l47.03 47.03L224 222.1L135.6 133.7l47.03-47.03c6.117-6.129 9.362-14.29 9.362-22.63c0-4.117-.8077-8.277-2.425-12.25c-4.953-11.97-16.62-19.75-29.56-19.75H24c-13.25 0-23.1 10.74-23.1 23.1v135.1c0 12.94 7.797 24.62 19.75 29.56c11.97 4.969 25.72 2.219 34.87-6.937l47.03-47.03L190.1 256l-88.41 88.41L54.63 297.4c-6.127-6.117-14.29-9.367-22.63-9.367c-4.117 0-8.279 .8125-12.25 2.43c-11.97 4.953-19.75 16.62-19.75 29.56v135.1c0 13.25 10.74 23.1 23.1 23.1h135.1c12.94 0 24.62-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.937-34.87l-47.03-47.03l88.41-88.41l88.4 88.41l-47.03 47.02c-6.117 6.129-9.351 14.3-9.351 22.64c0 4.117 .7968 8.271 2.414 12.24c4.953 11.97 16.62 19.75 29.56 19.75h135.1c13.25 0 23.1-10.74 23.1-23.1V319.1C447.1 307.1 440.2 295.4 428.2 290.4z"></path></svg></div>',
    '<div id="ac5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"></path></svg></div>',
    '<div id="ac6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48C348.5 209.2 352 193 352 176c0-4.117-.8359-8.057-1.217-12.08C390.7 155.1 416 142.3 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.34 25.31 27.13 65.22 35.92C96.84 167.9 96 171.9 96 176C96 193 99.47 209.2 105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM176 479.1L128 288l64 32l16 32L176 479.1zM271.1 479.1L240 352l16-32l64-32L271.1 479.1zM320 186C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C156.3 173.6 188.1 176 224 176s67.74-2.383 96-6.473V186z"></path></svg></div>',
    '<div id="ac7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"></path></svg></div>',
    '<div id="ac8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"></path></svg></div>',
    '<div id="ac9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"></path></svg></div>',
    '<div id="ac10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 288c0 35.35-21.49 64-48 64c-32.43 0-31.72-32-55.64-32C394.9 320 384 330.9 384 344.4V480c0 17.67-14.33 32-32 32h-71.64C266.9 512 256 501.1 256 487.6C256 463.1 288 464.4 288 432c0-26.51-28.65-48-64-48s-64 21.49-64 48c0 32.43 32 31.72 32 55.64C192 501.1 181.1 512 167.6 512H32c-17.67 0-32-14.33-32-32v-135.6C0 330.9 10.91 320 24.36 320C48.05 320 47.6 352 80 352C106.5 352 128 323.3 128 288S106.5 223.1 80 223.1c-32.43 0-31.72 32-55.64 32C10.91 255.1 0 245.1 0 231.6v-71.64c0-17.67 14.33-31.1 32-31.1h135.6C181.1 127.1 192 117.1 192 103.6c0-23.69-32-23.24-32-55.64c0-26.51 28.65-47.1 64-47.1s64 21.49 64 47.1c0 32.43-32 31.72-32 55.64c0 13.45 10.91 24.36 24.36 24.36H352c17.67 0 32 14.33 32 31.1v71.64c0 13.45 10.91 24.36 24.36 24.36c23.69 0 23.24-32 55.64-32C490.5 223.1 512 252.7 512 288z"></path></svg></div>',
    '<div id="ac11"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M314.6 216.6L285.6 199.9C287.1 192.1 288 184.2 288 176.1C288 167.8 287.1 159.8 285.6 151.1L314.6 135.2c4.293-2.48 6.445-7.695 4.883-12.4C312.2 100.1 300.6 81.11 285.7 64.28C283.7 62.03 280.9 60.87 278 60.87c-1.861 0-3.736 .4785-5.42 1.449L243 79.41C231 69.11 217.3 61.07 202.1 55.75V21.65c0-4.943-3.418-9.348-8.258-10.36C182.9 9.002 171.6 7.67 160 7.67c-11.61 0-22.88 1.342-33.81 3.632c-4.84 1.016-8.248 5.41-8.248 10.35v34.09C102.7 61.07 88.96 69.11 76.98 79.41L47.39 62.32C45.71 61.35 43.83 60.87 41.97 60.87c-2.893 0-5.648 1.169-7.652 3.427C19.39 81.12 7.758 100.1 .5078 122.8C-1.053 127.5 1.098 132.7 5.391 135.2l29.04 16.77C32.93 159.8 32 167.8 32 176.1c0 8.137 .9434 16.04 2.395 23.75L5.391 216.6C1.098 219.1-1.053 224.3 .5078 228.1c7.25 21.83 18.79 41.69 33.71 58.52C36.22 289.8 39.08 290.9 41.97 290.9c1.861 0 3.738-.4785 5.42-1.449L76.7 272.6c12.04 10.41 25.91 18.53 41.24 23.89v33.69c0 4.941 3.419 9.279 8.258 10.29C137.1 342.7 148.4 344.1 160 344.1c11.61 0 22.88-1.411 33.81-3.7c4.84-1.016 8.247-5.343 8.247-10.28V296.5c15.34-5.365 29.2-13.49 41.24-23.9L272.6 289.5c1.68 .9707 3.559 1.449 5.42 1.449c2.891 0 5.646-1.238 7.652-3.498c14.92-16.83 26.56-36.6 33.81-58.44C321.1 224.3 318.9 219.1 314.6 216.6zM160 224.1c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48S186.5 224.1 160 224.1zM628.5 318.2c-1.016-4.84-5.412-8.248-10.36-8.248h-34.09c-5.324-15.22-13.36-28.98-23.66-40.96l17.09-29.6c.9707-1.68 1.449-3.559 1.449-5.42c0-2.893-1.167-5.648-3.425-7.652c-16.83-14.92-36.67-26.56-58.51-33.81c-4.703-1.561-9.918 .5898-12.4 4.883l-16.77 29.04C479.1 224.9 471.1 224 463.7 224c-8.137 0-16.04 .9434-23.75 2.395L423.2 197.4c-2.48-4.293-7.699-6.443-12.4-4.883c-21.83 7.25-41.69 18.79-58.52 33.71c-2.26 2.004-3.419 4.857-3.419 7.748c0 1.861 .4795 3.738 1.45 5.42l16.92 29.31c-10.41 12.04-18.53 25.91-23.89 41.24H309.6c-4.941 0-9.496 3.393-10.51 8.232C296.8 329.1 295.7 340.4 295.7 352c0 11.61 1.184 22.9 3.473 33.82C300.1 390.7 304.7 394.1 309.6 394.1h33.69c5.365 15.34 13.49 29.2 23.9 41.24l-16.92 29.31c-.9707 1.68-1.45 3.559-1.45 5.42c0 2.891 1.044 5.742 3.304 7.748c16.83 14.92 36.8 26.46 58.63 33.71c4.703 1.562 9.922-.5898 12.4-4.883l16.74-29C447.6 479.1 455.5 480 463.7 480c8.268 0 16.3-.9336 24.13-2.432l16.77 29.04c2.48 4.293 7.695 6.445 12.4 4.883c21.84-7.25 41.69-18.9 58.52-33.82c2.258-2.006 3.414-4.751 3.414-7.642c0-1.861-.4785-3.736-1.449-5.42l-17.09-29.6c10.29-11.98 18.34-25.74 23.66-40.96h34.09c4.943 0 9.35-3.418 10.37-8.258C630.8 374.9 632.1 363.6 632.1 352C632.1 340.4 630.8 329.1 628.5 318.2zM463.7 400c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48S490.2 400 463.7 400z"></path></svg></div>',
    '<div id="ac12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.1 256c-.0006 17.6-14.27 31.1-32.01 31.1L511.1 288l.0026 192c.0002 17.67-14.33 32-31.1 32h-95.99c-17.67 0-31.1-14.33-31.1-31.1l.001-96c.0002-17.67-14.33-32-32-32H256c-17.67 0-31.1 14.33-32 31.1L224 480c-.0006 17.67-14.33 32-32 32H96.02c-17.67 0-32-14.33-32-32L64.02 288H32C14.22 288 .0009 273.6 .0002 256C-.0001 246.1 3.842 238.1 10.92 231.9l255.1-223.1C273.9 1.824 281.9 .0029 288 .0029c7.523 0 15.05 2.637 21.08 7.919l255.1 223.1C572.2 238.1 576 246.1 575.1 256z"></path></svg></div>',
    '<div id="ac13"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M491.3 207.6C484.3 171.4 431.6 15.9 256 16C181.5 15.96 125.3 47.15 86.35 86.32L54.39 54.34C40.23 40.17 16 50.2 16 70.24v121.6c0 8.832 7.16 15.99 15.99 15.99h121.5c20.05 0 30.1-24.24 15.92-38.42L131.6 131.6C184.1 78.82 243.5 79.96 256 79.96c93.1-.0313 157.2 67.85 171.9 137.6c24.11 113.8-62.39 214.4-171.9 214.4c-28.6 0-55.6-6.91-79.49-19.09c-12.56-6.403-27.7-4.505-37.66 5.467c-15.14 15.16-11.63 41.02 7.387 50.88C179.1 486.3 216.4 496 256 496C404.3 496 521.2 361.4 491.3 207.6zM256 128C242.8 128 232 138.8 232 152V272c0 7.562 3.567 14.66 9.598 19.19l64 48C309.9 342.4 314.1 344 319.1 344c7.297 0 14.5-3.312 19.22-9.594c7.953-10.62 5.797-25.66-4.797-33.59L280 260L280 152C280 138.8 269.3 128 256 128z"></path></svg></div>',
    '<div id="ac14"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 305.8c7.812 7.812 7.812 20.5 0 28.31l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0L306.1 305.8zM256 0v128h128L256 0z"></path></svg></div>',
    '<div id="ac15"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"></path></svg></div>',
    '<div id="ac16"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM88 368c-6.484 0-12.95-2.625-17.69-7.781c-8.953-9.781-8.297-24.97 1.469-33.91L148.5 256L71.78 185.7C62.02 176.8 61.36 161.6 70.31 151.8s24.14-10.41 33.91-1.469l96 88C205.2 242.8 208 249.3 208 256S205.2 269.2 200.2 273.7l-96 88C99.61 365.9 93.8 368 88 368zM360 384h-144C202.8 384 192 373.3 192 360s10.75-24 24-24h144c13.25 0 24 10.75 24 24S373.3 384 360 384z"></path></svg></div>',
    '<div id="ac17"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path></svg></div>',
    '<div id="ac18"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"></path></svg></div>',
    '<div id="ac19"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg></div>'
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
    ac18: function() {try {navigator.share({url:window.location.href})} catch(err) {console.log(err)}},
    ac19: function(){window.history.back();}
};

var splist,posf;
// Get use options and inject 
chrome.storage.local.get({
    style:"radial",
    colors: ["#0878A5", "#ffffff", "#0878A5", "#ffffff", "#101010"],
    userActions: [],
    pos: ["20px","20px"],
    fpos:0,
    fstyle:0,
    splist:[1,2,3],
    blist:["github.com","youtube.com"]
}, function (items) {
    let blist=items.blist;
    let curl=window.location.href;
    let blacklisted=true;
    splist=items.splist;
    let ua = items.userActions;
    for (var i = 0; i < blist.length; i++)if (curl.indexOf(blist[i]) > -1) blacklisted=false;
    if(blacklisted){
        if(items.style == "fab" && items.fstyle == 0){
            let c = items.colors;
            let pos=items.pos;
            let f=items.fpos;
            posf=f;
            if(ua.includes(17)>-1) chrome.runtime.sendMessage({book:"check",url:window.location.href});
            if(ua.includes(16)>-1)chrome.runtime.sendMessage({eruda: true});
            let innerString = '<div id="fly_btn"><svg id="svg1" fill="currentColor" width="23px" height="50px" viewBox="0 0 144 219"> <path id="pth1" fill="'+c[1]+'"  d="M 45.00,106.00 C 38.94,106.68 33.40,110.01 34.27,117.00 35.33,125.50 43.67,123.32 42.99,134.04 42.99,134.04 35.58,182.00 35.58,182.00 34.38,187.43 30.22,200.37 31.65,204.99 33.82,211.99 43.24,214.36 48.67,209.57 54.41,204.52 56.70,193.27 57.92,186.00 57.92,186.00 61.13,162.00 61.13,162.00 61.13,162.00 65.00,127.00 65.00,127.00 69.30,127.00 82.79,127.68 85.95,125.98 92.64,122.36 92.29,110.28 86.79,107.02 83.99,105.36 70.95,106.00 67.00,106.00 67.00,106.00 67.00,57.00 67.00,57.00 67.06,52.52 67.30,46.97 71.22,44.05 85.15,33.70 92.85,54.30 101.00,58.91 106.89,62.25 114.88,60.55 115.87,53.00 117.24,42.48 111.19,34.02 103.00,28.17 88.46,17.78 67.69,16.15 54.18,29.30 44.57,38.66 46.02,49.90 46.00,62.00 46.00,62.00 45.00,79.00 45.00,79.00 45.00,79.00 45.00,106.00 45.00,106.00 Z"/></svg><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div><div class="a_ib">';
            for (let i = 0; i < ua.length; i++) innerString += acDivs[ua[i]];
            innerString += '</div>';
            let content= document.createElement('div');
            content.innerHTML= '<style>#pth1{fill:'+c[1]+'!important;}#fly div svg{height:26px;color:'+c[3]+' !important}#fly{position:fixed;bottom:'+pos[0]+';left:'+pos[1]+';padding:0!important;width:50px;margin:0;height:50px;z-index: 1000000;}#fly_btn{position: absolute;z-index: 1000000;height:50px;width:50px;background-color: ' + c[0] + '!important; color:' + c[1] + '!important; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); user-select: none;display: flex;justify-content: center;align-items: center;}#fly_btn #svg1,#fly.open #fly_btn svg:nth-child(2){display:inline;}#ac4.fullscreen svg:nth-child(2),#ac4 svg:nth-child(1){display:inline;}#ac4.fullscreen svg:nth-child(1),#ac4 svg:nth-child(2){display:none;}#fly_btn svg:nth-child(2),#fly.open #fly_btn #svg1{display:none;}::-webkit-scrollbar{display: none;}.a_ib{position:absolute;overflow:auto;display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;gap:5px;bottom:calc(100% + 10px);padding:5px!important;left:calc(5px - '+pos[1]+');width:calc(100vw - 10px);opacity:0;visibility:hidden;background-color:'+c[4]+'!important;border-radius:50px;box-shadow:0 5px 20px #101010;transition:all .3s ease-in-out}.a_ib div{display:inline-flex;justify-content:center;align-items:center;width:46px;flex:0 0 auto;height:46px;padding:0!important;color:'+c[3]+';background-color:'+c[2]+'!important;border-radius:50%;box-shadow:0 5px 20px rgb(0 0 0 / 15%)}#fly.open .a_ib{opacity:1;visibility:visible}</style>'+
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
        }else if(items.style == "duet"){
            let c = items.colors;
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
               ' background:'+c[0]+'; position:fixed;bottom:0;z-index:99999999;}#ac5.fullscreen svg:nth-child(2),#ac5 svg:nth-child(1){display:inline;}#ac5.fullscreen svg:nth-child(1),#ac5 svg:nth-child(2){display:none;}#duplet>div>svg{height:20px;fill:'+c[1]+';margin:auto;}#duplet>div{text-decoration:none;float:left;margin:6px;outline:0;border:none;border-radius:8px;text-align:center;padding:6px;}#duplet>div:hover{background:#ffffff30}}</style>'+
                '<div id="duplet">'+innerString+'</div>';
            //Add duplet bar
            document.body.appendChild(content);
            for (let i = 0; i < ua.length; i++) 
                if(ua[i]!=-1) 
                document.getElementById('ac' + ua[i]).onclick = function (event) {aFunctions[event.currentTarget.id]();};
            
        }else{
            let c = items.colors;
            let f=items.fpos;
            let pos=items.pos;
            posf=f;
            if(ua.includes(17)>-1) chrome.runtime.sendMessage({book:"check",url:window.location.href});
            if(ua.includes(16)>-1)chrome.runtime.sendMessage({eruda: true});
            let innerString = '<div class="circular-menu"><div class="circle" id="circle">';
            for (let i = 0; i < ua.length; i++) innerString += acDivs[ua[i]];
            innerString += '</div><div id="fly_btn"><svg id="svg1" fill="currentColor" width="23px" height="50px" viewBox="0 0 144 219"> <path id="pth1" fill="'+c[1]+'"  d="M 45.00,106.00 C 38.94,106.68 33.40,110.01 34.27,117.00 35.33,125.50 43.67,123.32 42.99,134.04 42.99,134.04 35.58,182.00 35.58,182.00 34.38,187.43 30.22,200.37 31.65,204.99 33.82,211.99 43.24,214.36 48.67,209.57 54.41,204.52 56.70,193.27 57.92,186.00 57.92,186.00 61.13,162.00 61.13,162.00 61.13,162.00 65.00,127.00 65.00,127.00 69.30,127.00 82.79,127.68 85.95,125.98 92.64,122.36 92.29,110.28 86.79,107.02 83.99,105.36 70.95,106.00 67.00,106.00 67.00,106.00 67.00,57.00 67.00,57.00 67.06,52.52 67.30,46.97 71.22,44.05 85.15,33.70 92.85,54.30 101.00,58.91 106.89,62.25 114.88,60.55 115.87,53.00 117.24,42.48 111.19,34.02 103.00,28.17 88.46,17.78 67.69,16.15 54.18,29.30 44.57,38.66 46.02,49.90 46.00,62.00 46.00,62.00 45.00,79.00 45.00,79.00 45.00,79.00 45.00,106.00 45.00,106.00 Z"/></svg></div></div>';
            let content= document.createElement('div');
            content.innerHTML= '<style>#pth1{fill:'+c[1]+'!important;}#fly div svg{height:25px;color:'+c[3]+' !important}#fly{position:fixed;bottom:-90px;'+((f==0)?"left":"right")+':-90px;padding:0!important;margin:0;z-index: 1000000;}.circular-menu{width:300px;height:300px;margin:0 auto;position:relative;}.circle{'+((f==1)?"transform: rotateZ(-90deg);":"")+'width:300px;height:300px;opacity:0;visibility:hidden;border-radius:50%;background-color:' + c[4] + '!important;}.open.circle{opacity:1;visibility:visible!important;}.circle div{text-decoration:none;background-color:' + c[2] + '!important;color:' + c[2] + '!important;display:flex;align-items:center;justify-content:center;border-radius:50%;height:46px;width:46px;margin-left:-23px;margin-top:-23px;position:absolute;text-align:center}#fly_btn{top:calc(50% - 25px);left:calc(50% - 25px);position:absolute;z-index:1000000;height:50px;width:50px;background-color:' + c[0] + '!important;color:' + c[1] + '!important;border-radius:50%;box-shadow:0 5px 20px rgb(0 0 0 / 15%);user-select:none;display:flex;justify-content:center;align-items:center}</style>'+
                '<div id="fly" style="bottom:'+pos[0]+';left:'+pos[1]+'>'+innerString+'</div>';
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