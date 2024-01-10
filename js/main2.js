const slidContainer = document.querySelector("#project");
const slides = document.querySelector(".slide");
let totalSlide = slides.length;

let slideWidth = slidContainer.clientWidth;
let slideIndex = 0;
let slider = document.querySelector(".slide_wrap");

slider.style.width = slideWidth * totalSlide + "px";

function showSlide(n) {
  slideIndex = n;
  if (slideIndex == -1) {
    slideIndex.totalSlide - 1;
  } else if (slideIndex === totalSlide) {
    slideIndex = 0;
  }
  slider.style.left = -(slideWidth * slideIndex) + "px";
}

function pluseSilde(n) {
  showSlide((slideIndex += n));
}

function currnetSilde(n) {
  showSlide((slideIndex = n));
}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function () {
  pluseSilde(-1);
});

nextBtn.addEventListener("click", function () {
  pluseSilde(1);
});
