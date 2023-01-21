// get dom element
const button = document.querySelector(".button");
const selector = document.querySelector(".selector");
const title = document.querySelector(".menu_title");
const popPick = document.querySelector(".selector_pop");
const datePick = document.querySelector(".selector_date");
const titlePick = document.querySelector(".selector_title");

// listen sort button for display
button.addEventListener("click", () => {
  button.style.display = "none";
  selector.style.display = "flex";
});

// listen popularity button by click or keyboard
popPick.addEventListener("click", () => {
  button.style.display = "flex";
  selector.style.display = "none";
  title.textContent = "Popularité";
});

popPick.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.style.display = "flex";
    selector.style.display = "none";
    title.textContent = "Popularité";
  }
});

// listen date button by click or keyboard
datePick.addEventListener("click", () => {
  button.style.display = "flex";
  selector.style.display = "none";
  title.textContent = "Date";
});
datePick.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.style.display = "flex";
    selector.style.display = "none";
    title.textContent = "Date";
  }
});

// listen title button by click or keyboard
titlePick.addEventListener("click", () => {
  button.style.display = "flex";
  selector.style.display = "none";
  title.textContent = "Titre";
});

titlePick.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.style.display = "flex";
    selector.style.display = "none";
    title.textContent = "Titre";
  }
});
