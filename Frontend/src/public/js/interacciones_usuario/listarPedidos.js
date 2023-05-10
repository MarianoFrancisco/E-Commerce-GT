const URL = 'http://localhost:5000/';

function obtenerPedidos(accion) {
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    fetch(URL + accion + "?id=" + persona._id)
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function procesarDatos(datos) {
    const tablaPedidos = document.getElementById('tablaProducto');
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
        <th scope="col">VER</th>
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
          <td><button type="button" id="ver" class="btn btn-success">DETALLES</button></td>
        `;
            tablaPedidos.appendChild(fila);
            const ver = fila.querySelector('#ver');
            ver.addEventListener('click', () => {
                
            });

        }
    })
}
function redireccionar() {
    window.location.href = "";
}