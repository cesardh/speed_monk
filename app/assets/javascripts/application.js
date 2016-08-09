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

  var personaje = new Parallax( $('.uno'), -0.08);
  var logo = new Parallax( $('.dos'), -0.1);
  var fondo = new Parallax( $('.tres'), -0.3);


  $('#wrapper').mousemove(function(event){

  	mx = event.pageX;
    $('.text').text( 'parado en: ' + mx);

    personaje.mover();
    logo.mover();
    fondo.mover();
  })


 });

var mx;

function Parallax(elem, vel){
  this.v = vel;
  this.elem = elem;
  this.elemPos = parseInt(this.elem.css('left'));

  this.mover = function(){
    this.posX = this.elemPos + mx * vel;
    this.elem.css('left', this.posX + 'px');
  }
}









