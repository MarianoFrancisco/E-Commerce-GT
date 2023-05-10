const URL = 'http://localhost:5000/';

function obtenerPedidos() {
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    fetch(URL + "pedidos")
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function procesarDatos(datos) {
    const tablaPedidos = document.getElementById('tablaPedidos');
    var tr = document.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        tr[i].innerHTML = ''
    }
    console.log(Object.keys(datos).length);
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <thead>
    <tr >
        <th scope="col">PRODUCTOS</th>
        <th scope="col">FECHA ENTREGA</th>
        <th scope="col">TOTAL</th>
        <th scope="col">ESTADO</th>
        <th scope="col">PEDIDO ENTREGADO</th>
    </tr>
</thead>
        `;
    tablaPedidos.appendChild(fila);
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    datos.forEach(pedidos => {
        if (pedidos.usuario != persona._id) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td style="word-break: break-all;">${pedidos.nombre_producto}</td>
          <td >${pedidos.fecha_entrega}</td>
          <td>${pedidos.total}</td>
          <td>${pedidos.estado}</td>
          <td><button type="button" id="ver" class="btn btn-success">ENTREGADO</button></td>
        `;
            tablaPedidos.appendChild(fila);
            const ver = fila.querySelector('#ver');
            const datosPedido={
                id:pedidos._id
            }
            ver.addEventListener('click', () => {
                fetch(URL + "estadoEntregado", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosPedido)
                })
                    .then(res => res.json())
                    .then(entregado())
            });

        }
    })
}
function entregado() {
    Swal.fire({
        icon: 'success',
        title: 'Producto marcado como entregado exitosamente!',
        showConfirmButton: false,
        timer: 1500
    });
    setTimeout(redireccionar, 1500);
}
function redireccionar() {
    window.location.href = "";
}