import actualizarCarrito from "../components/cart/actualizarCarrito.js";
import carritoIndex from "../components/cart/carritoIndex.js";

let carritoStorage = [];
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

 export default function mostrarProductos(array) {


  if (localStorage.getItem("carrito")) {

   
   
    carritoStorage.map((producto) => {
      let div = document.createElement('div');
      div.classList.add('productoEnCarrito');
      div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio:${producto.precio}</p>
                    <p>Idioma:${producto.idioma}</p>
                    <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;
      contenedorCarrito.appendChild(div);

      actualizarCarrito(carritoStorage);

      let botonEliminar = document.getElementById(`eliminar${producto.id}`);

      botonEliminar.addEventListener ('click', () => {
        botonEliminar.parentElement.remove();
        carritoStorage = carritoStorage.filter(el => el.id != producto.id);
        actualizarCarrito(carritoStorage);
      });
    })
  }



  // aplicando operador AND && , dos condiciones verdaderas
function recuperar(){
  let recuperarLS= JSON.parse (localStorage.getItem('carrito'))

  console.log (recuperarLS);


  recuperarLS && recuperarLS.forEach(element => {
    mostrarProductos (element)
    carritoDeCompras.push (element)
    actualizarCarrito()
    
  });
}

  array.forEach(producto => {

    const {img :imagen,nombre,id, desc,idioma,precio} = producto // aplicando desetructuración de array

    let div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML += `<div class="card">
                        <div class="card-image">
                            <img src=${imagen}>
                            <span class="card-title">${nombre}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red" id=boton${id}><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${desc}</p>
                            ${ idioma ? `<p>${idioma}</p>` : `<p> Quedan pocos lugares </p>`}
                            <p>${precio}</p>
                        </div>
                      </div>`;

    contenedorProductos.appendChild(div);
    

    let boton = document.getElementById(`boton${producto.id}`);

    boton.addEventListener('click', () => {
      carritoIndex(producto.id);
    });

    
  });

}




