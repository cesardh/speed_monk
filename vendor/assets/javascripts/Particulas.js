function Particula(x, y){
  this.x = x;
  this.y = y;

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

    if (this.history.length > 40)
    this.history.splice(0,1);
  }

  this.show = function() {

    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];

      //fill(255, fade);
      stroke(255, fade);
      strokeWeight(1);
      ellipse(pos.x, pos.y, i, i);

      noFill();
      strokeWeight(1);
      //strokeJoin(ROUND);
      stroke(255, fade);

      vertex(pos.x, pos.y);
    }

    endShape();

  }

}