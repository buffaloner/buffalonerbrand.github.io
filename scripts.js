const images = document.querySelectorAll('.hero-background img');
let currentImgIndex = 0;

function nextImg() {
  images[currentImgIndex].style.opacity = 0;
  currentImgIndex = (currentImgIndex + 1) % images.length;
  images[currentImgIndex].style.opacity = 1;
}

setInterval(nextImg, 6000);
