const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

export default function actualizarCarrito(carritoDeCompras) {
  console.log(carritoDeCompras)
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))

  //aolicando libreria a carrito curso agregado
  Toastify({
    text: "🚀 Curso agregado",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}
