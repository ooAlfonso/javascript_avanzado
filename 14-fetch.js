/* fetch nos permite hacer peticiones http desde javascript*/
/*solicita informacion a un servidor */

/* significado de json: javascript object noattion */
/*siver para hacer intercambio de datos  */

const peticion = fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resp => resp.json()).then(data => {
    console.log(data);

}).catch();
console.log(peticion);

