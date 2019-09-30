function openB(){
  let flt=document.getElementById("fly");
  if(flt.classList.contains("open"))
    flt.classList.remove("open");
  else
    flt.classList.add("open");
}
function openFS() {
  let fs=document.getElementById("fs_action");
  if (fs.classList.contains("fullscreen")) {
    closeFullscreen();
    fs.classList.remove("fullscreen");
  } else{ 
    openFullscreen();
    fs.classList.add("fullscreen");
  }
}
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { 
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { 
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
