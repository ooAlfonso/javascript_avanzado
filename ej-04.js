// Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrarioinformar el producto y la división del primero respecto al segundo. 

const num1 = parseInt (prompt("antidad uno:"));
const num2 = parseInt (prompt("cantidad dos:"));


function operaciones(num1, num2){

    var summ = num1 + num2;
    var resta = num1 - num2;
    var mult = num1 * num2;
    var divi = num1 / num2;
    

if (num1 > num2){
    document.write(`el resultado de la resta es ${resta} y el resultado de la suma es ${summ} `)
}else {
    document.write(`el resultado de multiplicacion es ${mult}, y el resultado de su division es ${divi}`)
}

}

operaciones(num1, num2)


// if (num1 < num2){
//     document.write(`el resultado de la resta es ${resta} y el resultado de la suma es ${summ} `)
// }else {
//     document.write(`el resultado de multiplicacion es ${mult}, y el resultado de su division es ${divi}`)
// }
