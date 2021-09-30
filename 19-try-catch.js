/*try nos permite ejecutar codigo propenso a fallar de una manera segura
*/
const gravedad = 9.8;
console.log(gravedad);

// gravedad  = 10.1;
// console.log(gravedad)
/*intenta ejecutar el codigo, si hay un error, recibe el catch*/
try {
    gravedad = 10.1;
    /*el catch se ejecuta si hay un error, recibe como primer parametro el error */
} catch(error){
    console.log(error)
    /*el finally siempre se ejecuta */
} finally{
    console.log('soy el finally')
}
console.log(gravedad)