

/* esta condicion me sirve para saber si hay un usuario ingresado o no-
ya que si no hay ninguno me linkea al login y si aun no han cerrado sesion
seguiria en el wallet */

/* CON OPERADOR Y */
!localStorage.getItem("UsuarioIngresado") && window.location.replace("http://127.0.0.1:5500/index.html");

const tarjetas = [];


class NuevaTarjeta {
    constructor(nombre, apellido, banco, numDeTarj, expiracion, contraseña) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.banco = banco,
            this.numDeTarj = numDeTarj,
            this.expiracion = expiracion,
            this.contraseña = contraseña
    }
}

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
    btnTransf.addEventListener("click",enviartransferencia);
    /* boton que cierra */
    cerrarVentana("#cerrar", acciones)

}



/* funcion para evaluar los datos ingresados */
function enviartransferencia() {
    const dinero =parseFloat(document.querySelector("#transf").value);
    const cbu = document.querySelector("#transfCbu").value;
    if (!dinero || !cbu) {
        alert("complete todos los campos porfavor")
    }
    else if (dinero > saldo) {
        alert("su saldo es insuficiente para realizar esta operacion");
    }
    else if ((dinero > 0) && (dinero <= saldo)) {
        alert("su operacion fue exitosa")


        console.log(`se transfirio ${dinero} a ${cbu}`)
        
        saldo = saldo - dinero;
        console.log(saldo)
        acciones.innerHTML = "";
        mostrarSaldo(saldo);
        
    }
     
    mostrarActividades(new NuevaActividad(`transferiste`,cbu,dinero));
    
}
/* FIN TRANSFERENCIA */



/* Depositar, evento que se realiza al hacer click al btn#deposito */
function depositar() {

  

    const acciones = document.querySelector("#acciones");
    const  depoTabla = document.createElement("ul")
    depoTabla.innerHTML = `
                               
                              <div> <button class="btn__cerrar" id="cerrar">X</button> </div>
                              <li > <label for="depo">AR$</label> <input class="menuAcciones__aciones__input" id="depo" type="text" placeholder="Dinero para depositar$$$"></li>

                              <button id="submitDepo">Agregar a tu cuenta</button>
                               
                              `

    acciones.append(depoTabla);
    cerrarVentana("#cerrar", acciones)
    const btndepositar= document.querySelector("#submitDepo");
    btndepositar.addEventListener("click", agregarDeposito);

}

function agregarDeposito(){
const dineroDeposito= parseFloat(document.querySelector("#depo").value);

/* OPERADOR TERNARIO */
let mensaje=!dineroDeposito?"Ingrese el dinero que desea agregar a su cuenta": mostrarDeposito(dineroDeposito);

alert(mensaje);
}

function mostrarDeposito(d){
    saldo=saldo+ d ;
    mostrarSaldo(saldo);
    acciones.innerHTML = "";
    mostrarSaldo(saldo);

    mostrarActividades(new NuevaActividad(`agregaste`,`a tu cuenta`,d));
    return msj=`se ha agregado ${d} a su cuenta `;
   
}
/* FIN DEPOSITO */




function extraer() {
    
    const acciones = document.querySelector("#acciones");
    const  extraTabla = document.createElement("ul")
    extraTabla.innerHTML = `
                              <div> <button class="btn__cerrar" id="cerrar">X</button> </div>
                              <li> <label for="extra">AR$</labeel> <input class="menuAcciones__aciones__input" id="extra" type="text" placeholder="Dinero a extraer$$$"></li>
                              <li> <label> <i class="bi bi-person-video3"></i></label> <input class="menuAcciones__aciones__input" id="dniExtra" type="text" placeholder="D.N.I"> </li>
                              <button id="submitExtra"> Generar Orden </button> </div>
                               
                              `

    acciones.append(extraTabla);
    cerrarVentana("#cerrar", acciones)
    const btnExtraer= document.querySelector("#submitExtra");
    btnExtraer.addEventListener("click", generarOrden);

}

function generarOrden(){
  const dineroExtraer = document.querySelector("#extra").value;
  const dniExtraer = document.querySelector("#dniExtra").value;

  if(!dineroExtraer || !dniExtraer){
      alert("complete todos los datos porfavor")
  }
  else if( dniExtraer.length!==8){
      alert("ingrese correctamente su dni")
  }
  else if (dineroExtraer>saldo){
      alert("el monto que desea extraer es superior a su saldo")
  }
  else if (dineroExtraer>0 ){
     alert("su orden de extraccion fue generada")
     acciones.innerHTML = "";
     mostrarActividades(new NuevaActividad(`Orden de extraccion`,dniExtraer,dineroExtraer));
  }
}




function agregarTarjeta() {
    nombre = prompt("Hola ingresa el nombre del titular")
    apellido = prompt(" ingresa el apellido del titular")
    banco = prompt(" ingresa el banco de la tarjeta")
    numero = prompt(" ingresa el numero de la tarjeta")
    expiracion = prompt(" ingresa la fecha de expiracion")
    contraseña = prompt(" ingresa la contraseña");
    console.log(`a agregado una nueva tarjeta a nombre de ${nombre} ${apellido}`)
    return new NuevaTarjeta(apellido, nombre, banco, numero, expiracion, contraseña)



}



/* funcion para cerrar ventana en caso de que quiera salir */
function cerrarVentana(c, e) {
    let btnCerrar = document.querySelector(c);
    btnCerrar.addEventListener("click", () => { e.innerHTML = ""; })
}






