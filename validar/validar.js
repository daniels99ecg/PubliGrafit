// Validar Usuarios Daniel
function validart(){

    let vdni=document.getElementById("dni").value;
    let vnombre=document.getElementById("nombre").value;
    let vapellido=document.getElementById("apellido").value;
    let vtelefono=document.getElementById("telefono").value;
    let vcorreo=document.getElementById("correo").value;
    let vcontrasena=document.getElementById("contrasena").value;
    
    
    if(vdni=="" || vnombre=="" || vapellido==""||vtelefono==""||vcorreo==""||vcontrasena==""){
        tabla=["#dni", "#nombre","#apellido", "#telefono", "#correo", "#contrasena"];
        for (const i in tabla) {
           document.querySelector(tabla[i]).style.borderColor="red";
           document.querySelector(tabla[i]).placeholder="Campo Requerido";
        }


      
    }else{
     console.log("Pruebas")
    }

  

}

// Validar Ventas Andrés

validarVenta =() =>{
    
    let cliente = document.getElementById("cliente").value;
    cliente = parseInt(cliente);
    let comprobante = document.getElementById("comprobante").value;
    let fecha = document.getElementById("fecha").value;
    let total = document.getElementById("total").value;
    

    if(cliente =="" || comprobante =="" || fecha =="" || total ==""){
        alert("Los campos estan vacios");
    }else if(!Number.isInteger(cliente)){
        alert("DNI Cliente es incorrecto, ingrese solo números");
    }else{
        alert("Venta registrada");
    }
}

//     var hoy             = new Date();
// var fechaFormulario = new Date('2016-11-10');

// // Comparamos solo las fechas => no las horas!!
// hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

// if (hoy <= fechaFormulario) {

//   console.log("Fecha a partir de hoy");
// }
// else {
//   console.log("Fecha pasado");
// }

// Validar Clientes Andrés
validarCliente=() => {
    
    let dni = document.getElementById("dni").value;
    dni = parseInt(dni);
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    telefono = parseInt(telefono);
    let direccion = document.getElementById("direccion").value;
    let email = document.getElementById("email").value;
    
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    let email_validar = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
    if(dni =="" || nombre =="" || apellido =="" || telefono =="" || direccion =="" || email ==""){
        alert("Los campos están vacios");
    }else if(!Number.isInteger(dni)){
        alert("DNI es incorrecto, ingrese solo números");
    }else if(!Caracteres.test(nombre)){
        alert("Nombre es incorrecto, ingrese solo letras");
    }else if(!Caracteres.test(apellido)){
        alert("Apellido es incorrecto ingrese solo letras")
    }else if(!Number.isInteger(telefono)){
        alert("Teléfono es incorrecto, ingrese solo números");
    }else if(!email_validar.test(email)){
        alert("Correo electrónico incorrecto")
    }else{
        alert("Cliente registrado");
    }
}



    // if(n == "" || e == "" || p == "" || cp == ""){
    //     alert("ingrese informacion en  los campos vacios");
    // }else if (!letters.test(n)){
    //     alert("nombre es incorrecto. ingrese solo letras")
    // }else if(!email_val.test(e)){
    //     alert("email es incorrecto. ingrese un correo valido")
    // }else if(p!=cp){
    //     alert("contraseñas no coinciden")
    // }else if(document.getElementById("p1").value.length>12){
    //     alert("tiene que tener maximo 12 caracteres")
    // }else if(document.getElementById("p1").value.length<6){
    //     alert("tiene que tener minimo 6 caracteres");
    // }else{
    //     alert("se ha creado correctamente");
    // }
