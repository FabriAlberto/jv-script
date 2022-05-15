


!localStorage.getItem("UsuarioIngresado") && window.location.replace("http://127.0.0.1:5500/index.html");



const   btnAbrirFormulario = document.querySelector("#btn-abrir-formulario"),
        contenedor=document.querySelector(".contenedor"),
        formulario = document.querySelector('#formulario-tarjeta'),
        numTarjeta=document.querySelector("#inputNumero"),
        numero=document.querySelector(".numero"),
        nombreTarjeta=document.querySelector("#inputNombre"),
        nombre=document.querySelector(".nombre"),
        mes=document.querySelector("#selectMes"),
        año=document.querySelector("#selectYear"),
        mesTarjeta=document.querySelector(".mes"),
        añoTarjeta=document.querySelector(".año"),
        btnEnviar=document.querySelector(".btn-enviar"),
        contraseña=document.querySelector("#inputCCV");


/* funcion para comprobar si hay tarjetas agregadas  */
/* let Tarjetas=[];
function comprobarTarj() {
    let comprobAct = JSON.parse(localStorage.getItem("TARJETAS")) || localStorage.setItem("TARJETAS", JSON.stringify(Tarjetas))
    console.log(comprobAct);
}
comprobarTarj(); */

/* funcion que recupera obj Usuario ingresado del localstorage */
function recuperarUi() {
    return JSON.parse(localStorage.getItem("UsuarioIngresado"))

}
/* funcion que recupera obj Usuarios del localstorage */
function recuperarU() {
    return JSON.parse(localStorage.getItem("Usuarios"))
}
/* function modificarUsuario(){
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
 
    return Users;
}
console.log(modificarUsuario().Tarjeta); */
class NuevaTarjeta {
    constructor(nombre, numDeTarj, expiracion, contraseña) {
            this.nombre = nombre,
            this.numDeTarj = numDeTarj,
            this.expiracion = expiracion,
            this.contraseña = contraseña
    }
}




/* BOTON PARA BAJAR EL FORMULARIO DE LA TARJETA */
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
    contenedor.classList.toggle('contenedor_active')
});

/* FUNCTION PARA AGREGAR TARJETA AL LOCALSTORAGE */

btnEnviar.addEventListener('click',agregarTarjeta)


   
function agregarTarjeta(){

    let tarjnew=new NuevaTarjeta(nombreTarjeta.value, numTarjeta.value,(mes.value,año.value), contraseña.value);
   /*  let recupera = JSON.parse(localStorage.getItem("TARJETAS"))
    console.log(recupera)
     recupera.push(tarjnew);
    localStorage.setItem("TARJETAS", JSON.stringify(recupera)); */
    
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();    
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
    /* let Users=modificarUsuario() */
    let tarjetaPush=Users.Tarjeta;
    tarjetaPush.push(tarjnew);
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
}




/* EVENTO KEYUP PARA MOSTRAR NUMEROS DEL INPUT EN LA TARJETA */
numTarjeta.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	numTarjeta.value = valorInput
	/* Eliminamos espacios en blanco */
	.replace(/\s/g, '')
	/* Eliminar las letras */
	.replace(/\D/g, '')
	/* Ponemos espacio cada cuatro numeros */
	.replace(/([0-9]{4})/g, '$1 ')
	/* Elimina el ultimo espaciado */
	.trim();
	numero.innerHTML = `${valorInput}`;

    valorInput==""?numero.innerHTML="**** **** **** ****":valorInput;
	
});

nombreTarjeta.addEventListener('keyup', (e) => {

   let valorInput=e.target.value;
   nombreTarjeta.value=valorInput.replace(/[0-9]/g, '');
   nombre.innerHTML=`${valorInput}`;


   valorInput==""? nombre.innerHTML="pepito pep": valorInput;


});

for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	mes.appendChild(opcion);
}

const yearActual = new Date().getFullYear();


for(let i = yearActual; i <= yearActual + 6; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	año.appendChild(opcion);
}
mes.addEventListener('change' ,()=> { 
    let valorop=mes.value;
    mesTarjeta.innerHTML=`${valorop}`;


});
año.addEventListener('change' ,()=> { 
    let valorop=año.value;
    añoTarjeta.innerHTML=`${valorop}`;


});


