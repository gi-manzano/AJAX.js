import actualizarCarrito from "./actualizarCarrito.js";
import { PRODUCTS } from "../../data/pruducts.js";

let carritoDeCompras = []

export default function carritoIndex(productoId) {

  const contenedorCarrito = document.getElementById('carrito-contenedor');
  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);

  const contarProductosRepetidos = (productoRepetido) => {
    if (productoRepetido) {
      productoRepetido.cantidad++
      document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id=cantidad${productoRepetido.id}>Cantidad:${productoRepetido.cantidad}</p>`;
      actualizarCarrito(carritoDeCompras);
    } else {
      renderProductosCarrito(productoId);
    }
  }

  const renderProductosCarrito = (productoId) => {
    let producto = PRODUCTS.find(prod => prod.id == productoId);
    carritoDeCompras.push(producto);

    producto.cantidad = 1;
    let div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio:${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;

    contenedorCarrito.appendChild(div);

    actualizarCarrito(carritoDeCompras);
  }

  const eliminarProductoCarrito = (productoId) => {
    let botonEliminar = document.getElementById(`eliminar${productoId}`);

    botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
      actualizarCarrito(carritoDeCompras);
    });
  }

  contarProductosRepetidos(productoRepetido);
  eliminarProductoCarrito(productoId);
}
