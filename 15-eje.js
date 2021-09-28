const $btncat = document.querySelector('#btncat');


$btncat.addEventListener('click', () => {
    fetch('http://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(data =>{
        console.log(data);
        /* desestructuracion 
            se utiliza para extraer elementos de un arreglo u objeto
            para retirara mas objetos se requiere sepapar por objetos 
            const [cat] = data; un solo elemento
            const [cat,cat2. cat3] retirar mas elemetos solo se separan con comas 
            const cat = data[0];
            para destructurar arreglos se ocupa [] para desestructuracion de objetos se ocupan {}

        */
        const imgcat = document.createElement('img')
        
        imgcat.src = data[0].url;
        document.write(imagcat)
        document.body.append(imgcat)
    })
});

// http://api.thecatapi.com/v1/images/search