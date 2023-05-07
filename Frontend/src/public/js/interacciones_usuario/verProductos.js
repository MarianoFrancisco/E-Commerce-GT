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
            const remove = fila.querySelector('#agregar');
            remove.addEventListener('click', () => {
                const cantidad = fila.querySelector('#cantidad');
                const producto = {
                    id:productos._id
                };
            });
            
        }
    })
}
function redireccionar() {
    window.location.href = "";
}