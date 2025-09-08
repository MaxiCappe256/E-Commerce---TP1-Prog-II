const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');
const cruz = document.querySelector('.navbar__close');

const carritoContenedor = document.querySelector('.carrito-container');
const iconoCarrito = document.querySelector('#icono-carrito');

iconoCarrito.addEventListener('click', () => {
    carritoContenedor.classList.toggle('active');
})

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

// Carrito 
// Crear array vacio
let articulosCarritos = [];

function cargarEventListeners() {
    // Cuando se presiona "Agregar al carrito"

    productoContainerGeneral.addEventListener('click', agregarAlCarrito);

    // Cuando se elimina un producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarritos = []; // Reseteamos el arreglo
        limpiarHTML(); // Eliminamos todo el HTML
    });
}


function agregarAlCarrito(e) {
    // Evitar que la pagina se recargue al presionar el boton
    e.preventDefault();

    //Verificar si el usuario apreto en el boton
    if(e.target.classList.contains('descripcion__comprar')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function leerDatosProducto(producto) {
    // Crear un objeto con el contenido del producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.descripcion__precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisar si un elemento ya existe en el carrito
    const existe = articulosCarritos.some(producto => producto.id === infoProducto.id);

    if(existe) {
        const productos = articulosCarritos.map(producto => {
            if(producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto; // Retorna el objeto actualizado
            }
            else {
                return producto; // Retorna los objetos que no son duplicados
            }
        });
        articulosCarritos = [...productos];

    }
    else {
        articulosCarritos = [...articulosCarritos, infoProducto];
    }

    imprimirCarrito();
}

function imprimirCarrito() {
    
    // Limpiar el HTML
    limpiarHTML();

    // Recorrer el carrito y generar el HTML
    articulosCarritos.forEach(producto => {
        const {imagen, titulo, precio, cantidad, id} = producto;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="400" height="auto"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;

        carrito.appendChild(row);
    });
}

function limpiarHTML() {
    while(carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}

function eliminarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        // Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarritos = articulosCarritos.filter(producto => producto.id !== productoId);

        imprimirCarrito();
    }
}