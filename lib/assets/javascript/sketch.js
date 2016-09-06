var particulas = [];
var part, img, monje;
var flotar = 0;

function setup() {

  createCanvas(innerWidth, innerHeight);
  img = loadImage("/assets/gradLoading.png");
  image(img, 0, 0, innerWidth, innerHeight);
  monje = loadImage("/assets/monje-load.png");

  part = new Particula()
}


function draw() {
  image(img, 0, 0, innerWidth, innerHeight);
  part.update();
  part.show();

  push();
    translate(innerWidth/2, innerHeight/2)
    blendMode(MULTIPLY);
    tint(255, 190);
    image(monje, -monje.width/4, -50 + flotar, monje.width/2, monje.height/2);

    fill(0, 50 + flotar);
    ellipse(-5  , 180, 100 - flotar/2, 40 - flotar/2);
  pop();
  flotar = sin(frameCount*0.05)*8;

}

function Particula(){
  this.x;
  this.y;
  this.history = [];

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;

    for (var i = 0; i < this.history.length; i++){
      this.history[i].x += random(-2,2);
      this.history[i].y += random(-2,2);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 40)
    this.history.splice(0,1);
  }

  this.show = function() {

    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];

      fill(255, mouseY*0.005*i, mouseX*0.002*i, 100);
      noStroke();
      ellipse(pos.x, pos.y, i+10, i+10);
    }
    endShape();

  }
}
