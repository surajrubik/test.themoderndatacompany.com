let els = document.getElementsByClassName('animated');
let labels = document.getElementsByClassName('label');

const SVG_ELEMENT = document.getElementById("label-circle");
const PATH_ELEMENT = document.getElementById("label-circle-path");

function drawCircle(p) {
  const STROKE_WIDTH = 4;
  const DIAMETER = window.innerHeight / 2;

  SVG_ELEMENT.setAttribute('viewbox', `0 0 ${DIAMETER} ${DIAMETER}`);
  SVG_ELEMENT.setAttribute('width', DIAMETER);
  SVG_ELEMENT.setAttribute('height', DIAMETER);
  PATH_ELEMENT.setAttribute('stroke-width', STROKE_WIDTH);

  if(p == 0) {
    PATH_ELEMENT.setAttribute('d', "");
    return;
  }
  let draw = [
    "M",
    DIAMETER/2 + (DIAMETER/2-STROKE_WIDTH/2) * Math.cos((p*359.9-90) * Math.PI/180.0),
    DIAMETER/2 + (DIAMETER/2-STROKE_WIDTH/2) * Math.sin((p*359.9-90) * Math.PI/180.0),
    "A",
    DIAMETER/2 - STROKE_WIDTH/2,
    DIAMETER/2 - STROKE_WIDTH/2,
    0,
    p * 360 > 180 ? 1 : 0,
    0,
    DIAMETER/2,
    STROKE_WIDTH/2,
  ].join(' ');
  
  PATH_ELEMENT.setAttribute('d', draw);
}

function playCircle() {
  let progress = 0;
  let start = Date.now();
  function loop() {
    let elapsed = (Date.now() - start) / 2000;
    let p = Math.min(1, Math.max(0, elapsed));
    drawCircle(p);
    if(elapsed < 1) {
      window.requestAnimationFrame(loop);
    }
  }
  loop();
}

let lastProgress = 0;
function setAnimationProgress() {
  let top = document.documentElement.scrollTop;
  let progress = Math.min(1, top / (window.innerHeight * 9));
  
  for(let el of els) {
    el.style.animationDelay = `-${progress}s`;
  }

  // Add `is-visible` class to labels when the
  // progress crosses 0.55.

  for(let label of labels) {
    label.classList.toggle('is-in-view', progress > 0.58);
    label.classList.toggle('is-past', progress > 0.64);
  }

  // Build the circle.

  let wasOutOfView = lastProgress < 0.58 || lastProgress > 0.64;
  let isInView = progress >= 0.58 && progress <= 0.64;
  if(wasOutOfView && isInView) {
    playCircle();
  }
  
  lastProgress = progress;
}

window.addEventListener('scroll', setAnimationProgress);
window.addEventListener('resize', setAnimationProgress);

setAnimationProgress();