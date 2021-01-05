let snare1 = document.querySelector('#note1');
let snare2 = document.querySelector('#note2');
let snare3 = document.querySelector('#note3');

let snare4 = document.querySelector('#note4');
let snare5 = document.querySelector('#note5');
let snare6 = document.querySelector('#note6');

let snare7 = document.querySelector('#note7');
let snare8 = document.querySelector('#note8');
let snare9 = document.querySelector('#note9');

let type = document.querySelector('#drum-type');

snare1.addEventListener("click", one);
snare2.addEventListener("click", two);
snare3.addEventListener("click", three);

snare4.addEventListener("click", four);
snare5.addEventListener("click", five);
snare6.addEventListener("click", six);

snare7.addEventListener("click", seven);
snare8.addEventListener("click", eight);
snare9.addEventListener("click", nine);

function one() {
  let drum = new Audio('js/cymbal1.mp3');
  drum.play();
  type.innerHTML = "Cymbal 1";
}
function two() {
  let drum = new Audio('js/cymbal2.mp3');
  drum.play();
}
function three() {
  let drum = new Audio('js/cymbal3.mp3');
  drum.play();
}

function four() {
  let drum = new Audio('js/Snare.mp3');
  drum.play();
}
function five() {
  let drum = new Audio('js/Sticks.mp3');
  drum.play();
}
function six() {
  let drum = new Audio('js/bass.wav');
  drum.play();
}

function seven() {
  let drum = new Audio('js/Floor1.mp3');
  drum.play();
}
function eight() {
  let drum = new Audio('js/Floor2.mp3');
  drum.play();
}
function nine() {
  let drum = new Audio('js/Floor3.mp3');
  drum.play();
}

function keyControl(e) {
  if (e.keyCode === 81) {
    one();
  }
  if (e.keyCode === 87) {
    two();
  }
  if (e.keyCode === 69) {
    three();
  }
  if (e.keyCode === 65) {
    four();
  }
  if (e.keyCode === 83) {
    five();
  }
  if (e.keyCode === 68) {
    six();
  }
  if (e.keyCode === 90) {
    seven();
  }
  if (e.keyCode === 88) {
    eight();
  }
  if (e.keyCode === 67) {
    nine();
  }
}
document.addEventListener("keyup", keyControl);
