
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
    id:2,
    imagen: "../img/true-made.jpg",
    nombreproducto:"Ena Truemade" ,
    descripcion:"Competencia directa de Star y una de las marcas mas reconocidas del pais",
    precio: 8200,
    contenidoNeto: "908g",
    servicios:28
  },
  {
    id:3,
    imagen: "../img/proteina-nutrilab-1kg1-3f66649d4acd57f02316014302287419-640-0.png",
    nombreproducto:"Nutrilab" ,
    descripcion:"La proteina con mejor relacion Calidad-Precio del mercado argentino",
    precio: 5800,
    contenidoNeto: "1KG",
    servicios:30
  },
  {
    id:4,
    imagen: "../img/whey-chocolate1-b02912dcf3a9a79bdd16521942924693-1024-1024.webp",
    nombreproducto:"Gold" ,
    descripcion:"Una proteina con un excelente aminograma",
    precio: 8850,
    contenidoNeto: "1KG",
    servicios:30
  },
  {
    id:5,
    imagen: "../img/Whey-ADAVANCE.webp",
    nombreproducto:"Body Advance" ,
    descripcion:"Una marca relativamente nueva en el mercado y competencia de Nutrilab",
    precio: 5500,
    contenidoNeto: "1KG",
    servicios:30
  },
  {
    id:6,
    imagen: "../img/BEST-WHEY-Protein-Banana-nuevo-(1).png",
    nombreproducto:"Xtrenght" ,
    descripcion:"La marca insignia del pais nos ofrece esta proteina con una exclenecte relacion precio-calidad",
    precio: 9000,
    contenidoNeto: "1KG",
    servicios: 30
  },
  {
    id:7,
    imagen: "../img/img1643117240-whey Star Cookies Doy.jpg",
    nombreproducto:"Platinum Star" ,
    descripcion:"La marca insignia del pais nos ofrece esta proteina con una exclenecte relacion precio-calidad",
    precio: 18000,
    contenidoNeto: "3KG",
    servicios: 88
  },
  {
    id:8,
    imagen: "../img/mutant-mass-x-5kg-frutilla.jpg",
    nombreproducto:"Star Mutant Mass" ,
    descripcion:"Tipo =Ganador de peso",
    precio: 20000,
    contenidoNeto: "5KG",
    servicios: 120
  },
  {
    id:9,
    imagen: "../img/descarga.jpeg",
    nombreproducto:"Platinum Star" ,
    descripcion:"Tipo = Proteina(aislada)",
    precio: 12000,
    contenidoNeto: "1KG",
    servicios: 30
  }
]


let productosCards = document.querySelector(".productosCards")
let carrito = []
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

for (let i = 0; i < productos.length; i++) {
    let carrito = productos[i]
    let cardBootstrap = `<div class="tarjeta-flexbox"> <div class="card" style="width: 18rem;">
    <img src="${carrito.imagen}" class="card-img-top" alt="proteina-star">
    <div class="card-body">
        <h5 class="card-title">${carrito.nombreproducto}</h5>
        <p class="card-text">${carrito.descripcion}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">$${carrito.precio.toFixed(0)}</li>
        <li class="list-group-item">${carrito.contenidoNeto}</li>
        <button type="button" class="btn btn-outline-dark" data-producto-id="${carrito.id}">Añadir al carrito</button>
    </ul> </div>`;
    productosCards.innerHTML += cardBootstrap
  }

let agregarBoton = document.getElementsByClassName("btn-outline-dark");

for (let i = 0; i < agregarBoton.length; i++) {
  let button = agregarBoton[i]
  button.addEventListener("click", agregarCarrito)
}

function agregarCarrito(event){
  let button = event.target
  
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  let productoId = button.getAttribute("data-producto-id")
  
  let producto = productos.find((producto) => producto.id == parseInt(productoId))
  
  let productoEnCarrito = carrito.find((item) => item.id == producto.id)
  
  if (!productoEnCarrito) {
    carrito.push({ ...producto, cantidad: 1 });
  }
    else{
      productoEnCarrito.cantidad += 1;

    }
  
    console.log("Producto agregado al carrito. ID: " + productoId);
    console.log("Carrito:", carrito);
}

let botonEliminarCarrito = document.getElementsByClassName("buttonCarritoEliminar");

for (let i = 0; i < botonEliminarCarrito.length; i++) {
  let eliminar = botonEliminarCarrito[i];
  eliminar.addEventListener("click", limpiarConsola);
}

function limpiarConsola() {
  console.clear();
}
