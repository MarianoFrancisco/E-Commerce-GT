const URL = 'http://localhost:5000/';

function obtenerProductos(accion) {
    fetch(URL + accion, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function procesarDatos(datos) {
    const tablaProductos = document.getElementById('tablaProducto');
    var tr = document.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        tr[i].innerHTML = ''
    }
    console.log(Object.keys(datos).length);
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <thead>
    <tr >
        <th scope="col">VER</th>
        <th scope="col">PRODUCTO</th>
        <th scope="col">DESCRIPCION</th>
        <th scope="col">PRECIO</th>
        <th scope="col">EXISTENCIA</th>
        <th scope="col">CATEGORÍAS</th>
        <th scope="col">COMPRAR</th>
        <th scope="col">CARRITO</th>
    </tr>
</thead>
        `;
    tablaProductos.appendChild(fila);
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    datos.forEach(productos => {
        if (productos.usuario != persona._id) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td><img class="small-flag" src="${productos.imagen}" width="100" height="100"></td>
          <td scope="row">${productos.nombre_producto}</td>
          <td>${productos.descripcion}</td>
          <td>${productos.precio}</td>
          <td>${productos.existencia}</td>
          <td>${productos.categoria}</td>
          <td><input type="number" id="cantidad"></input></td>
          <td><button type="button" id="agregar" class="btn btn-success">Agregar</button></td>
        `;
            tablaProductos.appendChild(fila);
            const agregar = fila.querySelector('#agregar');
            agregar.addEventListener('click', () => {
                const datoCantidad = fila.querySelector('#cantidad');
                const cantidad = parseInt(datoCantidad.value, 10)
                const productoCarrito = {
                    usuario_venta: productos.usuario,
                    nombre_producto: productos.nombre_producto,
                    producto: productos._id,
                    precio: productos.precio,
                    cantidad: cantidad,
                    existencia: productos.existencia,
                    imagen: productos.imagen
                };
                if (cantidad <= productos.existencia) {
                    if (localStorage.getItem('Carrito') == null) {
                        localStorage.setItem("Carrito", JSON.stringify([]));
                    }
                    let carritoAgregar = JSON.parse(localStorage.getItem('Carrito'));
                    var siNo = true;
                    for (let i = 0; i < carritoAgregar.length; i++) {
                        if (carritoAgregar[i].producto==productoCarrito.producto) {
                            siNo = false;
                        }
                    }
                    if (siNo) {
                        carritoAgregar.push(productoCarrito);
                        localStorage.setItem("Carrito", JSON.stringify(carritoAgregar));
                        Swal.fire({
                            icon: 'success',
                            title: productoCarrito.cantidad + ' de ' + productoCarrito.nombre_producto + ' agregado al carrito',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(redireccionar, 1500);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Producto ya agregado al carrito',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'No hay suficiente producto de lo solicitado',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });

        }
    })
}
function redireccionar() {
    window.location.href = "";
}