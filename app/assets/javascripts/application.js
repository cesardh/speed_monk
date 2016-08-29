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

var globoPlay,
    logo,
    monje,
    templo,
    bambu2,
    globoInfo,
    juegos;

var globo = [];

$(document).ready(function(){
  $("body").append('<div id="pre-load-web">cargando</div>');
  $("#pre-load-web").css({
    height: "100%",
    background: "white",
    width: '100%',
    position: "absolute",
    zIndex: "1000"});

  var grupoParallax = [
    templo = new Parallax( $('.templo'), -0.02),
    logo = new Parallax( $('.logo'), -0.07),
    monje = new Parallax( $('.monje'), -0.09),
    bambu1 = new Parallax( $('.bambu1'), -0.15),
    bambu2 = new Parallax( $('.bambu2'), -0.15),

    globoVideo = new Parallax( $('#g_video'), -0.12),
    globoPlay = new Parallax( $('#g_play'), -0.12),
    globoInfo = new Parallax( $('#g_info'), -0.08),
    juegos = new Parallax( $('.option'), -0.05)
  ];


  var globoPos = [
    [10, 30, 2],
    [6, 37, 10],
    [4, 60, 13],
    [5, 25, 60]
  ];

  for (var i = 0; i < globoPos.length; i++) {
    $('.globo' + i).css({
      width: globoPos[i][0] + '%',
      right: globoPos[i][1] + '%',
      top: globoPos[i][2] + '%'
    });

    var random = Math.random() * 0.15 + 0.05;
    globo[i] = new Parallax( $('.globo' + i)  , -random);
  };

  $('#wrapper').mousemove(function(event){
    var wcenter = $(window).width()/2;
    var hcenter = $(window).height()/2;
    mx = event.pageX - wcenter;
    my = event.pageY - hcenter;

    for (var i = 0; i < grupoParallax.length; i++) {
      grupoParallax[i].animar();
    }
    for (var i = 0; i < globo.length; i++) {
      globo[i].animar()
    }
  });

  setInterval(draw,40);
  function draw(){
    for (var i = 0; i < grupoParallax.length; i++) {
      grupoParallax[i].mostrar();
    }
    for (var i = 0; i < globo.length; i++) {
      globo[i].mostrar()
    }
  }

  var bol = true;
  $('#g_play').on('click', function(){
    scrolling(bol);
    bol = !bol;
  });

  var clickAb = false;
  $('#g_info').click(function(event){
    if (clickAb == false) {
      $('#about').slideDown();
      desplazar(globoInfo, 200, 0, 2000);
      clickAb = !clickAb;
    }else if (clickAb == true) {
      $('#about').slideUp();
      desplazar(globoInfo, 0, 0, 2000);
      clickAb = !clickAb;
    }
  });

  var clickVid = false;
  $('#g_video').click(function(){
    if (clickVid == false) {
      var wh = $(window).height();
      var ww = $(window).width();
      $('#video').fadeIn(function(){
        $('#promo').play();
      });
      desplazar(globoVideo, ww/2, -wh/3, 2000);
      clickVid = !clickVid;
    }else if (clickVid == true) {
      $('#video').remove();
      desplazar(globoVideo, 0, 0, 2000);
      clickVid = !clickVid;
    }
  });

  $('#legal').mouseenter(function(event){
    $('div', this).slideDown(function(){
      $(this).mouseleave(function(){
        $(this).slideUp();
      });
    });
  });

  $('#idioma').hover(function(event){
    event.preventDefault();
    $('ul', this).slideDown();
  },function(){
    $('ul', this).slideUp();
  });

});


$(window).load(function() {
  $("#pre-load-web").delay(0).fadeOut(1000);
});



var mx;
var my;

function Parallax(elem, vel){
  this.vx = vel;
  this.vy = vel/2
  this.elem = elem;
  this.elemX = this.elem.position().left;
  this.elemY = this.elem.position().top;
  this.posX;
  this.posY;
  this.trX = 0;
  this.trY = 0;

  this.animar = function(){
    this.posX = this.elemX + mx * this.vx;
    this.posY = this.elemY + my * this.vy;
  }

  this.mostrar = function(){
    this.elem.css({
      left: this.posX + this.trX + 'px',
      top: this.posY + this.trY + 'px'
    });
  }
}

function desplazar(objeto, left, top, time) {
  objeto.elem.animate({
    countL: left,
    countT: top
  },
  {
    duration: time,
    step: function(now, fx){
      if (fx.prop == 'countL') {
        objeto.trX = fx.now;
      } else if(fx.prop == 'countT'){
        objeto.trY = fx.now;
      }
    }
  });
}

function scrolling(boolean){
  var ww = $(window).width();

  if (boolean == true) {

    var calcW = ww/4;
    desplazar(globoPlay, calcW, 0, 2500);
    desplazar(logo, ww/1.2, -10, 1500);
    desplazar(monje, -1000, 0 , 1500);
    desplazar(templo, 0, -1000 , 1500)
    desplazar(bambu2, 100, 0, 3000);
    for (var i = 0; i < globo.length; i++) {
      desplazar(globo[i], 0, -400, 1500);
    }
    $('.logo').animate({width: '35%'},1000);
    $('#wrapper').animate({scrollLeft: ww + 'px'}, 2500);
  }
  else if (boolean == false) {
    desplazar(globoPlay, 0, 0, 2500);
    $('#wrapper').animate({scrollLeft: '0'}, 2500);
    $('.logo').animate({width: '45%'},1000);
    desplazar(logo, 0, 0, 2000);
    desplazar(monje, 0, 0 , 3200);
    desplazar(templo, 0, 0 , 3000);
    desplazar(bambu2, 0, 0, 3000);
    for (var i = 0; i < globo.length; i++) {
      desplazar(globo[i], 0, 0, 3000);
    }
  };
}










