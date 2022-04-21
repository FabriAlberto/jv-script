
/* BIENVENIDAAA */

function saludar() {
    let saludo = document.querySelector("#nombreSaludo");
    let recuperado = recuperarUi()
    saludo.innerHTML = `Hi! Welcome ${recuperado.nombre}`;
}
saludar();
/* funcion que recupera obj Usuario ingresado del localstorage */
function recuperarUi() {
    return JSON.parse(localStorage.getItem("UsuarioIngresado"))

}
/* funcion que recupera obj Usuarios del localstorage */
function recuperarU() {
    return JSON.parse(localStorage.getItem("Usuarios"))
}

/* Variable global del saldo del usuario */
let saldo = buscarSaldo();
/* mostrar saldo por defecto al iniciar */
mostrarSaldo();
function mostrarSaldo() {

    /* let saldo = buscarSaldo(); */
    let saldoMostrar = document.querySelector("#saldo");
    saldoMostrar.innerHTML = `<p class="saldo__article__p"> ${saldo} </p>`;
}

function buscarSaldo() {
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
    console.log(Users.saldo)
    return Users.saldo
}




/* ACTIVIDADES///////////////// */
let actividades=[];

function comprobarAct(){

/* operador NULLISH que funciona cuando lo que me llega es null o undefined */
    let comprobAct=JSON.parse(localStorage.getItem("Actividades")) ?? localStorage.setItem("Actividades",JSON.stringify(actividades))
    console.log(comprobAct);
}
comprobarAct()

function mostrarActividades(s){

    if(JSON.parse(localStorage.getItem("Actividades"))){
        
        let recupera=JSON.parse(localStorage.getItem("Actividades"))
        console.log(recupera)
        recupera.push(s);
        localStorage.setItem("Actividades",JSON.stringify(recupera))
    }
    else{   
         localStorage.setItem("Actividades",JSON.stringify(s))
    }
    


}









///evento para cerrar sesion///
let btnCerrarsesion = document.querySelector("#btnCerrarSesion");
btnCerrarsesion.addEventListener('click', () => {
    alert("Gracias por usar nuestros servicios ;)")
    window.location.replace("http://127.0.0.1:5500/index.html")


    localStorage.removeItem("UsuarioIngresado")/* esto remueve el objeto donde almaceno nombre
    apellido,saldo y tambien me sirve para decirle al navegador que ya no hay una cuenta ingresada
    en el wallet y puede ingresar otra cuenta */
});




