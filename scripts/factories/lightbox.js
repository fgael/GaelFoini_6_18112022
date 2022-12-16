// lightbox factory
async function lightboxFactory(data) {
  const { title, image, video } = data;
  
  const videoFile = `assets/medias/${video}`;
  const picture = `assets/medias/${image}`;

  const lightbox = document.querySelector(".lightbox");

  if ("video" in data) {
    const video = document.createElement("video");
    video.setAttribute("src", videoFile);
    video.setAttribute("title", title);
    video.setAttribute("controls", "controls");
    lightbox.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", title);
    img.className = "media-lightbox";
    lightbox.appendChild(img);
  }

  const mediaName = document.createElement("h2");
  const previousButton = document.createElement("img");
  const nextButton = document.createElement("img");
  const closeButton = document.createElement("img");

  previousButton.setAttribute("src", "assets/icons/previous.svg");
  previousButton.id = "lightbox__prev";
  previousButton.setAttribute("aria-label", "Previous image");
  previousButton.addEventListener("click", prevContent);
  previousButton.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      prevContent();
    }
  });

  nextButton.setAttribute("src", "assets/icons/next.svg");
  nextButton.id = "lightbox__next";
  nextButton.setAttribute("aria-label", "Next image");
  nextButton.addEventListener("click", nextContent);
  nextButton.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      nextContent();
    }
  });

  closeButton.setAttribute("src", "assets/icons/closemod.svg");
  closeButton.id = "lightbox__close";
  closeButton.setAttribute("aria-label", "Close dialog");
  closeButton.addEventListener("click", closeLightbox);
  closeButton.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      closeLightbox();
    }
  });

  lightbox.setAttribute("aria-label", "image closeup view");
  mediaName.textContent = title;
  
  lightbox.appendChild(mediaName);
  lightbox.appendChild(previousButton);
  lightbox.appendChild(nextButton);
  lightbox.appendChild(closeButton);

}
