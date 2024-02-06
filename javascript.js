var countDownDate = new Date("Apr 24, 2024 16:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="cuenta " ><div>
    <div class=" txt-pink">${days}</div><div class="cuenta-regresiva"> días</div>
    </div>
    <div>
    <div class=" txt-pink">${hours}</div><div class="cuenta-regresiva"> horas</div>
    </div>
    <div>
    <div class=" txt-pink">${minutes}</div><div class="cuenta-regresiva"> min</div>
    </div>
    </div>
    </div>
    `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// -------------------------------AUDIO
const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

function abrir() {
  document.getElementById("sobre-arriba").classList.add("animate__fadeOutUp");
  document.getElementById("sobre-abajo").classList.add("animate__slideOutDown");
  document.getElementById("btn-open").classList.remove("animate__infinite");
  document.getElementById("btn-open").classList.add("animate__fadeOut");
  document.getElementById("pulsa").classList.add("hide");
  audio.play();
  setTimeout(function () {
    document.getElementById("hoja-principal").classList.add("hide");
    document.getElementById("invitacion").classList.remove("hide");
    document.getElementById("play").classList.remove("hide");
    document.getElementById("nombre").classList.add("animate__fadeInDown");
    document.getElementById("img-principal").classList.add("animate__fadeIn");
  }, 2300);
}

// Animate-image
let animateImage = document.querySelectorAll(".animate-image");

function showImage() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateImage.length; i++) {
    let high = animateImage[i].offsetTop;
    if (high - 120 < scrollTop) {
      animateImage[i].style.opacity = 1;
      animateImage[i].classList.add("appear-image");
    }
  }
}

window.addEventListener("scroll", showImage);

// Animate-up
let animateText = document.querySelectorAll(".animate-text");

function showText() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateText.length; i++) {
    let high = animateText[i].offsetTop;
    if (high < scrollTop) {
      animateText[i].style.opacity = 1;
      animateText[i].classList.add("animate__fadeInUp");
    }
  }
}

window.addEventListener("scroll", showText);

// animate-right
let animateRight = document.querySelectorAll(".animate-right");

function showRight() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateRight.length; i++) {
    let high = animateRight[i].offsetTop;
    if (high - 500 < scrollTop) {
      animateRight[i].style.opacity = 1;
      animateRight[i].classList.add("appear-right");
    }
  }
}

window.addEventListener("scroll", showRight);

// animate-left
let animateLeft = document.querySelectorAll(".animate-left");

function showLeft() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateLeft.length; i++) {
    let high = animateLeft[i].offsetTop;
    if (high - 600 < scrollTop) {
      animateLeft[i].style.opacity = 1;
      animateLeft[i].classList.add("appear-left");
    }
  }
}

window.addEventListener("scroll", showLeft);
