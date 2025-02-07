// Coordinte System and user events
// Jacky, Zhou
// Feb/6/2025
//
// not run to completion, but interactive programs...



function setup() {
  // runs ONCE, at the very begining
  createCanvas(500, 500);
}

function draw() {
  // draw loop, repeats over and over forever...
  // - target of 60 fps
  // A new image is drawn at the bottom of the loop
  background(50);
  fiveCircles();
}

function fiveCircles(){
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(3);
  circle(0,0,100);
  
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(3);
  circle(500,0,100);

  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(3);
  circle(0,500,100);

  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(3);
  circle(500,500,100);

  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(3);
  circle(250,250,100);

  noStroke();
  fill(255,0,0);
  circle(mouseX, mouseY, 30);
}