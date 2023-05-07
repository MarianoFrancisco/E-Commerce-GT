const URL = 'http://localhost:5000/';

function obtenerProductos(accion) {
    fetch(URL + accion, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(datos => procesarDatos(datos, accion))
}
function procesarDatos(datos, accion) {
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
        <th scope="col">PRODUCTO</th>
        <th scope="col">DESCRIPCION</th>
        <th scope="col">IMAGEN</th>
        <th scope="col">PRECIO</th>
        <th scope="col">EXISTENCIA</th>
        <th scope="col">CATEGORÍAS</th>
        <th scope="col">MODIFICACIÓN</th>
        <th scope="col">ELIMINACIÓN</th>
    </tr>
</thead>
        `;
    tablaProductos.appendChild(fila);
    console.log(accion);
    if (accion == "myProducts") {
        datos.forEach(productos => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td scope="row">${productos.nombre_producto}</td>
          <td>${productos.descripcion}</td>
          <td><img class="small-flag" src="${productos.imagen}" width="100" height="100"></td>
          <td>${productos.precio}</td>
          <td>${productos.existencia}</td>
          <td>${productos.categoria}</td>
          <td><button class="editar" data-id="${productos._id}">Editar</button></td>
          <td><button class="eliminar">Eliminar</button></td>
        `;
            tablaProductos.appendChild(fila);

            //Para abrir el documento
            const editarButton = fila.querySelector('.editar');
            editarButton.addEventListener('click', () => {
                const id = editarButton.dataset.id;
                window.location.href = `editUsuario.html?id=${id}`;
            });
        })
    }else if (accion == "declineProducts") {
        datos.forEach(productos => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td scope="row">${productos.nombre_producto}</td>
          <td>${productos.descripcion}</td>
          <td><img class="small-flag" src="${productos.imagen}" width="100" height="100"></td>
          <td>${productos.precio}</td>
          <td>${productos.existencia}</td>
          <td>${productos.categoria}</td>
          <td><button class="solicitar" data-id="${productos._id}">SOLICITAR</button></td>
        `;
            tablaProductos.appendChild(fila);
            //Para abrir el documento
            const editarButton = fila.querySelector('.solicitar');
            editarButton.addEventListener('click', () => {
                const id = editarButton.dataset.id;
                window.location.href = `editUsuario.html?id=${id}`;
            });
        })
    }else if (accion == "pendingProducts") {
        datos.forEach(productos => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td scope="row">${productos.nombre_producto}</td>
          <td>${productos.descripcion}</td>
          <td><img class="small-flag" src="${productos.imagen}" width="100" height="100"></td>
          <td>${productos.precio}</td>
          <td>${productos.existencia}</td>
          <td>${productos.categoria}</td>
        `;
            tablaProductos.appendChild(fila);
        })
    }

}