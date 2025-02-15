// Hero Section Slideshow
const slideshow = document.querySelector('.slideshow');
const images = [
  'url("images/hero1.jpg")',
  'url("images/hero2.jpg")',
  'url("images/hero3.jpg")'
];
let currentImageIndex = 0;

function changeBackground() {
  slideshow.style.backgroundImage = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background every 3 seconds (3000 milliseconds)
setInterval(changeBackground, 3000);

// Set the initial background
changeBackground();
