const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');
const cruz = document.querySelector('.navbar__close');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
    cruz.classList.toggle('active');
})


links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        cruz.classList.remove('active');

    })
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !hamburguesa.contains(e.target)) {
        menu.classList.remove('active');
        cruz.classList.remove('active');
    }
});
