// photographer.html
// import data from json
async function getPhotographer() {
  try {
    const res = await fetch("./data/photographers.json");
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
}

// get photographer id from url
const photographerId = new URL(location.href).searchParams.get("id");

// photographer display
async function displayData(photographers) {
  const mainContainer = document.querySelector("#main");
  const photographersSection = document.querySelector(".photograph-header");
  const photographer = photographers.find((p) => p.id == photographerId);
  if (photographer) {
    // use the photographer data to generate the photographer card
    const photographerModel = userFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    const userImgDOM = photographerModel.getImgDom();
    const userPriceDom = photographerModel.getPriceContainerDom();
    photographersSection.appendChild(userCardDOM);
    photographersSection.appendChild(userImgDOM);
    mainContainer.appendChild(userPriceDom);
  }
}

// media display
async function displayMediaData(media, orderSort) {
  const mediaSection = document.querySelector(".photograph-media-section");
  // remove older media displayed if there is one
  mediaSection.innerHTML = "";
  mediaArray.length = 0;
  // sort media function
  sortMedia(media, orderSort);
  const photographerMedia = media.filter(
    (m) => m.photographerId == photographerId
  );
  photographerMedia.forEach((media) => {
    // use the media object to generate the media grid
    const mediaModel = mediaFactory(media);
    const userMediaCardDOM = mediaModel.getUserDataMediaCardDOM();
    mediaSection.appendChild(userMediaCardDOM);
  });
}

// sort media
function sortMedia(media, sortBy) {
  // sort by pop or date or title
  const sortFunctions = {
    Popularité: (a, b) => b.likes - a.likes,
    Date: (a, b) => new Date(b.date) - new Date(a.date),
    Titre: (a, b) => a.title.localeCompare(b.title),
  };
  media.sort(sortFunctions[sortBy]);
}

// likes incrementation
function incrementationLike(e) {
  let likeElement = e.currentTarget.previousSibling;
  let likeFix = likeElement.getAttribute("likes");
  let numberLike = parseInt(likeElement.textContent);
  let finalLike = 0;

  if (numberLike == likeFix) {
    finalLike = ++numberLike;
    likeElement.innerHTML = finalLike;
  } else {
    finalLike = --numberLike;
    likeElement.innerHTML = finalLike;
  }
  computeTotalLikes();
}

// compute total likes
function computeTotalLikes() {
  let array = document.querySelectorAll(".media-title-likes span");
  let priceContainerLikesTotal = document.querySelector(".price-container p");

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i].innerHTML);
    priceContainerLikesTotal.innerHTML = sum;
  }
}

async function init() {
  // get data from the fetch
  const { photographers, media } = await getPhotographer();

  const option = document.querySelectorAll('[role="option"]');
  option.forEach((li) => {
    li.addEventListener("click", (e) => {
      displayMediaData(media, e.currentTarget.dataset.filter);
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        displayMediaData(media, e.currentTarget.dataset.filter);
      }
    });
  });

  // display with data
  displayData(photographers);
  displayMediaData(media, "Popularité");
  computeTotalLikes();
}

init();
