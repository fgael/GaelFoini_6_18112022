//Mettre le code JavaScript lié à la page photographer.html
// import data from json

async function getPhotographer() {
  return fetch("./data/photographers.json")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

const photographerId = new URL(location.href).searchParams.get("id");
console.log(photographerId);

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    if (photographer.id == photographerId) {
      const photographerModel = userFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
      const userImgDOM = photographerModel.getImgDom();
      photographersSection.appendChild(userImgDOM);
    }
  });
}

async function displayMediaData(media) {
  const mediaSection = document.querySelector(".photograph_media_section");
  media.forEach((media) => {
    if (media.photographerId == photographerId) {
      const mediaModel = mediaFactory(media);
      const userMediaCardDOM = mediaModel.getUserDataMediaCardDOM();
      mediaSection.appendChild(userMediaCardDOM);
    }
  });
}

async function init() {
  const { photographers, media } = await getPhotographer();
  displayData(photographers);
  displayMediaData(media);
}

init();
