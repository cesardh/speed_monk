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

  $('#layer-one').mousemove(function (e) {
          parallax(e, this, 1);
          parallax(e, document.getElementById('layer-two'), 2);
          parallax(e, document.getElementById('layer-three'), 3);
          parallax(e, document.getElementById('slider'), 0);
      });
  });



  function parallax(e, target, layer) {
      var layer_coeff = 10 / layer;
      var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
      var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
      $(target).offset({ top: y ,left : x });
  };





