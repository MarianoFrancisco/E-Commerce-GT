const URL = 'http://localhost:5000/';
const form = document.getElementById('registroComunForm');
//cuando se presiona submit se envian los datos
form.addEventListener('submit', enviarDatosRegistro);
function enviarDatosRegistro(evento) {
    //Que el form no envie elementos por efecto
    evento.preventDefault();
    const user = document.getElementById('usuario').value;
    const direccion = document.getElementById('direccion').value;
    const pwd = document.getElementById('pwd').value;
    const datosRegistro = {
        user: user,
        direccion: direccion,
        pwd: pwd
    }
    fetch(URL + "registroComun", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosRegistro)
    })
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function procesarDatos(datos) {
    if (Object.keys(datos).length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al registrar el usuario, es posible que ya exista alguien con ese usuario!',
            footer: '<a>Intentalo de nuevo o prueba con un nuevo usuario</a>'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado correctamente',
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(redireccionar, 1500);
    }
}
function redireccionar() {
    window.location.href = "http://localhost:5500/";
}