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
  let cantidad = document.getElementById("cantidad").value;
  
  let regex = /^\d+$/;

  if(cliente =="" || comprobante =="" || fecha =="" || total =="" || cantidad ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por favor ingresar datos!',
              
      })
        
  }else if(!regex.test(cliente)){
      Swal.fire({
          icon: 'error',
          title: 'DNI no válido',
          text: 'Por favor ingresar valores alfanuméricos',
              
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
          title: 'Confirmar el envío del formulario?',
          text: "Your file will be saved!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          'Registro Exitoso!',
          'Your file has been registered.',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Registro Cancelado',
          'Registration not completed',
          'error'
          )
          
      }
      
  })
  
}
}

validarVenta2 =() =>{
    
  let cliente = document.getElementById("cliente").value;
  cliente = parseInt(cliente);
  let comprobante = document.getElementById("comprobante").value;
  let fecha = document.getElementById("fecha").value;
  let total = document.getElementById("total").value;
  let cantidad = document.getElementById("cantidad").value;
  
  let regex = /^\d+$/;

  if(cliente =="" || comprobante =="" || fecha =="" || total =="" || cantidad ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por favor ingresar datos!',
              
      })
        
  }else if(!regex.test(cliente)){
      Swal.fire({
          icon: 'error',
          title: 'DNI no válido',
          text: 'Por favor ingresar valores alfanuméricos',
              
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
          title: 'Confirmar el envío del formulario?',
          text: "Your file will be updated!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          'Actualización Exitosa!',
          'Your file has been updated.',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Actualización Cancelada',
          'Your file is safe :)',
          'error'
          )
          
      }
      
  })
  
}
}


validarAdd =() =>{

  Swal.fire({
      title: 'Quieres agregar más productos?',
      text: "You can continue adding products!",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: 'Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Added product', 'Select more products', 'success');
      } else if (result.isDenied) {
        Swal.fire('Saved sale', 'Saved and ready to pay', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Oops!', 'info');
      }
    });       
}


eliminarVenta =() =>{
    
  Swal.fire({
      title: 'Eliminar Registro?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Registro Eliminado',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}


// Validar Clientes

validarCliente =() => {
  
  let dni = document.getElementById("dni").value;
  dni = parseInt(dni);
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  telefono = parseInt(telefono);
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let regex2 = /^\d+$/;
  let regex3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(dni =="" || nombre =="" || apellido =="" || telefono == "" || direccion =="" || email ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por favor ingresar datos!',
              
      })
        
  }else if(!regex2.test(dni)){
      Swal.fire({
          icon: 'error',
          title: 'DNI no válido',
          text: 'Por favor ingresar valores alfanuméricos',
              
      })

  }else if(!regex.test(nombre)){
      Swal.fire({
          icon: 'error',
          title: 'Nombre no válido',
          text: 'Por favor ingresar solo letras',
              
      }) 
      
  }else if(!regex.test(apellido)){
      Swal.fire({
          icon: 'error',
          title: 'Apellido no válido',
          text: 'Por favor ingresar solo letras',
              
      })   
   
  }else if(!regex2.test(telefono)){
      Swal.fire({
          icon: 'error',
          title: 'Teléfono no válido',
          text: 'Por favor ingresar solo números',
              
      })
      
  }else if(!regex3.test(email)){
      Swal.fire({
          icon: 'error',
          title: 'Correo electrónico no válido',
          text: 'Por favor ingresar un correo electrónico válido!',
          
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
          title: 'Confirmar el envío del formulario?',
          text: "Your file will be saved!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          'Registro Exitoso!',
          'Your file has been registered.',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Registro Cancelado', 
          'Registration not completed',
          'error'
          )
          
      }
      
  })
  
}
}

validarCliente2 =() => {
  
  let dni = document.getElementById("dni").value;
  dni = parseInt(dni);
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  telefono = parseInt(telefono);
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let regex2 = /^\d+$/;
  let regex3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(dni =="" || nombre =="" || apellido =="" || telefono == "" || direccion =="" || email ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por favor ingresar datos!',
              
      })
        
  }else if(!regex2.test(dni)){
      Swal.fire({
          icon: 'error',
          title: 'DNI no válido',
          text: 'Por favor ingresar valores alfanuméricos',
              
      })

  }else if(!regex.test(nombre)){
      Swal.fire({
          icon: 'error',
          title: 'Nombre no válido',
          text: 'Por favor ingresar solo letras',
              
      }) 
      
  }else if(!regex.test(apellido)){
      Swal.fire({
          icon: 'error',
          title: 'Apellido no válido',
          text: 'Por favor ingresar solo letras',
              
      })   
   
  }else if(!regex2.test(telefono)){
      Swal.fire({
          icon: 'error',
          title: 'Teléfono no válido',
          text: 'Por favor ingresar solo números',
              
      })
      
  }else if(!regex3.test(email)){
      Swal.fire({
          icon: 'error',
          title: 'Correo electrónico no válido',
          text: 'Por favor ingresar un correo electrónico válido!',
          
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
          title: 'Confirmar el envío del formulario?',
          text: "Your file will be saved!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          'Actualización Exitosa!',
          'Your file has been updated.',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Actualización Cancelada',
          'Your file is safe :)',
          'error'
          )
          
      }
      
  })
  
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


    //Validación Compras Valeria 
function validarCompra (){
  const Proveedor=document.getElementById("Proveedor").value;
  const Fecha=document.getElementById("Fecha").value;
  const Cantidad=document.getElementById("Cantidad").value;
  const Total=document.getElementById("Total").value;
  
  
  
  if(Proveedor=="" || Fecha=="" || Cantidad=="" || Total==""){
  
      Swal.fire({
          icon: 'error',
          title: 'Campos Vacios',
          text: 'Por favor ingresar datos!',
          
        })
  
   Campo = ["#Proveedor", "#Fecha", "#Cantidad", "#Total"];
  
   Swal.fire({
      icon: 'error',
      title: 'Campos Vacios',
      text: 'Por favor ingresar datos!',
      
    })
  }else if(!Number.isInteger(Cantidad)){
      Swal.fire({
          icon: 'error',
          title: 'No se pueden ingresar letras',
          text: 'Por favor ingresar datos!',
          
        })
  }else if(Number.isInteger(Total)){
      document.querySelector("#Total").style.borderColor="red";
      Swal.fire({
          icon: 'error',
          title: 'No se pueden ingresar letras',
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
  
    
