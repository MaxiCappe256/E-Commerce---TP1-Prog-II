const modoOscuroBtn = document.querySelector('.modo-oscuro');
const body = document.body;

const estiloGuardado = localStorage.getItem('modoOscuro');
console.log(estiloGuardado)
if (estiloGuardado === 'true') {
  body.classList.add('modo-oscuro');
} else {
  body.classList.remove('modo-oscuro');
}

modoOscuroBtn.addEventListener('click', () => {
  body.classList.toggle('modo-oscuro');
  localStorage.setItem('modoOscuro', body.classList.contains('modo-oscuro'));
});
