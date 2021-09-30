const $btncat = document.querySelector('#btncat')
const $divcat = document.querySelector('#cats')

$btncat.addEventListener('click', () => {
    const resp = await fetch('http://api.thecatapi.com/v1/images/search');

    const data = await resp.json();

    const imgcat = document.createElement('img')
    imgcat.src = data [0].url;
    imgcat.width  = '300'

    $divcats.appendChild(imgcat);
});