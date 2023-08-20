
const carritoDeCompras = document.getElementById("carritoProductos");

let carrito = [];
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

function mostrarProductosEnCarrito() {
  carritoProductos.innerHTML = ""; 

  carrito.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.innerHTML = ` <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="proteina-star">
    <div class="card-body">
    <div class="tarjetaProducto"><p class = "parrafo-de-producto">${producto.nombreproducto} - Cantidad: ${producto.cantidad}</p>
      <button class="buttonCarritoEliminar" data-producto-id="${producto.id}">Eliminar</button>
    </div>`;

    carritoProductos.appendChild(divProducto);

    
    const eliminarButton = divProducto.querySelector(".buttonCarritoEliminar");
    eliminarButton.addEventListener("click", eliminarProductoDelCarrito);
  });
}


mostrarProductosEnCarrito();


function eliminarProductoDelCarrito(event) {
  const productoId = event.target.getAttribute("data-producto-id");
  carrito = carrito.filter((producto) => producto.id !== parseInt(productoId));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarProductosEnCarrito(); 
}