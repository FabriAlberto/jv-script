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

//REGISTAR USUARIO NUEVO////////////////////////////////////////////

let btnRegistro = document.querySelector("#submitReg");
btnRegistro.addEventListener('click', AgregarUsuario);


function AgregarUsuario(){
    let registro = registrar();
    Usuarios.push(registro);
    alert("usuario registrado")
    window.location.replace('http://127.0.0.1:5500/index.html')
}

function registrar() {



     const nombreReg=document.querySelector("#nombreReg").value
     const apellidoReg=document.querySelector("#apellidoReg").value
     const correoReg=document.querySelector("#correoReg").value
     const contraseñaReg=document.querySelector("#contraseñaReg").value

    return new NuevoUsuario(nombreReg, apellidoReg, correoReg, contraseñaReg);
    
    
}



//evento para cambiar de card de incio de sesion a la de registro
const btnIng=document.querySelector("#BtnIng")
const btnReg=document.querySelector("#BtnReg");
const login=document.querySelector(".Ing")
const regist=document.querySelector(".Reg")

btnReg.addEventListener('click',()=>{
    
    login.classList.add( 'active')
    regist.classList.add( 'active')
})

btnIng.addEventListener('click',()=>{
    
    login.classList.remove( 'active')
    regist.classList.remove( 'active')
})

//INICIAR SESION////////////////////////////////////////////
let btnIngreso = document.querySelector("#submitIng");
btnIngreso.addEventListener('click', iniciarSesion)


function iniciarSesion() {

    const correo = document.querySelector("#usuarioIng").value
    const contraseña = document.querySelector("#contraseñaIng").value
    let cuentaIngresada = Usuarios.some((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
    console.log(cuentaIngresada);


    if (validarIngreso(correo, contraseña)) {
        if (cuentaIngresada) {
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
