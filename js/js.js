// Nabvar

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');
const cruz = document.querySelector('.navbar__close');

let modoOscuroGuardado = localStorage.getItem('modoOscuro');
const modoOscuroBtn = document.querySelector('.modo-oscuro');
const body = document.querySelector('body');
const titulos = document.querySelectorAll('h2');
const parrafos = document.querySelectorAll('p');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const legends = document.querySelectorAll('legend');
const select = document.querySelector('select');

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


// Modo Oscuro
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
    inputs.forEach(input => {
        input.classList.toggle('input-oscuro');
    })  
    legends.forEach(legend => {
        legend.classList.toggle('legend-oscuro');
    })
    select.classList.toggle('select-oscuro');

})



// Carrito 

const carritoContenedor = document.querySelector('.carrito-container');
const iconoCarrito = document.querySelector('#icono-carrito');
const listaCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('.vaciar-carrito-btn');
const btnAgregar = document.querySelectorAll('.btn-agregar');

let articulosCarrito = [];

// Guardar en localStorage
function guardarCarritoLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
    console.log("Carrito guardado en localStorage:", articulosCarrito);
}

function obtenerCarritoLocalStorage() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        try {
            articulosCarrito = JSON.parse(carritoGuardado);
            // Validar que si se haya convertido en un array
            if (!Array.isArray(articulosCarrito)) {
                console.error("El dato recuperado de localStorage no es un array. Reiniciando carrito.");
                articulosCarrito = [];
            }
            imprimirCarrito();
            console.log("Carrito recuperado de localStorage:", articulosCarrito);
        } catch (error) {
            console.error("Error al parsear el carrito desde localStorage:", error);
            articulosCarrito = [];
            limpiarHTML();
        }
    } else {
        console.log("No había carrito en localStorage");
    }
}

// Al recargar la pagina se recupera lo que habia
document.addEventListener("DOMContentLoaded", () => {
    obtenerCarritoLocalStorage();
});


iconoCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    carritoContenedor.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if (!listaCarrito.contains(e.target) && !iconoCarrito.contains(e.target)) {
        carritoContenedor.classList.remove('active');
    }
});

vaciarCarritoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    articulosCarrito = [];
    limpiarHTML();
    guardarCarritoLocalStorage();
})

function limpiarHTML() {
    if (!listaCarrito) return;
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

function agregarAlCarrito(producto) {
    const existe = articulosCarrito.some(p => p.id === producto.id)

    if (existe) {
        articulosCarrito = articulosCarrito.map(p => {
            if (p.id === producto.id) {
                p.cantidad++;
            }
            return p;
        })
    } else {
        const informacionProducto = { ...producto, cantidad: 1 };
        articulosCarrito = [...articulosCarrito, informacionProducto];
    }

    imprimirCarrito();
    guardarCarritoLocalStorage();
}

function imprimirCarrito() {
    limpiarHTML();

    articulosCarrito.forEach(producto => {
        const { image, name, price, cantidad, id } = producto;

        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td class="td-imagen"><img src="${image[0]}" width="100px" height="auto"></td> 
        <td class="td-nombre">${name}</td>
        <td class="td-precio">$${price}</td>
        <td class="td-cantidad">${cantidad}</td>
        `;
        listaCarrito.appendChild(fila);
    })
}

