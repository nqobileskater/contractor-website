// Image Carousel Functionality
function moveSlide(button, direction) {
  const carousel = button.parentElement;
  const images = carousel.querySelectorAll("img");
  let activeIndex = 0;

  images.forEach((img, index) => {
    if (img.classList.contains("active")) {
      activeIndex = index;
      img.classList.remove("active");
    }
  });

  let newIndex = activeIndex + direction;
  if (newIndex < 0) newIndex = images.length - 1;
  if (newIndex >= images.length) newIndex = 0;

  images[newIndex].classList.add("active");
}

// Full-Screen Image Viewer
function openViewer(imageSrc) {
  const viewer = document.getElementById("image-viewer");
  const fullImage = document.getElementById("full-image");
  fullImage.src = imageSrc;
  viewer.style.display = "flex";
}

function closeViewer() {
  const viewer = document.getElementById("image-viewer");
  viewer.style.display = "none";
}

// Attach click event to images
document.querySelectorAll(".image-carousel img").forEach((img) => {
  img.addEventListener("click", () => openViewer(img.src));
});
