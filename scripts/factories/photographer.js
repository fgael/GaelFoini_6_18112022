// generate photographer card on index.
function photographerFactory(data) {
  // get data from the imported object in fetch of json
  const { name, portrait, city, country, tagline, price, id } = data;
  // define path for picture
  const picture = `assets/photographers/${portrait}`;

  // create user card in DOM
  function getUserCardDOM() {
    const article = document.createElement('article');
    article.setAttribute('aria-label', 'carte photographe');
    const pathId = `./photographer.html?id=${id}`;
    article.innerHTML = `
      <a href="${pathId}" aria-label="${name}">
        <img src="${picture}" alt="portrait photographe">
        <h2>${name}</h2>
      </a>
      <div class="photographer-city">${city}, ${country}</div>
      <div class="tagline">${tagline}</div>
      <div class="price">${price}€/jour</div>
    `;
    return article;
  }
  return { getUserCardDOM };
}
