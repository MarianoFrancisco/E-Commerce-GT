const URL = 'http://localhost:5000/';

function obtenerProductos() {
    fetch(URL + "pendientProducts", {
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
        <th scope="col">AGREGAR</th>
        <th scope="col">DESCARTAR</th>
    </tr>
</thead>
        `;
    tablaProductos.appendChild(fila);
    datos.forEach(productos => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img class="small-flag" src="${productos.imagen}" width="100" height="100"></td>
          <td scope="row">${productos.nombre_producto}</td>
          <td>${productos.descripcion}</td>
          <td>${productos.precio}</td>
          <td>${productos.existencia}</td>
          <td>${productos.categoria}</td>
          <td><button class="btn btn-success" id="aceptar">ACEPTAR</button></td>
          <td><button class="btn btn-danger" id="rechazar">RECHAZAR</button></td>
        `;
        tablaProductos.appendChild(fila);
        const aceptarProducto = fila.querySelector('#aceptar');
        const rechazarProducto = fila.querySelector('#rechazar');
        aceptarProducto.addEventListener('click', () => {
            const producto = {
                id:productos._id
            };
            fetch(URL + "aceptarProducto", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
                .then(res => res.json())
                .then(setTimeout(redireccionar, 10))
        });
        rechazarProducto.addEventListener('click', () => {
            const producto = {
                id:productos._id
            };
            fetch(URL + "rechazarProducto", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
                .then(res => res.json())
                .then(setTimeout(redireccionar, 10))
        });
    })

}
function redireccionar() {
    window.location.href = "";
}