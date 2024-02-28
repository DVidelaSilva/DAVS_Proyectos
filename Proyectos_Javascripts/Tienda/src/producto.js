const producto = document.getElementById('producto');


// Color
const propiedadColor = producto.querySelector('#propiedad-color');

propiedadColor.addEventListener('click', (e) => {
    if(e.target.tagName === "INPUT"){
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    } 
});


// Cantidad
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

btnDisminuirCantidad.addEventListener('click', (e) => {
    if(parseInt(inputCantidad.value) > 1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }  
});


// Funcionalidad de las thumbnails
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

thumbs.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG' ){
        const imagenSrc = e.target.src;

        // Obtenemos la posicion del ultimo //
        const lastIndex = imagenSrc.lastIndexOf('/');

        // Cortamos la cadena de texto para obtener solamente una parte //
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        // Cambiamos la ruta de la imagen del producto //
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
});
