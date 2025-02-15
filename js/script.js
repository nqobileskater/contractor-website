// Hero Section Slideshow
const hero = document.querySelector('.hero');
const images = [
  'url("images/hero1.jpg")',
  'url("images/hero2.jpg")',
  'url("images/hero3.jpg")'
];
let currentImageIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set the initial background
changeBackground();
