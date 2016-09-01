var particulas = [];
var part;

function setup() {

  createCanvas(innerWidth, innerHeight);
  background(208,97,57);

  part = new Particula(mouseX,mouseY)
}


function draw() {

  background(208,97,57);
  part.update();
  part.show();

}



function Particula(x, y){
  this.x = x;
  this.y = y;
  this.fade = 100;

  this.history = [];

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;

    for (var i = 0; i < this.history.length; i++){
      this.history[i].x += random(-1,1);
      this.history[i].y += random(-1,1);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 20)
    this.history.splice(0,1);
  }

  this.show = function() {

    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];

      fill(255,160,100, 20);
      stroke(255, this.fade);
      strokeWeight(1);
      ellipse(pos.x, pos.y, i+30, i+30);

      noFill();
      strokeWeight(1);
      //strokeJoin(ROUND);
      stroke(255, this.fade);

      vertex(pos.x, pos.y);
    }
    endShape();

  }
}