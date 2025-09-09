const contenedor_productos = document.getElementById('contenedor_productos');

fetch("https://sneakers-api-cmkf.onrender.com/")
    .then(response => response.json())
    .then(products => {
        for (let i = 0; i < 20; i++) {
            contenedor_productos.innerHTML += `
                <div class="container__product">
                    <div class="product__container-img primer-producto">
                        <img src="${products[i].image[0]}" alt="imagen zapatilla" class="container-img__imagen">
                    </div>
                    <div class="product__info">
                        <h3 class="info__titulo sub-subtitle">${products[i].name}</h3>
                        <p class="info__price">$${products[i].price}.000</p>
                        <a href="./pages/producto.html?id=${products[i].id}" target="_blank" class="info__btn">Ver más</a>
                        <a href="#" data-id="${products[i].id}" class="info__btn btn-agregar">Agregar al Carrito</a>
                    </div>
                </div>
            `
        }

        // Saber que producto se clickeo
        // Guardamos todos los botones en una variable
        const botonesAgregar = document.querySelectorAll('.btn-agregar');
        // Recorre todos los botones para ver cual es el clickeado
        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', e => {
                // Evita que el click suba al documento
                e.preventDefault();
                // Guardamos el id del boton que se apreto
                const id = boton.getAttribute('data-id');
                // Guardamos el producto con ese id buscandolo adentro del array
                const producto = products.find(p => p.id == id);
                // Llamamos a la funcion y le pasamos por parametro el producto que se clickeo
                agregarAlCarrito(producto);
            });
        });
    })