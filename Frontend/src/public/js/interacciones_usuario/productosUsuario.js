const URL = 'http://localhost:5000/';

function obtenerProductos(accion) {
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    const idUsuario = {
        id: persona._id
    }
    fetch(URL + accion, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(idUsuario)
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


    console.log(accion);
    if (accion == "myProducts") {
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
                <th scope="col">MODIFICACIÓN</th>
                <th scope="col">ELIMINACIÓN</th>
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
          <td><button class="btn btn-warning" id="editar">Editar</button></td>
          <td><button class="btn btn-danger" id="remove">Eliminar</button></td>
        `;
            tablaProductos.appendChild(fila);
            const remove = fila.querySelector('#remove');
            remove.addEventListener('click', () => {
                const producto = {
                    id: productos._id
                };
                fetch(URL + "removeProduct", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
                    .then(res => res.json())
                    .then(setTimeout(redireccionar, 10))
            });
            const edit = fila.querySelector('#editar');
            edit.addEventListener('click', () => {
                const id = edit.dataset.id;
                window.location.href = `editUsuario.html?id=${productos._id}`;
            });
        })
    } else if (accion == "declineProducts") {
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
                <th scope="col">VOLVER A SOLICITAR</th>
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
          <td><button class="btn btn-success" id="solicitar">SOLICITAR</button></td>
        `;
            tablaProductos.appendChild(fila);
            const remove = fila.querySelector('#solicitar');
            remove.addEventListener('click', () => {
                const producto = {
                    id: productos._id
                };
                fetch(URL + "solicitarRevision", {
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
    } else if (accion == "pendingProducts") {
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
        `;
            tablaProductos.appendChild(fila);
        })
    }

}
function redireccionar() {
    window.location.href = "";
}