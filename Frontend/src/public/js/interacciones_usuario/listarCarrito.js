function carritoListado() {
    const tablaCarrito = document.getElementById('tablaCarrito');
    var tr = document.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        tr[i].innerHTML = ''
    }
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <thead>
    <tr >
        <th scope="col">VER</th>
        <th scope="col">PRODUCTO</th>
        <th scope="col">PRECIO</th>
        <th scope="col">CANTIDAD A COMPRAR</th>
        <th scope="col">MODIFICACIÓN CANTIDAD</th>
        <th scope="col">ELIMINACIÓN</th>
    </tr>
</thead>
        `;
    tablaCarrito.appendChild(fila);
    if (localStorage.getItem('Carrito') != null) {
        //console.log(localStorage.getItem('Carrito').length);
        //console.log(localStorage.getItem('Carrito').toString.length);
        const carritoJSON = JSON.parse(localStorage.getItem('Carrito'));
        var sumatoria = 0;
        carritoJSON.forEach((carrito, contador) => {
            sumatoria = sumatoria + carrito.precio * carrito.cantidad;
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td><img class="small-flag" src="${carrito.imagen}" width="100" height="100"></td>
          <td scope="row">${carrito.nombre_producto}</td>
          <td>${carrito.precio}</td>
          <td><input type="number" id="cantidad" value="${carrito.cantidad}"></input></td>
          <td><button class="btn btn-success" id="actualizar">ACTUALIZAR</button></td>
          <td><button class="btn btn-danger" id="eliminar">REMOVER</button></td>
        `;
            tablaCarrito.appendChild(fila);
            const actualizarCarrito = fila.querySelector('#actualizar');
            const eliminarProducto = fila.querySelector('#eliminar');
            actualizarCarrito.addEventListener('click', () => {
                const datoCantidad = fila.querySelector('#cantidad');
                cantidad = parseInt(datoCantidad.value, 10)
                if (cantidad <= carrito.existencia) {
                    carrito.cantidad = cantidad;

                    localStorage.setItem("Carrito", JSON.stringify(carritoJSON));
                    Swal.fire({
                        icon: 'success',
                        title: 'Cantidad a comprar actualizada en ' + carrito.nombre_producto,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(redireccionar, 1500);
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'No hay suficiente stock solicitado del producto ' + carrito.nombre_producto,
                        showConfirmButton: false,
                        timer: 1500
                    });setTimeout(redireccionar, 1500);
                }
            });
            eliminarProducto.addEventListener('click', () => {
                carritoJSON.splice(contador, 1);
                localStorage.setItem("Carrito", JSON.stringify(carritoJSON));
                Swal.fire({
                    icon: 'success',
                    title: 'Producto ' + carrito.nombre_producto + ' eliminado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(redireccionar, 1500);
            });
        });
        const miDiv = document.getElementById('total');
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.innerHTML = `<p style="font-size:60px; background-color:#0A1375; color:red;">
        TOTAL:${sumatoria} <button style="float:right; color:white; background-color:green" onclick="location.href='http://localhost:5500/payment'">PAGAR CARRITO</button>
        </p></p>`;
        miDiv.appendChild(nuevoParrafo);
    }
}
function eliminarCarrito() {
    if (localStorage.getItem('Carrito') != null) {
        localStorage.removeItem("Carrito");
        Swal.fire({
            icon: 'success',
            title: 'Carrito eliminado',
            showConfirmButton: false,
            timer: 1000
        });
        setTimeout(redireccionar, 1500);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El carrito ya se encuentra vacío!',
            footer: '<a>Para poder eliminar un carrito primero tienes que tener artículos</a>'
        });
        setTimeout(redireccionar, 1500);
    }
}
function redireccionar() {
    window.location.href = "";
}