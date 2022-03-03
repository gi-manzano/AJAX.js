import mostrarProductos from "./app.js";
import { PRODUCTS } from "../data/pruducts.js";

document.addEventListener("DOMContentLoaded", (e) => {
  mostrarProductos(PRODUCTS);
})