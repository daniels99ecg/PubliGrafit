// Validar Usuarios Daniel
function validart(){

    
    let vnombre=document.getElementById("nombre").value;
    let vapellido=document.getElementById("apellido").value;
    
    let vcorreo=document.getElementById("correo").value;
    let vcontrasena=document.getElementById("contrasena").value;
    let vconfirmar=document.getElementById("confirmar").value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;

    
    if( vnombre=="" || vapellido==""||vcorreo==""||vcontrasena==""||vconfirmar==""){

        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })


      
    }else if(!vcorreo.includes("@") || !vcorreo.includes(".com")){
        Swal.fire({
            icon: 'error',
            title: 'Correo no valido',
            text: 'Por favor ingresar un correo valido!',
            
          })
    }else if(vcontrasena!==vconfirmar){
        Swal.fire({
            icon: 'error',
            title: 'La contraseña no coincide ',
            text: 'Verifique que sus contraseñas sean iguales!',
            
          })

    }else{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Confirmar el envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Registro Enviado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
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




    //Validacion de insumos Registar...
//Validacion de insumos Registar... Hayberth
validarInsumos =() =>{
    
    let nombre= document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    

    if(nombre =="" || precio =="" || cantidad =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(nombre))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no valido en el campo (Nombre)',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Cantidad)',
            text: 'Por favor ingresar solo numeros',
            
          })
    }else if((!Number.isInteger(precio))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Precio)',
            text: 'Por favor ingresar solo numeros',
            
          })
    }else{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Confirmar el envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Insumo Registrado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el registro del insumo',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        }
    }


//Validacion de insumos actualizar. Hayberth
validarAInsumos =() =>{
    let nombre= document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    

    if(nombre =="" || precio =="" || cantidad =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(nombre))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no valido en el campo (Nombre)',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Cantidad)',
            text: 'Por favor ingresar solo numeros',
            
          })
    }else if((!Number.isInteger(precio))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Precio)',
            text: 'Por favor ingresar solo numeros',
            
          })
    }else{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Confirmar el envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Insumo Actualizado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio para la actualizacion',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        }
    }
     
  



// validacion de productos camilo
validarProducto =() =>{
     
    let producto= document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    
    if(producto =="" || precio =="" || cantidad =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(producto))){
        Swal.fire({
            icon: 'error',
            title: 'Datos inavalidos en producto',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Datos inavalidos en cantidad',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }else if((!Number.isInteger(precio))){
        Swal.fire({
            icon: 'error',
            title: 'Datos inavalidos en precio',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }else{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Confirmar en envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Registro Enviado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
    }
    
// validacion de ficha tecnica camilo 
validarFicha =() =>{
     
    let producto= document.getElementById("producto").value;
    let detalle= document.getElementById("detalle").value;
    let cantidad1 = document.getElementById("cantidad1").value;
    cantidad1=parseInt(cantidad1);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    
    if(producto =="" || cantidad1 =="" || cantidad =="" || detalle =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(producto))){
        Swal.fire({
            icon: 'error',
            title: 'Datos invalidos en producto',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Datos invalidos en cantidad',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }else if((!Number.isInteger(cantidad1))){
        Swal.fire({
            icon: 'error',
            title: 'Datos invalidos en cantidad',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }
    else if((!Caracteres.test(detalle))){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacio',
            text: 'Por favor ingresar datos!',
            
          })
    }else{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Confirmar el envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Registro Enviado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
    }
    
