// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree.




$(document).ready(function() {

  var templo = new Parallax( $('.templo'), -0.04);
  var logo = new Parallax( $('.logo'), -0.07);
  var monje = new Parallax( $('.monje'), -0.09);
  var globoVideo = new Parallax( $('.g_video'), -0.12);
  var globoPlay = new Parallax( $('.g_play'), -0.2);
  var globo = [];



  for (var i = 0; i < 5; i++) {
    var random = Math.random() * 0.15 + 0.05;
    globo[i] = new Parallax( $('.globo' + i)  , -random);
  };



  $('#wrapper').mousemove(function(event){

  	mx = event.pageX;
  	my = event.pageY;

    monje.mover();
    logo.mover();
    templo.mover();
    globoVideo.mover();
    globoPlay.mover();

    for (var i = 0; i < globo.length; i++) {
      globo[i].mover()
    }

  })


});

var mx;
var my;

function Parallax(elem, vel){
  this.v = vel;
  this.elem = elem;
  this.elemX = parseInt(this.elem.css('left'));
  this.elemY = parseInt(this.elem.css('top'));

  this.mover = function(){
    this.posX = this.elemX + mx * vel;
    this.posY = this.elemY + my * vel*0.6;

    this.elem.css('left', this.posX + 'px');
    this.elem.css('top', this.posY + 'px');
  }
}









