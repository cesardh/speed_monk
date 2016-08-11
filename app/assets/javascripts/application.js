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

  var templo = new Parallax( $('.uno'), -0.04);
  var logo = new Parallax( $('.dos'), -0.07);
  var personaje = new Parallax( $('.tres'), -0.1);
  var globoPlay = new Parallax( $('.play'), -0.14);
  var globoVideo = new Parallax( $('.video'), -0.1);

  var globos = new Parallax( $('.globos'), -0.1);



  $('#wrapper').mousemove(function(event){

  	mx = event.pageX;
  	my = event.pageY;

    personaje.mover();
    logo.mover();
    templo.mover();
    globoPlay.mover();
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









