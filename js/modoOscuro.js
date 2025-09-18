// Modo Oscuro

let modoOscuroGuardado = localStorage.getItem('modoOscuro');
const modoOscuroBtn = document.querySelector('.modo-oscuro');
const body = document.querySelector('body');
const titulos = document.querySelectorAll('h2');
const parrafos = document.querySelectorAll('p');
const labels = document.querySelectorAll('label');
const inputsDark = document.querySelectorAll('input');
const legends = document.querySelectorAll('legend');
const selectDark = document.querySelector('select');

modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro-general');
    titulos.forEach(titulo => {
        titulo.classList.toggle('titulo-oscuro');
    })
    const cards = document.querySelectorAll('.container__product');
    cards.forEach(card => {
        // Cambia de add a toggle
        card.classList.toggle('card-oscuro');
    })
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('parrafos-oscuros');
    })
    labels.forEach(label => {
        label.classList.toggle('label-oscuro');
    })
    inputsDark.forEach(input => {
        input.classList.toggle('input-oscuro');
    })  
    legends.forEach(legend => {
        legend.classList.toggle('legend-oscuro');
    })
    selectDark.classList.toggle('select-oscuro');

})