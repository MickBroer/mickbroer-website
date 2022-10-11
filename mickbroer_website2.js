var paragraph;
var audio = [];
var sound;
var actionFrame;
let soundfile;
let activate = 0;
let numClicks = 0;

function preload() {
  soundFormats('wav');
  for (let i = 1; i < 6; i++) {
      audio[i] = loadSound('files/audio/' + i + '.wav');
  }
}

function setup() {
  paragraph = select('#generate');
  paragraph.mousePressed(click);
  paragraph.mouseOver(bgChangeMouseOver);
  paragraph.mouseOut(bgChangeMouseOut);
}


function draw() {
  let sfRand = round(random(1, 5));
  let soundfile;
  if (frameCount === actionFrame) {
    soundfile = audio[sfRand];
    soundfile.pan(0);
  
    soundfile.play(0, random(0.8, 1.2));
    performAction();
  }
}

function bgChangeMouseOver() {
  if (numClicks %2 == 0){
      paragraph.style('background-color', 'rgb(200, 200, 200)'); 
    }
}

function bgChangeMouseOut() {
  if (numClicks %2 == 0){
      paragraph.style('background-color', 'rgb(255, 255, 255)'); 
  }
}

function performAction() {
  actionFrame = frameCount + round(random(10, 200));
  
}

function click() {
  if (numClicks %2 == 0) { 
    actionFrame = frameCount + 5;
    paragraph.style('background-color', 'rgb(255, 204, 204)');
  }
  else {
    actionFrame = 0;
    paragraph.style('background-color', 'rgb(255, 255, 255)'); 
  }
  numClicks = numClicks + 1;
}