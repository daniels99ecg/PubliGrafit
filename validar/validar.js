function validart(){

    let vdni=document.getElementById("dni").value;
    let vnombre=document.getElementById("nombre").value;
    let vapellido=document.getElementById("apellido").value;
    
    let vcorreo=document.getElementById("correo").value;
    let vcontrasena=document.getElementById("contrasena").value;
    let vconfirmar=document.getElementById("confirmar").value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;

    
    if(vdni=="" || vnombre=="" || vapellido==""||vcorreo==""||vcontrasena==""||vconfirmar==""){

        tabla=["#dni", "#nombre","#apellido", "#correo", "#contrasena", "#confirmar"];
        for (const i in tabla) {
           document.querySelector(tabla[i]).style.borderColor="red";
           document.querySelector(tabla[i]).placeholder="Campo Requerido";
        }


      
    }else if(emailRegex.test(vcorreo.value)){
        document.querySelector('#correo').style.borderColor="red";
        document.querySelector('#correo').value="Ingrese un correo valido";
    }else if(vcontrasena!==vconfirmar){
       tabla=["#contrasena","#confirmar" ];
       for (const i in tabla) {
        document.querySelector(tabla[i]).style.borderColor="red";
        document.querySelector(tabla[i]).value="Las contraseñas no son iguales";
     }

    }
    
    else{
        tabla=["#dni", "#nombre","#apellido", "#correo", "#contrasena", "#confirmar"];
        for (const i in tabla) {
           document.querySelector(tabla[i]).style.borderColor="green";
         
        }
    }

  

}