const Usuarios = [
    {
        nombre: "Fabricio",
        apellido: "alberto",
        correo: "fabriciohugoalberto16@gmail.com",
        contraseña: 42856838,
    },
];

class NuevoUsuario {

    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.correo = correo,
            this.contraseña = contraseña
    }
}

function registrar() {

    let nombre = prompt("Nombre:");
    let apellido = prompt("apellido:");
    let correo = prompt("correo:");
    let contraseña = prompt("contraseña:");

    return new NuevoUsuario(nombre, apellido, correo, contraseña);

}


function iniciarSesion() {

    let correo = prompt(`**INICIAR SESION**
                    Ingrese su correo`);
    let contraseña = prompt("Ingrese su contraseña");

    let cuentaIngresada = Usuarios.some((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
    console.log(cuentaIngresada);



    if (cuentaIngresada) {

        let nombreRegistrado = Usuarios.find((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
        console.log(nombreRegistrado.nombre);
        /* USO FIND PARA QUE ME DEVUELVA EL OBJETO 
     EN CASO DE QUE COINCIDA EL CORREO Y CONTRASEÑA, PARA PODER RECORRER
     LAS PROPIEDADES DE ESTE, POR EJEMPLO PARA SACAR EL NOMBRE */
        let nombre = nombreRegistrado.nombre
        console.log(nombre);
        mostrarMenu2(nombre)
    }
    else {
        alert("los datos ingresados no son validos")
    }


}




// Mostrar menu principal//
function mostrarMenu() {
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
}

//mostrar menu de opciones del cajero

function mostrarMenu2(nombre) {
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
                4-Salir`));

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

};

function extraer(saldo) {
    let extraer = parseInt(prompt("Ingrese el monto que desea extraer"));

    if (extraer > saldo) {
        alert("su saldo es insuficiente para realizar esta operacion");
    }
    else if ((extraer > 0) && (extraer <= saldo)) {
        alert("su opreacion fue exitosa");
        document.write(` ha extraido $ ${extraer} <br>`);
        return saldo - extraer;
    }
}
function transferir(saldo) {
    let transferir = parseInt(prompt("Ingrese el monto que desea transferir"));

    if (transferir > saldo) {
        alert("su saldo es insuficiente para realizar esta operacion");
    }
    else if ((transferir > 0) && (transferir <= saldo)) {
        let destino = prompt("Ingrese el CBU o Alias al que desea transferir dinero");
        alert("su operacion fue exitosa")
        document.write(` ha transferido $${transferir}, a ${destino} <br>`);
        return saldo - transferir;
    }
}
function depositar(saldo) {

    let deposito = parseInt(prompt("Ingrese el dinero que vaya a depositar"));
    let destino = prompt("Ingrese el CBU o Alias al que desea depositarle dinero o si desea depositarlo en su cuenta escriba MI CUENTA");
    if (destino !== "MI CUENTA") {
        alert(`su operacion ha sido exitosa ha depositado $ ${deposito}, a ${destino}`)
        return saldo - deposito;
    }
    else{
        alert(`su operacion ha sido exitosa , ha depositado ${deposito} a su cuenta`)
        return saldo+deposito;
    }

}
mostrarMenu();
