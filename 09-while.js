/*ciclo while
Nos premite repetir codigo mientras una condicion 
sea verdadera

(isNaN) es una funcion para varidad si el valor no es un numero
*/


let num1 = parseInt(prompt("ingresa un numero"));


/* NaN
    not a number
*/

while(isNaN(num1)){
    num1 = parseInt(prompt("ingrese un numero"));

}


let num2 = parseInt(prompt("Ingresar numero"));
const num_secreto = 23;
let intentoss = 1;
while(num2 !== num_secreto){
    console.log("No adivinaste el numero secreto, intenta de nuevo");
    console.log(`intento: ${intentos}`);
    intentos++;
    num2 = parseInt(prompt("Ingresa un numero"));
}
console.log("Felicidades, encontraste el numero secreto");



const num1= parseInt(prompt("ingresa un numero"));

do {
    document.write(`<p>El numero introducido es ${num1}</p>`);
    num1= parseInt(prompt("ingresa un numero"));


}
while(num1 > 5);