
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

let saldo=15000;



// Mostrar menu principal//
/* function mostrarMenu() {
    let op = "";
    while (op !== "C") {
        op = prompt(`HOLA BIENVENIDO AL BANCO FA
       A-Iniciar sesion:)
       B-Registrarme!
       C-Salir`);

        if (op === "A") {
            iniciarSesion();
        }
        else if (op === "B") {
            let registro = registrar();
            Usuarios.push(registro);
            console.log(Usuarios);
        }
        else if (op === "C") {
            alert("Gracias por elegirnos ");
        }
        else {
            alert("OPCION INCORRECTA");
        }
    }
} */

//mostrar menu de opciones del cajero

let Btntransf=document.querySelector("#transferencia")
Btntransf.addEventListener('click', transferir);


let Btndeposito=document.querySelector("#deposito")
Btndeposito.addEventListener('click', depositar);

let Btnorden=document.querySelector("#orden")
Btnorden.addEventListener('click', extraer)

let Btntarjetas=document.querySelector("#tarjetas")
//aun no definido
let BtnnuevaTarjeta=document.querySelector("#nuevaTarjeta")
BtnnuevaTarjeta.addEventListener('click', agregarTarjeta)



/* function mostrarMenu2(nombre) {
    let saldo = parseInt(prompt(`Hola ${nombre}  ingresa tu saldo actual`));
    respuesta = "";
    if (!isNaN(saldo)) {

        while (respuesta !== "no") {
            if (saldo >= 1) {
                let opcion = parseInt(prompt(`
                  ******MENU****** \n
                 Hola ${nombre}
                 SU SALDO ES $ ${saldo}
                ¡Ingrese la opcion con un numero!\n
                 1-Extraccion \n
                 2-Transferencia\n
                 3-Deposito\n
                 4-Agregar tarjeta\n
                5-Salir`));

                if (!isNaN(opcion)) {

                    if (opcion == 1) {

                        saldo = extraer(saldo);
                    }
                    else if (opcion == 2) {

                        saldo = transferir(saldo);
                    }
                    else if (opcion == 3) {

                        saldo = depositar(saldo);
                    }
                    else if (opcion == 4) {

                       let tarjeta= agregarTarjeta();
                       tarjetas.push(tarjeta);
                       console.log(tarjetas);
                       alert(`se agrego una tarjeta exitoasamente`)
                    }
                    else if (opcion == 5) {
                        document.write(`Gracias por usar nuestro servicio de cajero automatico:) \n`);
                        break;
                    }
                }
            }
            else {
                alert(`no tiene saldo para realizar alguna accion`);
                break;
            }
            var respuesta = prompt("desea realizar otra operacion si o no?");

        }
    }

}; */

function extraer() {
    let extraer = parseInt(prompt("Ingrese el monto que desea extraer"));

    if (extraer > saldo) {
        alert("su saldo es insuficiente para realizar esta operacion");
    }
    else if ((extraer > 0) && (extraer <= saldo)) {
        alert("su opreacion fue exitosa");
        /* document.write(` ha extraido $ ${extraer} <br>`); */
        console.log(`ha extraido ${extraer}`)
    }
        return saldo - extraer;
        
}
function transferir(/* saldo */) {
    let transferir = parseInt(prompt("Ingrese el monto que desea transferir"));

    if (transferir > saldo) {
        alert("su saldo es insuficiente para realizar esta operacion");
    }
    else if ((transferir > 0) && (transferir <= saldo)) {
        let destino = prompt("Ingrese el CBU o Alias al que desea transferir dinero");
        alert("su operacion fue exitosa")
        /* document.write(` ha transferido $${transferir}, a ${destino} <br>`); */
        console.log(`ha transferido${transferir}`)
        return saldo - transferir;
        
    }

    
}
function depositar() {

    let deposito = parseInt(prompt("Ingrese el dinero que vaya a depositar"));
    let destino = prompt("Ingrese el CBU o Alias al que desea depositarle dinero o si desea depositarlo en su cuenta escriba MI CUENTA");
    if (destino !== "MI CUENTA") {
        alert(`su operacion ha sido exitosa ha depositado $ ${deposito}, a ${destino}`)
        console.log(`ha depositado   ${deposito}`)
        return saldo - deposito;
    }
    else {
        alert(`su operacion ha sido exitosa , ha depositado ${deposito} a su cuenta`)
        
        console.log(`se ha depositado   ${deposito}`)
        return saldo + deposito;
        

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
    return new NuevaTarjeta(apellido,nombre,banco,numero,expiracion,contraseña)

   

}
/* mostrarMenu();
 */