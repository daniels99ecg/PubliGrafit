

function ingreso(){

const usuario=document.getElementById('correo').value;
const contra=document.getElementById('contrasena').value;



if(usuario=="danielsenju1999@gmail.com" && contra=="123"){
    console.log('ingreso')
    window.location='Publigrafit/../index.html';
}else{
    console.log('no ingreso')
    window.location='Publigrafit/../login.html';

}

}