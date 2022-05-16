


!localStorage.getItem("UsuarioIngresado") && window.location.replace("http://127.0.0.1:5500/index.html");



const btnAbrirFormulario = document.querySelector("#btn-abrir-formulario"),
    contenedor = document.querySelector(".contenedor"),
    formulario = document.querySelector('#formulario-tarjeta'),
    numTarjeta = document.querySelector("#inputNumero"),
    numero = document.querySelector(".numero"),
    nombreTarjeta = document.querySelector("#inputNombre"),
    nombre = document.querySelector(".nombre"),
    mes = document.querySelector("#selectMes"),
    año = document.querySelector("#selectYear"),
    mesTarjeta = document.querySelector(".mes"),
    añoTarjeta = document.querySelector(".año"),
    btnEnviar = document.querySelector(".btn-enviar"),
    contraseña = document.querySelector("#inputCCV"),
    misTarjetas = document.querySelector(".misTarjetas")


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
/* btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
    contenedor.classList.toggle('contenedor_active')
});
 */
/* FUNCTION PARA AGREGAR TARJETA AL LOCALSTORAGE */

btnEnviar.addEventListener('click', agregarTarjeta)



function agregarTarjeta() {

    let tarjnew = new NuevaTarjeta(nombreTarjeta.value, numTarjeta.value, (mes.value, año.value), contraseña.value);
    /*  let recupera = JSON.parse(localStorage.getItem("TARJETAS"))
     console.log(recupera)
      recupera.push(tarjnew);
     localStorage.setItem("TARJETAS", JSON.stringify(recupera)); */

    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
    /* let Users=modificarUsuario() */
    let tarjetaPush = Users.Tarjeta;
    tarjetaPush.push(tarjnew);
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    mostrarTarjeta();
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

    valorInput == "" ? numero.innerHTML = "**** **** **** ****" : valorInput;

});

nombreTarjeta.addEventListener('keyup', (e) => {

    let valorInput = e.target.value;
    nombreTarjeta.value = valorInput.replace(/[0-9]/g, '');
    nombre.innerHTML = `${valorInput}`;


    valorInput == "" ? nombre.innerHTML = "pepito pep" : valorInput;


});

for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    mes.appendChild(opcion);
}

const yearActual = new Date().getFullYear();


for (let i = yearActual; i <= yearActual + 6; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    año.appendChild(opcion);
}
mes.addEventListener('change', () => {
    let valorop = mes.value;
    mesTarjeta.innerHTML = `${valorop}`;


});
año.addEventListener('change', () => {
    let valorop = año.value;
    añoTarjeta.innerHTML = `${valorop}`;


});


function mostrarTarjeta() {
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)

    let tarjetaPush = Users.Tarjeta;
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    pintarTarjeta(tarjetaPush)
}
function pintarTarjeta(tarjetaPush) {
    misTarjetas.innerHTML = "";
    tarjetaPush.forEach(tarj => {
        let liTarj = document.createElement("div")
        liTarj.classList.add(`contenedor__tarjetas`);
        liTarj.innerHTML = `
        <button class="btnBorrarTarjeta" onclick="borrarTarjeta('${tarj.numDeTarj}')"><i class="bi bi-trash"></i></button>
        <section class="tarjeta" id="tarjeta">
         <div class="delantera">
          <div class="logo-marca" id="logo-marca">
              <img src="../imagenes/visa.png" alt="">
          </div>
          <img src="../imagenes/chip-tarjeta.png" class="chip" alt="">
          <div class="datos">
              <div class="grupo" id="numero">
                  <p class="label">Número Tarjeta</p>
                  <p class="numero">${tarj.numDeTarj}</p>
              </div>
              <div class="flexbox">
                  <div class="grupo" id="nombre">
                      <p class="label">Nombre Tarjeta</p>
                      <p class="nombre">${tarj.nombre}</p>
                  </div>

                  <div class="grupo" id="expiracion">
                      <p class="label">Expiracion</p>
                      <p class="expiracion"><span class="mes">MM</span> / <span class="año">${tarj.expiracion}</span></p>
                  </div>
              </div>
          </div>
      </div>
 
  
  </section>`
        misTarjetas.append(liTarj)
    });

}
/* esta funcion pinta todos las tarjetas que esten en el storage */
function TarjetasStorage() {
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
    let tarjetaPush = Users.Tarjeta;

    tarjetaPush[0] ? pintarTarjeta(tarjetaPush) : noTarjeta();
    console.log(tarjetaPush)
}
TarjetasStorage();

function noTarjeta() {
    misTarjetas.innerHTML = "";
    let liTarj = document.createElement("div")
    liTarj.classList.add(`contenedor__tarjetas`);
    liTarj.innerHTML = `<h2 class="noTarjeta">POR EL MOMENTO NO HAY TARJETAS AGREGADAS</h2>`
    misTarjetas.append(liTarj)

}

function borrarTarjeta(num) {
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
    let borrarTarj = Users.Tarjeta
    let borrada = borrarTarj.filter((elem) => elem.numDeTarj !== num)
    Users.Tarjeta = borrada;
    console.log("arraynuevo", Users.Tarjeta);

    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    TarjetasStorage();
}


let btnCerrarsesion = document.querySelector("#btnCerrarSesion");
btnCerrarsesion.addEventListener('click', () => {
    window.location.replace("http://127.0.0.1:5500/index.html")


    localStorage.removeItem("UsuarioIngresado")/* esto remueve el objeto donde almaceno nombre
    apellido,saldo y tambien me sirve para decirle al navegador que ya no hay una cuenta ingresada
    en el wallet y puede ingresar otra cuenta */
});

