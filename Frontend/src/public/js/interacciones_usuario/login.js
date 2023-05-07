const URL= 'http://localhost:5000/';
const form = document.getElementById('loginForm');
//cuando se presiona submit se envian los datos
form.addEventListener('submit',enviarDatosLogin);
function enviarDatosLogin(evento){
    //Que el form no envie elementos por efecto
    evento.preventDefault();
    const user=document.getElementById('usuario').value;
    const pwd=document.getElementById('pwd').value;
    const datosLogin={
        user:user,
        pwd:pwd
    }
    fetch(URL+"login",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datosLogin)
    })
    .then(res=>res.json())
    .then(datos=>procesarDatos(datos))
}
function procesarDatos(datos){
    //ver si hay datos en el json significa que se encontró
    if(Object.keys(datos).length==1){
        localStorage.setItem("Usuario",JSON.stringify(datos[0]));
        let persona= JSON.parse(localStorage.getItem("Usuario"));
        console.log(persona._id);
        if(datos[0].tipo_usuario=="Comun"){
            window.location.href = "http://localhost:5500/home";
        }else if(datos[0].tipo_usuario=="Paqueteria"){
            window.location.href = "http://localhost:5500/package";
        }else if(datos[0].tipo_usuario=="Administrador"){
            window.location.href = "http://localhost:5500/admin";
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario con la contraseña ingresada no existe!',
            footer: '<a>Verifica si escribiste bien tu usuario y tu contraseña</a>'
          });
    }
    
}