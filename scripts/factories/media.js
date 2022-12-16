// photographer media factory

// user factory
function userFactory(data) {
  // get data from the imported object in fetch of json
  const { name, portrait, city, country, tagline, price, id } = data;
  // define path for picture
  const picture = `assets/photographers/${portrait}`;

  // create user card in DOM
  function getUserCardDOM() {
    const article = document.createElement("article");
    const photographerName = document.createElement("h1");
    const photographerCity = document.createElement("div");
    const photographerTag = document.createElement("div");
    
    photographerName.textContent = name;
    article.appendChild(photographerName);
    
    photographerCity.className = "photographer-city"
    photographerCity.textContent = city + ", " + country;
    article.appendChild(photographerCity);
    
    photographerTag.className = "tagline";
    photographerTag.textContent = tagline;
    article.appendChild(photographerTag);

    return article;
  }
  // create user img in DOM
  function getImgDom() {
    const imgContainer = document.createElement("div");
    const photographerImg = document.createElement("img");

    imgContainer.setAttribute("class", "img_container");
    photographerImg.setAttribute("src", picture);
    photographerImg.setAttribute("alt", "portrait photographe");
    imgContainer.appendChild(photographerImg);

    return imgContainer;
  }

  return { getUserCardDOM, getImgDom };
}

// define media array and currentIndex for lightbox navigation
let mediaArray = [];
let currentIndex = 0;

// media factory
function mediaFactory(data) {
  // get data from the imported object in fetch of json
  const { image, title, video } = data;
  // define path for video
  const videoFile = `assets/medias/${video}`;
  // define path for picture
  const picture = `assets/medias/${image}`;

  const article = document.createElement("article");
  const div = document.createElement("div");

  // create media img and video in DOM
  function getUserDataMediaCardDOM() {
    if ("video" in data) {
      const video = document.createElement("video");

      video.setAttribute("src", videoFile);
      video.setAttribute("title", title);

      div.appendChild(video);
      article.appendChild(div);

      video.addEventListener("click", () => {
        lightboxFactory(data);
        openLightbox();
        currentIndex = mediaArray.indexOf(data);
      });

      video.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          lightboxFactory(data);
          openLightbox();
          currentIndex = mediaArray.indexOf(data);
        }
      });
    } else {
      const img = document.createElement("img");

      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      img.className = "media-image";

      div.appendChild(img);
      article.appendChild(div);

      img.addEventListener("click", () => {
        openLightbox();
        lightboxFactory(data);
        currentIndex = mediaArray.indexOf(data);
      });

      img.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          openLightbox();
          lightboxFactory(data);
          currentIndex = mediaArray.indexOf(data);
        }
      });
    }

    mediaArray.push(data);

    return article;
  }
  return { getUserDataMediaCardDOM };
}

// lightbox next content
function nextContent() {
  if (currentIndex >= 0 && currentIndex < mediaArray.length - 1) {
    const lightbox = document.querySelector(".lightbox");
    lightbox.innerHTML = "";
    currentIndex++;
    lightboxFactory(mediaArray[currentIndex]);
  }
}
// lightbox previous content
function prevContent() {
  if (currentIndex >= 1) {
    const lightbox = document.querySelector(".lightbox");
    lightbox.innerHTML = "";
    currentIndex--;
    lightboxFactory(mediaArray[currentIndex]);
  }
}
