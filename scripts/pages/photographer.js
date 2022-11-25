//Mettre le code JavaScript lié à la page photographer.html// import data from json
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
  
  async function displayData(photographers) {
    const headerSection = document.querySelector(".photograph-header")
    photographers.forEach((photographer) => {
      const photographerModel = headerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      headerSection.appendChild(userCardDOM);
    });
  }
  
  
  
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
  }
  
  init();
  