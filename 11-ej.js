
// Mostrar todos los numero divisores de un número introducido. 

let num = parseInt(prompt("ingresar numero"));
let i;

for ( let i = 2 ; i < num/2; i++);{
if (num % i == 0){
    document.write(i);
}
}
