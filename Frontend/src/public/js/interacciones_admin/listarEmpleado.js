const URL = 'http://localhost:5000/';

function obtenerEmpleados() {
    fetch(URL + "empleados")
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function procesarDatos(datos) {
    const tablaPedidos = document.getElementById('tablaEmpleados');
    var tr = document.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        tr[i].innerHTML = ''
    }
    console.log(Object.keys(datos).length);
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <thead>
    <tr >
        <th scope="col">USUARIO</th>
        <th scope="col">DIRECCION</th>
        <th scope="col">ROL</th>
        <th scope="col">EDICIÓN</th>
        <th scope="col">ELIMINACIÓN</th>
    </tr>
</thead>
        `;
    tablaPedidos.appendChild(fila);
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    datos.forEach(empleados => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
          <td style="word-break: break-all;">${empleados.user}</td>
          <td >${empleados.direccion}</td>
          <td>${empleados.tipo_usuario}</td>
          <td><button type="button" id="editar" class="btn btn-warning">EDITAR</button></td>
          <td><button type="button" id="eliminar" class="btn btn-danger">ELIMINAR</button></td>
        `;
            tablaPedidos.appendChild(fila);
            const editar = fila.querySelector('#editar');
            const eliminar = fila.querySelector('#eliminar');
            editar.addEventListener('click', () => {
                
            });
            eliminar.addEventListener('click', () => {
                const empleado = {
                    id: empleados._id
                };
                fetch(URL + "removeEmpleado", {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(empleado)
                })
                    .then(res => res.json())
                    .then(eliminado())
            });
    })
}
function eliminado() {
    Swal.fire({
        icon: 'error',
        title: 'Empleado eliminado!',
        showConfirmButton: false,
        timer: 1500
    });
    setTimeout(redireccionar, 1500);
}
function redireccionar() {
    window.location.href = "";
}