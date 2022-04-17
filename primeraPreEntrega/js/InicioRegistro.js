const Usuarios = [
    { nombre: "Fabricio",apellido: "alberto",correo: "fabriciohugoalberto16@gmail.com",contraseña: 42856838,saldo:15000},
    { nombre: "luis",    apellido: "alberto",correo: "luis@gmail.com",contraseña: 42856838,saldo:15000},

];  
localStorage.setItem("Usuarios" , JSON.stringify(Usuarios))


class NuevoUsuario {

    constructor(nombre, apellido, correo, contraseña,saldo) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.correo = correo,
            this.contraseña = contraseña,
            this.saldo=saldo
    }

}



///////////////REGISTAR USUARIO NUEVO////////////////////////////////////////////

let btnRegistro = document.querySelector("#submitReg");
btnRegistro.addEventListener('click', AgregarUsuario);


function AgregarUsuario(){

    let recuperado=JSON.parse(localStorage.getItem("Usuarios", Usuarios));

    recuperado.push(registrar())
   
    localStorage.setItem("Usuarios",JSON.stringify(recuperado));
    alert("usuario registrado")
    login.classList.remove( 'active')
    regist.classList.remove( 'active')
    window.location.replace('http://127.0.0.1:5500/index.html')

   return recuperado;
}



function registrar() {
    

     const nombreReg=document.querySelector("#nombreReg").value
     const apellidoReg=document.querySelector("#apellidoReg").value
     const correoReg=document.querySelector("#correoReg").value
     const contraseñaReg=document.querySelector("#contraseñaReg").value
    
     
    return new NuevoUsuario(nombreReg, apellidoReg, correoReg, contraseñaReg,15000);

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
    const recuperado=JSON.parse(localStorage.getItem("Usuarios",Usuarios))

    let cuentaIngresada =recuperado.some((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
    console.log(cuentaIngresada);


    if (validarIngreso(correo, contraseña)) {
        if (cuentaIngresada) {
            let nombreRegistrado=recuperado.find((cuenta) => cuenta.correo == correo && cuenta.contraseña == contraseña)
            console.log(nombreRegistrado.nombre);
            let nombre = nombreRegistrado.nombre
            window.location.replace("http://127.0.0.1:5500/paginas/billetera.html");
            console.log(nombre);
          
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
