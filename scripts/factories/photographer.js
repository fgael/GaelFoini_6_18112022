// generate photographer card on index.
function photographerFactory(data) {
  // get data from the imported object in fetch of json
  const { name, portrait, city, country, tagline, price, id } = data;
  // define path for picture
  const picture = `assets/photographers/${portrait}`;

  // create user card in DOM
  function getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("aria-label", "carte photographe");
    // define DOM element
    const pathId = `./photographer.html?id=${id}`;
    const photographerLink = document.createElement("a");
    const photographerImg = document.createElement("img");
    const photographerName = document.createElement("h2");
    const photographerCity = document.createElement("div");
    const photographerTag = document.createElement("div");
    const photographerPrice = document.createElement("div");

    photographerLink.setAttribute("href", pathId);
    photographerLink.setAttribute("aria-label", name);
    article.appendChild(photographerLink);

    photographerImg.setAttribute("src", picture);
    photographerImg.setAttribute("alt", "portrait photographe");
    photographerLink.appendChild(photographerImg);

    photographerName.textContent = name;
    photographerLink.appendChild(photographerName);

    photographerCity.textContent = city + ", " + country;
    photographerCity.className = "photographer-city"
    article.appendChild(photographerCity);

    photographerTag.className = "tagline";
    photographerTag.textContent = tagline;
    article.appendChild(photographerTag);

    photographerPrice.className = "price";
    photographerPrice.textContent = price + "€/jour";
    article.appendChild(photographerPrice);

    return article;
  }
  return { getUserCardDOM };
}
