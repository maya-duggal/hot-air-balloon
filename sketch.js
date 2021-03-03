let x = 100;
let y = 100;

var position, database;
function preload(){
backgroundImg=loadImage("pro-c35 images/Hot Air Ballon-01.png")
balloon=loadImage("pro-c35 images/Hot Air Ballon-02.png")
}

function setup() {
  database=firebase.database();
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  background(backgroundImg);
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

image(balloon, x, y);
balloon.resize(50, 100);
  
}