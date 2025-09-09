// Nabvar

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');
const cruz = document.querySelector('.navbar__close');


const modoOscuroBtn = document.querySelector('.modo-oscuro');
const body = document.querySelector('body');
const titulos = document.querySelectorAll('h2');




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
} )

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
    cruz.classList.add('active');
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !hamburguesa.contains(e.target)) {
        menu.classList.remove('active');
    }
})

cruz.addEventListener('click', () => {
    menu.classList.remove('active');
})





// Carrito 

const carritoContenedor = document.querySelector('.carrito-container');
const iconoCarrito = document.querySelector('#icono-carrito');
const listaCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('.vaciar-carrito-btn');
const linkCarrito = document.getElementById('link-carrito');
const btnAgregar = document.querySelector('.btn-agregar');

let articulosCarrito = [];


// Mostrar el carrito
linkCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    carritoContenedor.classList.toggle('active')
})


iconoCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    carritoContenedor.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if(!listaCarrito.contains(e.target) && !iconoCarrito.contains(e.target)) {
        carritoContenedor.classList.remove('active');
    }
});

vaciarCarritoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    articulosCarrito = [];
    limpiarHTML();
})

function limpiarHTML() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

function agregarAlCarrito(producto) {
    const existe = articulosCarrito.some(p => p.id === producto.id)

    if(existe) {
        articulosCarrito = articulosCarrito.map(p => {
            if(p.id === producto.id) {
                p.cantidad ++;
            }
            return p;
        })
    } else {
        const informacionProducto = {...producto, cantidad: 1};
        articulosCarrito = [...articulosCarrito, informacionProducto];
    }

    imprimirCarrito();
}

function imprimirCarrito() {
    limpiarHTML();

    articulosCarrito.forEach(producto => {
        const {image, name, price, cantidad, id} = producto;

        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img src="${image[0]}" width="100px" height="auto"></td> 
        <td class="td-nombre">${name}</td>
        <td class="td-precio">${price}</td>
        <td class="td-cantidad">${cantidad}</td>
        `;
        listaCarrito.appendChild(fila);
    })
}
