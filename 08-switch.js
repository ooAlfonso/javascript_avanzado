/* switch
    estructura de control de flujo
    (tipo if)
    break sirve para cerrar el caso y no continuar evaluando
*/
    


const edad = parseInt(prompt("ingresa edad "))
let mensaje = "";

switch (edad){
    case -18:
        mensaje ="acaba de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "ya eres adulto";
        break;
    case 70:
            mensaje = "ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera de rango de edad";
        break;

}


document.write(`<p>${mensaje}</p>`) 



const nombre = prompt("Ingresa tu nombre");
let mensaje = '';


/*javascript la validacion en cadena es sensible a las mayusculas y las minusculas*/
/*en ese caso se puede ocupar toLowerCase valida los datos y lo manda en minusculas */ 

switch(nombre.toLowerCase()){
    case 'Alfonso':
        mensaje = 'Eres administrador';
        break;
    case 'Juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = 'No tienes permiso para usar el sistema';
        break;
}

document.write(`<p>${mensaje}</p>`)