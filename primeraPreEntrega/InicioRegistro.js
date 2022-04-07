const Usuarios = [
    {
        ///usuario de prueba
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
/* let registro = registrar();
Usuarios.push(registro); */


let btnIngreso = document.querySelector("#submitIng");
btnIngreso.addEventListener('click', iniciarSesion)


function iniciarSesion() {

    const correo = document.querySelector("#usuarioIng").value
    const contraseña = document.querySelector("#contraseñaIng").value
    let cuentaIngresada = Usuarios.some((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
    console.log(cuentaIngresada);


    if (validarIngreso(correo, contraseña)) {
        if (cuentaIngresada) {
            alert("Bienvenido al Banco el paraiso")
            let nombreRegistrado = Usuarios.find((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
            console.log(nombreRegistrado.nombre);
            /* USO FIND PARA QUE ME DEVUELVA EL OBJETO 
         EN CASO DE QUE COINCIDA EL CORREO Y CONTRASEÑA, PARA PODER RECORRER
         LAS PROPIEDADES DE ESTE, POR EJEMPLO PARA SACAR EL NOMBRE */
            let nombre = nombreRegistrado.nombre
            window.location.replace("http://127.0.0.1:5500/billetera.html");
            console.log(nombre);
            mostrarMenu2(nombre);
        }
        else {
            alert("los datos ingresados no son validos")    
        }
    }
    else {
        alert("porfavor ingrese todos los datos")
    }
    
}

function validarIngreso(correo, contraseña) {
    if (correo == "" || contraseña == "") {
        return false
    } else {
        return true
    }
}

