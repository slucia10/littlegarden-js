class usuario {
  constructor(nombreUsuario) { 
    this.nombre = nombreUsuario;
  }
}
let nombreUsuario = prompt("Ingrese su nombre");
alert(`Bienvenida/o ${nombreUsuario} a Little Garden`);

class Plantas {
  constructor(id, producto, precio, stock) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
  }
}

const planta1 = new Plantas(1, "Dracena Kiwi", 500, 30);
const planta2 = new Plantas(2, "Monstera Obliqua", 1000, 20);
const planta3 = new Plantas(3, "Calathea Makoyana", 1500, 26);
const planta4 = new Plantas(4, "Tradescantia", 2500, 22);


let productosTienda = [planta1, planta2, planta3, planta4]

let divProductos = document.getElementById("divProductos")

productosTienda.forEach(productosArray => {
  divProductos.innerHTML += `
  <div class="card" id="plantas${productosArray.id}" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">${productosArray.producto}</h5>
           <p class="card-text">$${productosArray.precio}</p>
           <p class="card-text">Stock: ${productosArray.stock}</p>
           <div class="row">
           <button id="botonAgregar${productosArray.id}" class="btn btn-outline-success">Agregar a carrito</button>
           <button id="botonEliminar${productosArray.id}" class="btn btn-outline-danger"> Eliminar</button>
           </div>
          
           
        </div>
  </div>
  `
})


let tituloId = document.getElementById("titulo")

tituloId.innerText = "¡Tu carrito de compras!"