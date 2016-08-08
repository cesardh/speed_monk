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

  var $w = $(window).width();
  var w = '' + $w + 'px';
  var p = parseInt($('.box').css('left'));
  var vel = -0.1;

  $('#wrapper').mousemove(function(event){

  	var mx = event.pageX;
  	var pos = p + mx * vel;

  	$('.text').text( 'parado en: ' + mx);
  	$('.box').css('left', pos + 'px');
  })



 });







