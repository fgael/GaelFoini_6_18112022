// photographer.html
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

// get photographer id from url
const photographerId = new URL(location.href).searchParams.get("id");

// photographer display
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    // if photographer id in data match
    if (photographer.id == photographerId) {
      // user factory to generate photographer card
      const photographerModel = userFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      const userImgDOM = photographerModel.getImgDom();
      photographersSection.appendChild(userCardDOM);
      photographersSection.appendChild(userImgDOM);
    }
  });
}

// media display
async function displayMediaData(media) {
  const mediaSection = document.querySelector(".photograph-media-section");

  mediaArray.length = 0;
  media.forEach((media) => {
    // if media id in data match with photographer
    if (media.photographerId == photographerId) {
      // media factory to generate media grid
      const mediaModel = mediaFactory(media);
      const userMediaCardDOM = mediaModel.getUserDataMediaCardDOM();
      mediaSection.appendChild(userMediaCardDOM);
    }
  });
}

async function init() {
  // get data from the fetch
  const { photographers, media } = await getPhotographer();
  // display with data
  displayData(photographers);
  displayMediaData(media);
}

init();
