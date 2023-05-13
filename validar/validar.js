function validart(){

    let vdni=document.getElementById("dni").submit();
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