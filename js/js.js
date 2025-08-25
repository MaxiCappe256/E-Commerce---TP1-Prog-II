const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector('.navbar__links');
const links = document.querySelector('.navbar__link');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
})


links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !hamburguesa.contains(e.target)) {
        menu.classList.remove('active');
    }
});
