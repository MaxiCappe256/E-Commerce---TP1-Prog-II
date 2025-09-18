// Nabvar

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');
const cruz = document.querySelector('.navbar__close');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
    cruz.classList.add('active');
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburguesa.contains(e.target)) {
        menu.classList.remove('active');
    }
})

cruz.addEventListener('click', () => {
    menu.classList.remove('active');
})