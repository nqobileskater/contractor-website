// Image Carousel Functionality
function moveSlide(button, direction) {
  const carousel = button.parentElement;
  const carouselInner = carousel.querySelector(".carousel-inner");
  const items = carouselInner.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let activeIndex = 0;

  items.forEach((item, index) => {
    if (item.classList.contains("active")) {
      activeIndex = index;
      item.classList.remove("active");
    }
  });

  let newIndex = activeIndex + direction;
  if (newIndex < 0) newIndex = totalItems - 1;
  if (newIndex >= totalItems) newIndex = 0;

  items[newIndex].classList.add("active");
  carouselInner.style.transform = `translateX(-${newIndex * 100}%)`;
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
document.querySelectorAll(".carousel-item img").forEach((img) => {
  img.addEventListener("click", () => openViewer(img.src));
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
