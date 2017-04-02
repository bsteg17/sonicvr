var frames = 0;
var secondBegin = 0;
var showDiv = true;
var fpsLogDiv = null;

function fps_tick(time) {
  frames++;
  if (time > secondBegin + 1000) { 
    console.log(frames);
    console.log(fpsLogDiv);
    if (!fpsLogDiv) { fpsLogDiv = document.getElementById("fps-log") }
    fpsLogDiv.innerHTML = frames;
    frames = 0;
    secondBegin = time;
  }
}
