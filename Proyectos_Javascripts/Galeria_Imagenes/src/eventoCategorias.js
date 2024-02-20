import dataFotos from './datos/fotos';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault(); // previene el comportamiento que tiene por defecto el navegador (enviar al inicio de la pagina)


    if(e.target.closest('a')){
        galeria.classList.add('galeria--active'); //galeria--active es el estilo css de la galeria
        document.body.style.overflow = 'hidden';

        const categoriaActiva = e.target.dataset.categoria;
        const fotos = dataFotos.fotos[categoriaActiva]

        fotos.forEach((foto) => {
            const slide = `		<a href="#" class="galeria__carousel-slide">
                                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="foto ruta" />
                                </a>`
        
        galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
       

    }
});
