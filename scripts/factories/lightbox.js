// lightbox factory
const lightbox = document.querySelector(".lightbox");

async function lightboxFactory(data) {
  // get data from the imported object in fetch of json
  const { title, image, video } = data;
  
  // define path for media
  const videoFile = `assets/medias/${video}`;
  const picture = `assets/medias/${image}`;

  lightbox.setAttribute("role", "dialog")
  lightbox.setAttribute("aria-hidden", "true")
  lightbox.setAttribute("tabindex","-1")

  if ("video" in data) {
    const video = document.createElement("video");
    video.setAttribute("src", videoFile);
    video.setAttribute("title", title);
    video.setAttribute("controls", "controls");
    video.setAttribute('tabindex', '0');
    lightbox.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", title);
    img.setAttribute('tabindex', '0');
    img.className = "media-lightbox";
    lightbox.appendChild(img);
  }

  const mediaName = document.createElement("h2");
  const previousButton = document.createElement("img");
  const nextButton = document.createElement("img");
  const closeButton = document.createElement("img");

  previousButton.setAttribute("tabindex","0");
  previousButton.setAttribute("src", "assets/icons/previous.svg");
  previousButton.id = "lightbox__prev";
  previousButton.setAttribute("aria-label", "Previous image");
  previousButton.addEventListener("click", prevContent);
  previousButton.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      prevContent();
    }
  });

  nextButton.setAttribute("tabindex","0");
  nextButton.setAttribute("src", "assets/icons/next.svg");
  nextButton.id = "lightbox__next";
  nextButton.setAttribute("aria-label", "Next image");
  nextButton.addEventListener("click", nextContent);
  nextButton.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      nextContent();
    }
  });

  closeButton.setAttribute("tabindex","0");
  closeButton.setAttribute("src", "assets/icons/closemod.svg");
  closeButton.id = "lightbox__close";
  closeButton.setAttribute("aria-label", "Close modale");
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

  // add all the elements inside modal which you want to make focusable
  const  focusableElements =
  '[tabindex]';

  const firstFocusableElement = lightbox.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = lightbox.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


  document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
  if (!isTabPressed) {
  return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
  if (document.activeElement === firstFocusableElement) {
    lastFocusableElement.focus(); // add focus for the last focusable element
    e.preventDefault();
  }
  } else { // if tab key is pressed
  if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
    firstFocusableElement.focus(); // add focus for the first focusable element
    e.preventDefault();
  }
  }
  });

firstFocusableElement.focus();
}