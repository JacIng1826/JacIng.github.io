// user events
// Jacky, Zhou
// Feb/7/2025
//
// global variable declarations
let tSize = 10;
let x;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  rectMode(CENTER);
}

function draw() {
  background(220);
  //print("Current Frame:" + frameCount); // console.log()
  fill("green");
  textSize(tSize);
  text(mouseX + "," + mouseY + " " + mouseButton, mouseX, mouseY);
  
  fill(255, 200, 100);
  square(x, 200, 50, 5);

  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
    if (x<0){
      x = width;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
    if (x>width){
      x=0;
    }
  }
}

function mousePressed(){
  tSize = random(5,100);

}