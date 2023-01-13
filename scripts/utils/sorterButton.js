const button = document.querySelector('.button');
const selector = document.querySelector('.selector');
const title = document.querySelector('.menu_title'); 
const popPick = document.querySelector('.selector_pop');
const datePick = document.querySelector('.selector_date');
const titlePick = document.querySelector('.selector_title');

button.addEventListener('click', () => {
    button.style.display = 'none';
    selector.style.display = 'flex';
});

popPick.addEventListener('click', () => {
    button.style.display = 'flex';
    selector.style.display = 'none';
    title.textContent = "Popularité";
});
popPick.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        button.style.display = 'flex';
        selector.style.display = 'none';
        title.textContent = "Popularité";
    }  
});

datePick.addEventListener('click', () => {
    button.style.display = 'flex';
    selector.style.display = 'none';
    title.textContent = "Date";
});
datePick.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        button.style.display = 'flex';
        selector.style.display = 'none';
        title.textContent = "Date";
    }  
});

titlePick.addEventListener('click', () => {
    button.style.display = 'flex';
    selector.style.display = 'none';
    title.textContent = "Titre";
});
titlePick.addEventListener('keydown', e => {
    if (e.key ===    "Enter") {
        button.style.display = 'flex';
        selector.style.display = 'none';
        title.textContent = "Titre";
    }  
});
