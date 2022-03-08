 //data json. fetch
  
 const PRODUCTS = []
       fetch('../helpers/products.json')
            .then( (res) => res.json())
            .then((producto) => {
                producto.forEach(item => {
                PRODUCTS.push (item);
                 })  });
   export {PRODUCTS}