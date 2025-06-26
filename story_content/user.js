function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Sl7kNwAM73":
        Script1();
        break;
  }
}

function Script1()
{
  var element = document.documentElement;


if (element.requestFullscreen) {
    
element.requestFullscreen();
} 
else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();

} else if (element.webkitRequestFullscreen) { // Safari, Chrome
    element.webkitRequestFullscreen();

} else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen();

}

}

