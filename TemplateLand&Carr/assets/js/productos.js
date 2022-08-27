class prodCard {
    constructor (img, titulo, descripcion, presentacion, valor) {
        this.img = img
        this.titulo = titulo
        this.descripcion = descripcion
        this.presentacion = presentacion
        this.valor = valor
    }
}

let productos = [];

productos.push(new prodCard ('./assets/img/Guantes-brian-wangenheim.jpg','Guantes de cocina', 'guantes de alta resistencia y calidad','Talles XS/M/L', '$2500'))
productos.push(new prodCard ('./assets/img/lavandina.jpg','Lavandina Concentrada', 'Producto concentrado que elimina el 99,99% de todos los germenes','Envase de 750ml', '$1300'))
productos.push(new prodCard ('./assets/img/pañuelitos.jpg','Paños desinfectantes', 'Prácticos paños higiénicos para múltiples usos','Envase de 100 unidades', '$2700'))

let productSection = document.getElementById('section-products');
let tempCard = document.getElementById('card-template');
let cardDiv = tempCard.content.getElementById('card-div');

for (const value of productos) {
    let cardClone = cardDiv.cloneNode(cardDiv, true);
    let img = cardClone.children[0];
    img.setAttribute('src', `${value.img}`)
    cardClone.children[1].children[0].innerText = value.titulo
    cardClone.children[1].children[1].innerText = value.descripcion
    cardClone.children[2].children[0].innerText = value.presentacion
    cardClone.children[2].children[1].innerText = value.valor
    productSection.appendChild(cardClone)
}

const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()
