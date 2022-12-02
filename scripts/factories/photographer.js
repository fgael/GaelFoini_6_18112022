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
    const pathId = `./photographer.html?id=${id}`;
    link.setAttribute("href", pathId);
    link.setAttribute("aria-label", "lien vers artiste");
    article.appendChild(link);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "portrait photographe");
    link.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    link.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    article.appendChild(h3);

    const divTag = document.createElement("div");
    divTag.setAttribute("id", "tagline");
    divTag.textContent = tagline;
    article.appendChild(divTag);

    const divPrice = document.createElement("div");
    divPrice.setAttribute("id", "price");
    divPrice.textContent = price + "€/jour";
    article.appendChild(divPrice);

    return article;
  }
  return { getUserCardDOM };
}
