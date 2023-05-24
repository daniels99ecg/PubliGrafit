

function ingreso(){

const usuario=document.getElementById('correo').value;
const contra=document.getElementById('contrasena').value;



if(usuario=="danielsenju1999@gmail.com" && contra=="123"){
    console.log('ingreso')
    window.location='../../../index.html';
}

else if(usuario=="camilo@gmail.com" && contra=="123456") {
    console.log('ingreso')
    window.location='./Empleado/index.html';
}else{
    console.log('no ingreso')
    window.location='Publigrafit/../login.html';

}

}