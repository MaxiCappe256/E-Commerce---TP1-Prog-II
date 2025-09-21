
// Carrito 

const carritoContenedor = document.querySelector('.carrito-container');
const iconoCarrito = document.querySelector('#icono-carrito');
const listaCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('.vaciar-carrito-btn');
const btnAgregar = document.querySelectorAll('.btn-agregar');

// Creamos array vacio para el carrito
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

// se le agrega o quita la clase active al clickear el icono carrito
iconoCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    carritoContenedor.classList.toggle('active')
})

// deja de mostrar el carrito si se clickeo fuera
document.addEventListener('click', (e) => {
    if (!listaCarrito.contains(e.target) && !iconoCarrito.contains(e.target)) {
        carritoContenedor.classList.remove('active');
    }
});

// vacia todos los productos
vaciarCarritoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    articulosCarrito = [];
    limpiarHTML();
    guardarCarritoLocalStorage();
})

// limpia la lista del carrito
function limpiarHTML() {
    if (!listaCarrito) return;
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

// agrega los productos al carrito, obtenemos como parametro producto que viene del productos-index.js porque trae la informacion del producto del boton que clickeo el usuario gracias al id
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

