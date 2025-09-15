const inputs = document.querySelectorAll('input');
const select = document.getElementById('tipo-comprador');
const checkMujer = document.getElementById('mujer');
const checkHombre = document.getElementById('hombre');
const tipoComprador = document.getElementById('tipo-comprador');
const exito = document.getElementById('exito');
let usuarioGuardado = JSON.parse(localStorage.getItem('usuarios')) || [];
let valido = true;

inputs.forEach(input => {
  input.addEventListener('blur', () => {


    if (input.id === "nombre") {
      if (input.value === "") {
        input.nextElementSibling.textContent = "El nombre es obligatorio";
        valido = false;
      } else if (input.value.length < 3) {
        input.nextElementSibling.textContent = "El nombre debe tener al menos 3 caracteres";
        valido = false;
      } else {
        input.nextElementSibling.textContent = "";
        valido = true;
      }
    }

    if (input.id === "apellido") {
      if (input.value === "") {
        input.nextElementSibling.textContent = "El apellido es obligatorio";
        valido = false;
      } else if (input.value.length < 3) {
        input.nextElementSibling.textContent = "El apellido debe tener al menos 3 caracteres";
        valido = false;
      } else {
        input.nextElementSibling.textContent = "";
        valido = true;
      }
    }

    if (input.id === "email") {
      if (input.value === "") {
        input.nextElementSibling.textContent = "El email es obligatorio";
        valido = false;
      } else if (!input.value.includes("@") || !input.value.includes(".")) {
        input.nextElementSibling.textContent = "El email es incorrecto";
        valido = false;
      } else {
        input.nextElementSibling.textContent = "";
        valido = true;
      }
    }

    if (input.id === "telefono") {
      if (input.value === "") {
        input.nextElementSibling.textContent = "El telefono es obligatorio";
        valido = false;
      } else if (input.value.length < 7) {
        input.nextElementSibling.textContent = "El telefono debe tener al menos 7 caracteres";
        valido = false;
      } else {
        input.nextElementSibling.textContent = "";
        valido = true;
      }
    }

    if (input.id === "direccion") {
      if (input.value === "") {
        input.nextElementSibling.textContent = "El direccion es obligatoria";
        valido = false;
      } else if (input.value.length < 7) {
        input.nextElementSibling.textContent = "La direccion debe tener al menos 7 caracteres";
        valido = false;
      }
      else {
        input.nextElementSibling.textContent = "";
        valido = true;
      }
    }

    if (!checkHombre.checked && !checkMujer.checked) {
      document.querySelector('.genero__container .error').textContent = "Debe seleccionar al menos una opción";
      valido = false;
    } else {
      document.querySelector('.genero__container .error').textContent = "";
      valido = true;
    }


  })
})

if (tipoComprador.value === "") {
  tipoComprador.nextElementSibling.textContent = "Debe seleccionar al menos una opción";
  valido = false;
} else {
  tipoComprador.nextElementSibling.textContent = "";
  valido = true
}

console.log(tipoComprador.value)

if (valido) {
  exito.style.display = "block";

  const usuario = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    fechaNacimiento: document.getElementById('edad').value,
    // genero: document.getElementById('nombre').value,
    tipoComprador: document.getElementById('tipo-comprador').value,
    email: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value,
    direccion: document.getElementById('direccion').value
  }
  console.log(usuario)
}

