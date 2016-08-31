function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(100,20,200);
}


function draw() {
  strokeWeight(5);
  stroke(255);
  point(mouseX, mouseY);
}