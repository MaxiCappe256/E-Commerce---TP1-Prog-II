const producto = document.querySelector('.main__container');
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

fetch("https://sneakers-api-cmkf.onrender.com/get-sneaker/" + productId)
    .then(response => response.json())
    .then(product => {
        console.log("Producto recibido:", product);
        if (!product || !product.image) {
            console.error("El producto no existe o no tiene imágenes:", product);
            producto.innerHTML = `<p>Producto no encontrado.</p>`;
            return;
        }

        producto.innerHTML = `
        <div class="container-product">
            <div class="container-img">

                <div class="container-img__principal">
                    <a href="${product.image[0]}">
                        <img class="container-img__imagen0" id="imgPrincipal" src="${product.image[0]}" alt="imagen principal">
                    </a>
                </div>

            </div>

            <div class="container__descripcion">
                <h3 class="descripcion__titulo">${product.name}</h3>
                <p class="descripcion__talle">${product.sizes.join(" - ")}</p>
                <p class="descripcion__precio">$${product.price}.000</p>
            </div>
        </div>
        `;
    })
    .catch(err => {
        console.error("Error al obtener el producto:", err);
        producto.innerHTML = `<p>Error al cargar el producto.</p>`;
    });
