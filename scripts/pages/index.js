// index.html
// import data from json
async function getPhotographers() {
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

// photographer display
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    // photographer factory to generate photographer card
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // get data from the fetch
  const { photographers } = await getPhotographers();
  // display with data
  displayData(photographers);
}

init();
