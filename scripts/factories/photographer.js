function photographerFactory(data) {
  // get data from the imported object in fetch of json
  const { name, portrait, city, country, tagline, price, id } = data;
  // define path for picture
  const picture = `assets/photographers/${portrait}`;

  // create user card in DOM
  function getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("aria-label", "carte photographe");
    const link = document.createElement("a");
    const pathId = `./photographer.html?=${id}`;
    link.setAttribute("href", pathId);
    link.setAttribute("aria-label", "lien vers artiste");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "portrait photographe");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    const divTag = document.createElement("div");
    divTag.setAttribute("id", "tagline");
    divTag.textContent = tagline;
    const divPrice = document.createElement("div");
    divPrice.setAttribute("id", "price");
    divPrice.textContent = price + "€/jour";
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(divTag);
    article.appendChild(divPrice);

    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
