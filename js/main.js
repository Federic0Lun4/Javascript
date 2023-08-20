
let productosCards = document.querySelector(".productosCards");
let carrito = [];
let data; 

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

fetch("../data.json")
  .then((resp) => resp.json())
  .then((responseData) => {
    data = responseData;
    data.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<div class="tarjeta-flexbox"> <div class="card" style="width: 18rem;">
        <img src="${post.imagen}" class="card-img-top" alt="proteina-star">
        <div class="card-body">
            <h5 class="card-title">${post.nombreproducto}</h5>
            <p class="card-text">${post.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">$${post.precio.toFixed(0)}</li>
            <li class="list-group-item">${post.contenidoNeto}</li>
            <button type="button" class="btn btn-outline-dark" data-producto-id="${post.id}">Añadir al carrito</button>
        </ul> </div>`;

      productosCards.appendChild(div);

      const agregarBoton = div.querySelector(".btn-outline-dark");
      agregarBoton.addEventListener("click", (event) => {
        agregarAlCarrito(event);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto agregado al carrito',
          showConfirmButton: false,
          timer: 1150
        });
      });
    });
  });

let agregarBotones = document.querySelectorAll(".btn-outline-dark");

for (let i = 0; i < agregarBotones.length; i++) {
  let button = agregarBotones[i]
  button.addEventListener("click", () => {

  });
}





function agregarAlCarrito(event) {
  let button = event.target;
  let productoId = button.getAttribute("data-producto-id");
  let producto = data.find((producto) => producto.id == parseInt(productoId));
  let productoEnCarrito = carrito.find((item) => item.id == producto.id);

  if (!productoEnCarrito) {
    carrito.push({ ...producto, cantidad: 1 });
  } else {
    productoEnCarrito.cantidad += 1;
  }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("Producto agregado al carrito. ID: " + productoId);
    console.log("Producto agregado al carrito:", producto);
  }


let botonEliminarCarrito = document.getElementsByClassName("buttonCarritoEliminar");

for (let i = 0; i < botonEliminarCarrito.length; i++) {
  let eliminar = botonEliminarCarrito[i];
  eliminar.addEventListener("click", limpiarConsola);
}

function limpiarConsola() {
  console.clear();
  localStorage.removeItem("carrito")
}
