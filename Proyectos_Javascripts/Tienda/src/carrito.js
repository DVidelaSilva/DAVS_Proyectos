const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];



const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    carrito.forEach((productoCarrito) => {

        // Creamos una plantilla del codigo HTML
        const plantillaProducto = `							
        <div class="carrito__producto-info">
            <img src="./img/tennis/1.jpg" alt="" class="carrito__thumb" />
            <div>
                <p class="carrito__producto-nombre">
                    <span class="carrito__producto-cantidad">1 x </span>Lorem Ipsum Dolot Asimmet
                </p>
                <p class="carrito__producto-propiedades">
                    Tamaño:<span>2,5</span> Color:<span>Rojo</span>
                </p>
            </div>
        </div>
        <div class="carrito__producto-contenedor-precio">
            <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                    />
                </svg>
            </button>
            <p class="carrito__producto-precio">$500.00</p>
        </div>
        `;

        // Creamos un div
        const itemCarrito = document.createElement('div');

        // Le agregamos la clase de caarito__producto
        itemCarrito.classList.add('carrito__producto');

        itemCarrito.innerHTML = plantillaProducto;

        // Agregamos el producto a la ventana del carrito
        ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
    })


}


// Abrir Carrito
botonesAbrirCarrito.forEach(boton => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    })
})

// Cerrar Carrito
botonesCerrarCarrito.forEach(boton => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    })
})



btnAgregarCarrito.addEventListener('click', (e) => {
    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    //console.log(id, nombre, cantidad, color, tamaño)

    carrito.push({
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        color: color,
        tamaño: tamaño
    })
});