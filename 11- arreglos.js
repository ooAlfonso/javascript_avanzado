/* arreglos
estructura de datos
*/

/*declaracion de arreglos*/

const arreglo = [];
const arreglos = new Array();

let lenguajes = ['java script', 'java', 'php', 'python', 'c#'];   

/* forEache */

/*funcion anonima */
document.write(`</ul>`);

lenguajes.forEach(function(lenguaje, index) {
    console.log(lenguaje);
    document.write(`<li>${index}-${lenguaje}</li>`);


});
document.write(`</ul>`);

/*Map, crea nuevo arreglo con los resultados */

let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero){
    return numero * 2;

})


console.log(numeros);
console.log(numeros2);


/*includes busca dentro de un arreglo si encuantra el valos arroja true */

console.log(lenguajes .includes(`php`)); //si se encuentra dentro del arreglo devuelve true
console.log(lenguajes .includes(`Go`));  //si no se encuentra dentro del arreglo devuelve false     


/*filter,  crea un nuevo arreglo con todos los elementos 
que cumplan con la condicion
*/

let filtrados = numeros.filter(function(numero){
    if (numeros < 10){
        return numero;
    }
});