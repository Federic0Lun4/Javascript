
/*let proteinaSedentarios = 0.8;
let proteinaAtletas = 1.7;
let pesoCorporal = Number(prompt("Ingresa tu peso corporal"));
let preguntarSedentarismo = prompt("¿Usted es una persona sedentaria? (Si o No)").toLowerCase();

function calcularProteinasSedentarios() {
  return pesoCorporal * proteinaSedentarios;
}

function calcularProteinasAtletas() {
  return pesoCorporal * proteinaAtletas;
}

function calcularProteinaDiaria() {
  if (preguntarSedentarismo === "si") {
    let resultadoSedentario = calcularProteinasSedentarios();
    return alert("La cantidad de proteínas diarias que debes consumir es de " + resultadoSedentario + " gramos.");
  } else {
    let resultadoNoSedentario = calcularProteinasAtletas();
    return alert("La cantidad mínima de proteína que debes consumir es de " + resultadoNoSedentario + " gramos.");
  }
}

let preguntarAlUsuario = prompt("¿Quieres saber cuánta cantidad de proteínas diarias necesitas? (Si o No)").toLowerCase();
while (preguntarAlUsuario === "si") {
  calcularProteinaDiaria();
  preguntarAlUsuario = prompt("¿Quieres saber cuánta cantidad de proteínas diarias necesitas? (Si o No)").toLowerCase();
}*/

let productos = [
  {
    id:1,
    imagen: "../img/2-PLATINUM-STAR.png",
    nombreproducto:"Platinum Star" ,
    descripcion:"La marca insignia del pais nos ofrece esta proteina de una excelente calidad",
    precio: 8600,
    contenidoNeto: "908g",
    servicios:28
  },
  {
    id:1,
    imagen: "../img/true-made.jpg",
    nombreproducto:"Ena Truemade" ,
    descripcion:"Competencia directa de Star y una de las marcas mas reconocidas del pais",
    precio: 8200,
    contenidoNeto: "908g",
    servicios:28
  },
  {
    id:1,
    imagen: "../img/proteina-nutrilab-1kg1-3f66649d4acd57f02316014302287419-640-0.png",
    nombreproducto:"Nutrilab" ,
    descripcion:"La proteina con mejor relacion Calidad-Precio del mercado argentino",
    precio: 5800,
    contenidoNeto: "1KG",
    servicios:30
  },
  {
    id:1,
    imagen: "../img/whey-chocolate1-b02912dcf3a9a79bdd16521942924693-1024-1024.webp",
    nombreproducto:"Gold" ,
    descripcion:"Una proteina con un excelente aminograma",
    precio: 8850,
    contenidoNeto: "1KG",
    servicios:30
  },
  {
    id:1,
    imagen: "../img/Whey-ADAVANCE.webp",
    nombreproducto:"Body Advance" ,
    descripcion:"Una marca relativamente nueva en el mercado y competencia de Nutrilab",
    precio: 5500,
    contenidoNeto: "1KG",
    servicios:30
  },
  {
    id:1,
    imagen: "../img/BEST-WHEY-Protein-Banana-nuevo-(1).png",
    nombreproducto:"Xtrenght" ,
    descripcion:"La marca insignia del pais nos ofrece esta proteina con una exclenecte relacion precio-calidad",
    precio: 9000,
    contenidoNeto: "1KG",
    servicios: 30
  }
]

let productosCards = document.querySelector(".productosCards")

for (let i = 0; i < productos.length; i++) {
    let carrito = productos[i]
    let cardBootstrap = `<div class="card" style="width: 18rem;">
    <img src="${carrito.imagen}" class="card-img-top" alt="proteina-star">
    <div class="card-body">
        <h5 class="card-title">${carrito.nombreproducto}</h5>
        <p class="card-text">${carrito.descripcion}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">$${carrito.precio.toFixed(0)}</li>
        <li class="list-group-item">${carrito.contenidoNeto}</li>
        <li class="list-group-item">${carrito.servicios}</li>
    </ul>`;
}

productosCards.innerHTML += cardBootstrap