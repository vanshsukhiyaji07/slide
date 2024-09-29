const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentSlide = 0;
const intervelTime = 3000;
let slideIntervel;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
}


function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}


function startSlider() {
  slideIntervel = setInterval(nextSlide, intervelTime);
}


function stopSlider() {
  clearInterval(slideIntervel);
}


document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  stopSlider();
  startSlider();
});

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  stopSlider();
  startSlider();
});

document.querySelector(".slider").addEventListener("mouseenter", stopSlider);

document.querySelector(".slider").addEventListener("mouseleave", startSlider);

document.addEventListener("keydown", (event) => {
  if(event.key === "ArrowRight") {
    nextSlide();
    stopSlider();
    startSlider();
  } else if (event.key === "ArrowLeft") {
    prevSlide();
    stopSlider();
    startSlider();
  }
});




startSlider();

const model = document.getElementById("pop");
const exitModelBtn = document.getElementById("exit-btn");

setTimeout(() => {
  model.style.display = "flex";
}, 4000);

exitModelBtn.addEventListener("click", () => {
  model.style.display = "none";
});