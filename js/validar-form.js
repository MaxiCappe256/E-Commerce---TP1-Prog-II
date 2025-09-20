const inputs = document.querySelectorAll('input');
const select = document.getElementById('tipo-comprador');
const checkMujer = document.getElementById('mujer');
const checkHombre = document.getElementById('hombre');
const tipoComprador = document.getElementById('tipo-comprador');
const exito = document.getElementById('exito');
const mensaje = document.getElementById('mensaje');
const formulario = document.getElementById('formulario');
let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];


inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.id === "nombre") {
      if (input.value.trim().length < 3) {
        mensaje.textContent = "El nombre debe contener al menos 3 caracteres"
        mensaje.classList.add('error');
      } else {
        mensaje.textContent = "";
        mensaje.classList.remove('error');
      }
    }

    if (input.id === "apellido") {
      if (input.value.trim().length < 3) {
        mensaje.textContent = "El apellido debe contener al menos 3 caracteres"
        mensaje.classList.add('error');
      } else {
        mensaje.textContent = "";
        mensaje.classList.remove('error');
      }
    }

    if (input.id === "apellido") {
      if (input.value.trim().length < 3) {
        mensaje.textContent = "El apellido debe contener al menos 3 caracteres"
        mensaje.classList.add('error');
      } else {
        mensaje.textContent = "";
        mensaje.classList.remove('error');
      }
    }

    if (input.id === "edad") {
      if (!input.value) {
        mensaje.textContent = "Debes ingresar tu fecha de nacimiento";
        mensaje.classList.add('error');
      } else {
        mensaje.textContent = "";
        mensaje.classList.remove('error');
      }
    }
  
  input.addEventListener('blur', () => {
    if (input.id === "email") {
      if (!input.value.includes("@") || !input.value.includes(".")) {
        mensaje.textContent = "Formato de email inválido";
        mensaje.classList.add('error');
      } else {
        mensaje.textContent = "";
        mensaje.classList.remove('error');
      }
    }
  })
  })

  if (input.type === "radio" && input.name === "genero") {
    input.addEventListener('change', () => {
      const seleccionado = document.querySelector('input[name="genero"]:checked');
      if (!seleccionado) {
        mensaje.textContent = "Debes seleccionar un género";
        mensaje.classList.add('error');
      } else {
        mensaje.textContent = "";
        mensaje.classList.remove('error');
      }
    });
  }

})

tipoComprador.addEventListener('change', () => {
  if (tipoComprador.value === "") {
    mensaje.textContent = "Debes seleccionar un tipo de comprador";
    mensaje.classList.add('error');
  } else {
    mensaje.textContent = "";
    mensaje.classList.remove('error');
  }
})

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  let valido = true;

  inputs.forEach(input => {
    if (input.id === "nombre") {
      if (input.value.trim().length < 3) {
        mensaje.textContent = "El nombre debe contener al menos 3 caracteres";
        mensaje.classList.add("error");
        valido = false;
      }
    }

    if (input.id === "apellido") {
      if (input.value.trim().length < 3) {
        mensaje.textContent = "El apellido debe contener al menos 3 caracteres";
        mensaje.classList.add("error");
        valido = false;
      }
    }

    if (input.id === "email") {
      const valorEmail = input.value.trim();
      if (!valorEmail.includes("@") || !valorEmail.includes(".")) {
        mensaje.textContent = "Formato de email inválido";
        mensaje.classList.add("error");
        valido = false;
      }
    }

    if (input.id === "edad") {
      if (!input.value) {
        mensaje.textContent = "Debes ingresar tu fecha de nacimiento";
        mensaje.classList.add("error");
        valido = false;
      }
    }
  })

  const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
  if (!generoSeleccionado) {
    mensaje.textContent = "Debes seleccionar un género";
    mensaje.classList.add("error");
    valido = false;
  }

  if (tipoComprador.value === "") {
    mensaje.textContent = "Debes seleccionar un tipo de comprador";
    mensaje.classList.add("error");
    valido = false;
  }

  if (valido) {

    const usuario = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      email: document.getElementById('email').value,
      edad: document.getElementById('edad').value,
      genero: document.querySelector('input[name="genero"]:checked').value,
      tipoComprador: document.getElementById("tipo-comprador").value
    }

    usuariosGuardados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    formulario.reset();

    mensaje.classList.remove("error");
    mensaje.classList.add("exito");
    mensaje.textContent = "Formulario válido, guardando usuario...";

    console.log(valido)
  } else {
    mensaje.textContent = "Datos incompletos/incorrectos";
    mensaje.classList.add("error");
  }
})

