const producto = document.querySelector('.main__container');
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

fetch("https://sneakers-api-cmkf.onrender.com/get-sneaker/" + productId)
    .then(response => response.json())
    .then(product => {
        console.log(product);
        producto.innerHTML = `

        <div class="container-product">
            <div class="container-img">

                <div class="container-img__principal">
                    <a href="${product.image[0]}">
                        <img class="container-img__imagen0" id="imgPrincipal" src="${product.image[0]}" alt="imagen principal">
                    </a>
                </div>

                <div class="container-img__secundarias">
                    ${product.image.slice(1).map((img, i) =>
                `<a href="${img}">
                            <img class="container-img__imagen-secundaria" src="${img}" alt="imagen zapatilla">
                        </a>`).join("")}
                </div>
            </div>

            <div class="container__descripcion">
                <h3 class="descripcion__titulo">${product.name}</h3>
                <p class="descripcion__talle">${product.sizes.join(" - ")}</p>
                <p class="descripcion__precio">$${product.price}.000</p>
                <a href="../pages/carrito.html" class="descripcion__comprar" data-id="${product.id}" id="agregar-carrito" >Agregar Carrito</a>
            </div>
        </div>
        `;
        }
    )
