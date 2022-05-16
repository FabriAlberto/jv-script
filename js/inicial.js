
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

    let saldoMostrar = document.querySelector("#saldo");
    saldoMostrar.innerHTML = `<p class="saldo__article__p"> ${buscarSaldo()} </p>`;
}

function buscarSaldo() {
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
  /*   let Usuario=modificarUsuario(); */
    console.log(Users.saldo)
    return Users.saldo
}

/* ACTIVIDADES///////////////// */

let seccionActividades = document.querySelector("#actividades__ul")

/* funcion para guardar en el local storage  y despues llamado para pintar en pantalla*/
function mostrarActividades(s) {

        let UsuarioIngresado = recuperarUi();
        let Usuarios = recuperarU();    
        let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
        let actividadPush=Users.Actividades;
        actividadPush.push(s);
        localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
  
        pintarActividades(actividadPush);
}
/*funcion para pintar y actualizar actividades en pantalla  */

function pintarActividades(actividadPush){

    let listaAct=document.querySelector("#actividades__ul");
    listaAct.innerHTML="";
    actividadPush.forEach(act => {
        let liAct = document.createElement("li");
        liAct.setAttribute("class", "actividades__ul__li")
     
        liAct.innerHTML = `<i class="bi bi-check-circle"></i> <p class="p__accion">${act.accion}  
                              ${act.receptor}</p> <p class="p__dinero"> ${act.dinero}</p>`;
        seccionActividades.append(liAct);
    });

}

function actividadesStorage(){
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();    
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
    let actividadPush=Users.Actividades;

    actividadPush?pintarActividades(actividadPush):console.log("nohay");
}
actividadesStorage();









function sweetAlerts(a){

    Swal.fire({
        duration:1500,
        icon:`success`,
        title: a,
        background:'#593eec',
        color:'#Fff'
    })
}
function error(p){


    Toastify({

        text: `${p}`,
        
        duration: 1500,
        position:"center",
        gravity:"bottom",
        style: {
            
            background:`#ffffff85`,
            color:`#000`,
            fontSize:`1rem`,
            boxShadow:"none",
            
        }

        
        }).showToast();
    

}





///evento para cerrar sesion///
let btnCerrarsesion = document.querySelector("#btnCerrarSesion");
btnCerrarsesion.addEventListener('click', () => {
    sweetAlerts("Gracias por usar nuestros servicios ;)")
    window.location.replace("http://127.0.0.1:5500/index.html")


    localStorage.removeItem("UsuarioIngresado")/* esto remueve el objeto donde almaceno nombre
    apellido,saldo y tambien me sirve para decirle al navegador que ya no hay una cuenta ingresada
    en el wallet y puede ingresar otra cuenta */
});



dolar();
function dolar(){
    fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(response => response.json())
    .then((json) => {mostrarDolar(json)})
}

function mostrarDolar(obj){
    
     console.log(obj.blue.value_buy);

     let dol=document.querySelector(".cotizacion__dolar")
     
     dol.innerHTML=` <table class="table table-dark table-striped">
     <thead>
       <tr>
         <th scope="col" style="color: #26ca5c;">$$</th>
         <th scope="col">Compra</th>
         <th scope="col">Venta</th>
        
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row" class="">DOLAR</th>
         <td style="color: #26ca5c;">${obj.oficial.value_buy} </td>
         <td style="color: #26ca5c;">${obj.oficial.value_sell}</td>
       </tr>
       <tr>
         <th scope="row">DOLAR BLUE</th>
         <td style="color: #26ca5c;">${obj.blue.value_buy}</td>
         <td style="color: #26ca5c;">${obj.blue.value_sell}</td>
       </tr>
       
     </tbody>
   </table> `

}




