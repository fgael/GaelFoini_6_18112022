// user factory
function userFactory(data) {
  // get data from the imported object in fetch of json
  const { name, portrait, city, country, tagline, price, id } = data;
  // define path for picture
  const picture = `assets/photographers/${portrait}`;

  // create user card in DOM
  function getUserCardDOM() {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const divTag = document.createElement("div");

    article.setAttribute("aria-label", "carte photographe");
    h2.textContent = name;
    article.appendChild(h2);
    h3.textContent = city + ", " + country;
    article.appendChild(h3);
    divTag.setAttribute("id", "tagline");
    divTag.textContent = tagline;
    article.appendChild(divTag);

    return article;
  }
  // create user img in DOM
  function getImgDom() {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img_container");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "portrait photographe");
    imgContainer.appendChild(img);
    return imgContainer;
  }

  return { getUserCardDOM, getImgDom };
}
// img and video factory
function mediaFactory(data) {
   // get data from the imported object in fetch of json
  const { image, title, video } = data;
  // define path for video
  const videoFile = `assets/medias/${video}`;
  // define path for picture
  const picture = `assets/medias/${image}`;
  // create media img and video in DOM
  function getUserDataMediaCardDOM() {
    const article = document.createElement("article");
    const div = document.createElement("div");  
    if ("video" in data) {
      const video = document.createElement("video");
      video.setAttribute("src", videoFile);
      video.setAttribute("title", title);
      div.appendChild(video);
      article.appendChild(div);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      img.className = "media-image";
      div.appendChild(img);
      article.appendChild(div);
    }
    return article;
  }
  return { getUserDataMediaCardDOM };
}
