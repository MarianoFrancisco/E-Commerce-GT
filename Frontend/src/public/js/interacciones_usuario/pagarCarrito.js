const URL = 'http://localhost:5000/';
//cuando se presiona submit se envian los datos
const form = document.getElementById('tarjetaForm');
form.addEventListener('submit', eleccionDatos);
function eleccionDatos(evento) {
    evento.preventDefault();
    botonSubmit = evento.submitter.name;
    if (evento.submitter.name == "saveTarjet") {
        guardarTarjeta();
    } else {
        guardarPedido();
    }
}
function guardarTarjeta() {
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    const numero_tarjeta = document.getElementById('numero').value;
    const fecha_expiracion = document.getElementById('fecha').value;
    const csv = document.getElementById('codigo').value;
    const propietario = document.getElementById('nombre').value;
    const datosTarjeta = {
        numero_tarjeta: numero_tarjeta,
        usuario: persona._id,
        fecha_expiracion: fecha_expiracion,
        csv: csv,
        propietario: propietario
    }
    fetch(URL + "saveCard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosTarjeta)
    })
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function obtenerTarjetas() {
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    fetch(URL + "tarjetas?id=" + persona._id)
        .then(res => res.json())
        .then(datos => cargarComboBox(datos));
}
function cargarComboBox(datos) {
    const comboTarjeta = document.getElementById('comboTarjetas');

    datos.forEach(datos => {
        const elemento = document.createElement('option');
        elemento.innerHTML = `
        <option>${datos.numero_tarjeta}<option>
        `;
        comboTarjeta.appendChild(elemento);
    });
}
function procesarDatos(datos) {
    if(Object.keys(datos).length>1){
        Swal.fire({
            icon: 'success',
            title: 'Tarjeta guardada exitosamente',
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(redireccionar, 1500);
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al guardar la tarjeta!',
            footer: '<a>Es posible que esta tarjeta ya esté asociada a una cuenta</a>'
          });
    }
    //console.log(datos[0]);
}
function guardarPedido() {
    let persona = JSON.parse(localStorage.getItem("Usuario"));
    let carrito = JSON.parse(localStorage.getItem('Carrito'));
    const usuario_compra = persona._id;
    var fecha_entrega=new Date();
    fecha_entrega.setDate(fecha_entrega.getDate()+5);
    fecha_entrega=fecha_entrega.toLocaleDateString();
    var total=0;
    var usuario_venta=[],producto=[],cantidad=[],imagen=[],precio=[];
    for (let i = 0; i < carrito.length; i++) {
        usuario_venta.push(carrito[i].usuario_venta);
        producto.push(carrito[i].producto);
        cantidad.push(carrito[i].cantidad);
        imagen.push(carrito[i].imagen);
        precio.push(carrito[i].precio);
        total=total+carrito[i].precio*carrito[i].cantidad;
    }
    const datosPedido= {
        usuario_compra:usuario_compra,
        usuario_venta:usuario_venta,
        imagen:imagen,
        producto:producto,
        cantidad:cantidad,
        precio:precio,
        total:total,
        fecha_entrega:fecha_entrega
    }
    fetch(URL + "guardarPedido", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosPedido)
    })
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function redireccionar() {
    window.location.href = "";
}