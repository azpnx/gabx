// Função do sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

// type.js
$(".writed").typed({

  strings: [
    "Desenvolvedor",
    "HTML5",
    "Bootstrap",
    "Materialize.css",
    "JavaScript"
  ],

  stringsElement: null,
  // Velocidade de Digitação
  typeSpeed: 50,
  // Tempo antes de começar
  startDelay: 50,
  // backspacing speed
  backSpeed: 0,
  // shuffle the strings
  shuffle: false,
  // time before backspacing
  backDelay: 2000,
  // Fade out instead of backspace
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500, // milliseconds
  // loop
  loop: true,
  // false = infinite
  loopCount: false,
  // show cursor
  showCursor: true,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html'
  
});

// Parallax

$(document).ready(function(){
  $('.parallax').parallax();
});
