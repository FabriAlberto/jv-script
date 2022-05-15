

/* esta condicion me sirve para saber si hay un usuario ingresado o no-
ya que si no hay ninguno me linkea al login y si aun no han cerrado sesion
seguiria en el wallet */

/* CON OPERADOR Y */
!localStorage.getItem("UsuarioIngresado") && window.location.replace("http://127.0.0.1:5500/index.html");

class NuevaActividad {
    constructor(accion, receptor, dinero) {
        this.accion = accion,
            this.receptor = receptor,
            this.dinero = dinero
    }
}



//mostrar menu de opciones del cajero
/* mostrar form para transferir dinero */
let Btntransf = document.querySelector("#transferencia")
Btntransf.addEventListener('click', transferir);


let Btndeposito = document.querySelector("#deposito")
Btndeposito.addEventListener('click', depositar);

let Btnorden = document.querySelector("#orden")
Btnorden.addEventListener('click', extraer)


let Btntarjetas = document.querySelector("#tarjetas")
//aun no definido


let BtnnuevaTarjeta = document.querySelector("#nuevaTarjeta")
BtnnuevaTarjeta.addEventListener('click', agregarTarjeta)





/* transferir, evento que se realiza al hacer click al btn#trasnferencia */
function transferir() {


    let acciones = document.querySelector("#acciones");
    let transferTabla = document.createElement("ul")
    transferTabla.innerHTML = `
                               
                              <div> <button class="btn__cerrar" id="cerrar">X</button> </div>
                              <li> <label for="transf">AR$</label> <input class="menuAcciones__aciones__input" id="transf" type="text" placeholder="Dinero a transferir$$$"></li>
                              <li><label for="transfCbu"> <i class="bi bi-person"></i></label><input class="menuAcciones__aciones__input" id="transfCbu" type="text" placeholder="ingrese CBU o alias "></li>
                              <button id="submitTransf" >TRANSFERIR</button>  
                              `

    acciones.append(transferTabla);

    /* boton que realiza el envio de informacion */
    let btnTransf = document.querySelector("#submitTransf");
    btnTransf.addEventListener("click", enviartransferencia);
    /* boton que cierra */
    cerrarVentana("#cerrar", acciones)

}



/* funcion para evaluar los datos ingresados */
function enviartransferencia() {
    const dinero = parseFloat(document.querySelector("#transf").value);
    const cbu = document.querySelector("#transfCbu").value;
    if (!dinero || !cbu) {
        error(`COMPLETE TODOS LOS DATOS PORFAVOR  🙏`);
    }
    else if (dinero > saldo) {
        error("SU SALDO ES INSUFICIENTE ");
    }
    else if ((dinero > 0) && (dinero <= saldo)) {

        sweetAlerts(`Se Transfirio $ ${dinero} a ${cbu}`);
        console.log(`Se transfirio ${dinero} a ${cbu}`);
        
        let UsuarioIngresado = recuperarUi();
        let Usuarios = recuperarU();
        let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
        console.log(Users.saldo)
         Users.saldo = Users.saldo - dinero;
        localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
        console.log(Users.saldo)
        acciones.innerHTML = "";
        mostrarSaldo();
        mostrarActividades(new NuevaActividad(`Transferiste`, cbu, `-$${dinero}`));
    }




}
/* FIN TRANSFERENCIA */



/* Depositar, evento que se realiza al hacer click al btn#deposito */
function depositar() {



    const acciones = document.querySelector("#acciones");
    const depoTabla = document.createElement("ul")
    depoTabla.innerHTML = `
                               
                              <div> <button class="btn__cerrar" id="cerrar">X</button> </div>
                              <li > <label for="depo">AR$</label> <input class="menuAcciones__aciones__input" id="depo" type="text" placeholder="Dinero para depositar$$$"></li>

                              <button id="submitDepo">Agregar a tu cuenta</button>
                               
                              `

    acciones.append(depoTabla);
    cerrarVentana("#cerrar", acciones)
    const btndepositar = document.querySelector("#submitDepo");
    btndepositar.addEventListener("click", agregarDeposito);

}

function agregarDeposito() {
    const dineroDeposito = parseFloat(document.querySelector("#depo").value);

    /* OPERADOR TERNARIO */
    let mensaje = !dineroDeposito ? "Ingrese el dinero que desea agregar a su cuenta" : mostrarDeposito(dineroDeposito);

    sweetAlerts(mensaje);

}

function mostrarDeposito(d) {
    saldo = saldo + d;
    let UsuarioIngresado = recuperarUi();
    let Usuarios = recuperarU();
    let Users = Usuarios.find((cuenta) => cuenta.nombre == UsuarioIngresado.nombre && cuenta.apellido == UsuarioIngresado.apellido)
     Users.saldo = Users.saldo + d;
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    acciones.innerHTML = "";
    mostrarSaldo();
    mostrarActividades(new NuevaActividad(`Agregaste`, `a tu cuenta`, `+$${d}`));
    return msj = `Se han agregado ${d} a su cuenta `;

}
/* FIN DEPOSITO */




function extraer() {

    const acciones = document.querySelector("#acciones");
    const extraTabla = document.createElement("ul")
    extraTabla.innerHTML = `
                              <div> <button class="btn__cerrar" id="cerrar">X</button> </div>
                              <li> <label for="extra">AR$</labeel> <input class="menuAcciones__aciones__input" id="extra" type="text" placeholder="Dinero a extraer$$$"></li>
                              <li> <label> <i class="bi bi-person-video3"></i></label> <input class="menuAcciones__aciones__input" id="dniExtra" type="text" placeholder="D.N.I"> </li>
                              <button id="submitExtra"> Generar Orden </button> </div>
                               
                              `

    acciones.append(extraTabla);
    cerrarVentana("#cerrar", acciones)
    const btnExtraer = document.querySelector("#submitExtra");
    btnExtraer.addEventListener("click", generarOrden);

}

function generarOrden() {
    const dineroExtraer = document.querySelector("#extra").value;
    const dniExtraer = document.querySelector("#dniExtra").value;

    if (!dineroExtraer || !dniExtraer) {
        error("COMPLETE TODOS LOS DATOS PORFAVOR 🙏")
    }
    else if (dniExtraer.length !== 8) {
        error("INGRESE CORRECTAMENTE SU DNI")
    }
    else if (dineroExtraer > saldo) {
        error("SALDO INSUFICIENTE")
    }
    else if (dineroExtraer > 0) {
        sweetAlerts(`Genero una orden de extraccion para ${dniExtraer} exitosamente`)
        acciones.innerHTML = "";
        mostrarActividades(new NuevaActividad(`Orden de extraccion `, `DNI:${dniExtraer}`, dineroExtraer));
    }
}


/* funcion para cerrar ventana en caso de que quiera salir */
function cerrarVentana(c, e) {
    let btnCerrar = document.querySelector(c);
    btnCerrar.addEventListener("click", () => { e.innerHTML = ""; })
}




function agregarTarjeta() {
    window.location.assign("http://127.0.0.1:5500/paginas/Tarjetas.html")

}



