function openLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
  lightbox.innerHTML = "";
}
