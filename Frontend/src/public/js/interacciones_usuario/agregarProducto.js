const URL = 'http://localhost:5000/';
const form = document.getElementById('nuevoProductoForm');
//cuando se presiona submit se envian los datos
form.addEventListener('submit', enviarDatosRegistro);
function enviarDatosRegistro(evento) {
    //Que el form no envie elementos por efecto
    evento.preventDefault();
    let persona= JSON.parse(localStorage.getItem("Usuario"));
    const nombre_producto = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const existencia = document.getElementById('existencia').value;
    var arreglo=[];
    console.log(document.getElementById('cb1').checked);
    if(document.getElementById('cb1').checked){
        arreglo.push(document.getElementById('cb1').value);
    }if(document.getElementById('cb2').checked){
        arreglo.push(document.getElementById('cb2').value);
    }if(document.getElementById('cb3').checked){
        arreglo.push(document.getElementById('cb3').value);
    }if(document.getElementById('cb4').checked){
        arreglo.push(document.getElementById('cb4').value);
    }if(document.getElementById('cb5').checked){
        arreglo.push(document.getElementById('cb5').value);
    }if(document.getElementById('cb6').checked){
        arreglo.push(document.getElementById('cb6').value);
    }
    const categoria = arreglo;
    const usuario =persona._id;
    const obtenerImg=document.getElementById('img');
    const imagen = obtenerImg.files[0];
    //console.log(imagen.name+"\n"+valueOf(obtenerImg.files[0])+"\n"+obtenerImg);
    const datos=new FormData();
    datos.append('nombre_producto',nombre_producto);
    datos.append('descripcion',descripcion);
    datos.append('precio',precio);
    datos.append('existencia',existencia);
    datos.append('categoria',categoria);
    datos.append('usuario',usuario);
    datos.append('imagen',imagen);
    /*const datosProducto = {
        nombre_producto:nombre_producto,
        descripcion:descripcion,
        imagen:imagen,
        precio:precio,
        usuario:usuario,
        existencia:existencia,
        categoria:categoria
    }*/
    fetch(URL + "nuevoProducto", {
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then(datos => procesarDatos(datos))
}
function procesarDatos(datos) {
    if (Object.keys(datos).length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al registrar el producto!',
            footer: '<a>Intentalo de nuevo, recuerda llenar bien tus campos</a>'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Producto registrado correctamente, pendiente de ser aceptado',
            showConfirmButton: false,
            timer: 1500
        });
        //setTimeout(redireccionar, 1500);
    }
}
function redireccionar() {
    window.location.href = "http://localhost:5500/vender";
}