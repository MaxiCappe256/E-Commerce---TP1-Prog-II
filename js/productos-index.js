const contenedor_productos = document.getElementById('contenedor_productos');


fetch("https://sneakers-api-cmkf.onrender.com/")
    .then(response => response.json())
    .then(products => {
        for (let i = 0; i < 10; i++) {
            contenedor_productos.innerHTML += `
                <div class="container__product">
                    <div class="product__container-img primer-producto">
                        <img src="${products[i].image[0]}" alt="imagen zapatilla" class="container-img__imagen">
                    </div>
                    <div class="product__info">
                        <h3 class="info__titulo sub-subtitle">${products[i].name}</h3>
                        <p class="info__price">$${products[i].price}.000</p>
                        <a href="./pages/producto.html?id=${products[i].id}" target="_blank" class="info__btn">Ver más</a>
                    </div>
                </div>
        `
        }
    })