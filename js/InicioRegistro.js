
/* esta condicion me sirve para saber si hay un usuario ingresado o no-
ya que si hay alguno no me deja ingresar al login hasta que cierre sesion */

/* USANDO OPERADOR && */
localStorage.getItem("UsuarioIngresado") &&  window.location.replace("./paginas/billetera.html");

 function sweetAlerts(a){

    Swal.fire({
       
        icon:`success`,
        duration:1500,
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

const Usuarios = [
    { nombre: "Fabricio",apellido: "alberto",correo: "fabriciohugoalberto16@gmail.com",contraseña: 42856838,saldo:15000,Tarjeta:[],Actividades:[] },
    { nombre: "luis",    apellido: "alberto",correo: "luis@gmail.com",contraseña: 42856838,saldo:15000,Tarjeta:[],Actividades:[] },

];  



class NuevoUsuario {

    constructor(nombre, apellido, correo, contraseña,saldo,Tarjeta,Actividades) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.correo = correo,
            this.contraseña = contraseña,
            this.saldo=saldo
            this.Tarjeta=Tarjeta
            this.Actividades=Actividades
    }

}
class UsuarioIngresado{
    constructor(nombre,apellido,saldo){
    this.nombre=nombre,
    this.apellido=apellido,
    this.saldo=saldo
    }
}
/* esta funcion comprobar() entra al localstorage y si encuentra que ya existe una lista de usuarios no haga nada, y si no
existiese le agregue USUARIOS, mas que nada sirve para que cuando recargue la pagina no me borre los registros 
que se hicieron*/
function comprobar(){
    /* OPERADOR    OR  */
    let comp=JSON.parse(localStorage.getItem("Usuarios")) ||  localStorage.setItem("Usuarios",JSON.stringify(Usuarios));
     console.log(comp);
}
comprobar();



///////////////REGISTAR USUARIO NUEVO////////////////////////////////////////////

let btnRegistro = document.querySelector("#submitReg");
btnRegistro.addEventListener('click', registrar)


function AgregarUsuario(NuevoUsuario){
/* recupera el array del storage */
     let recuperado=JSON.parse(localStorage.getItem("Usuarios"))

/* agrega los datos que  registrar()  me manda por parametro a lo que recupere del storage */
    recuperado.push(NuevoUsuario)
/* subo todo el array con un nuevo objeto(new user) al storage */
    localStorage.setItem("Usuarios",JSON.stringify(recuperado));
    sweetAlerts("usuario registrado")
    
    login.classList.remove( 'active')
    regist.classList.remove( 'active')
    window.location.replace('./index.html')
    
}



function registrar(){
    

     const nombreReg=document.querySelector("#nombreReg").value
     const apellidoReg=document.querySelector("#apellidoReg").value
     const correoReg=document.querySelector("#correoReg").value
     const contraseñaReg=document.querySelector("#contraseñaReg").value
     
     if(nombreReg=="" || apellidoReg=="" || correoReg=="" || contraseñaReg==""){
    
        error("PORFAVOR COMPLETE TODOS LOS DATOS!🙏")     
     }
     else{

        let newUsuario= new NuevoUsuario(nombreReg, apellidoReg, correoReg, contraseñaReg,15000,[],[]);
        AgregarUsuario(newUsuario)
     }
     
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
            let ingresoUsuario= new UsuarioIngresado(nombreRegistrado.nombre,nombreRegistrado.apellido,nombreRegistrado.saldo)
            localStorage.setItem("UsuarioIngresado", JSON.stringify(ingresoUsuario));
            window.location.replace("./paginas/billetera.html");
            
             
        }
        else {
            error("LOS DATOS INGRESADOS NO SON VALIDOS")    
        }
    }
    else {
        error("PORFAVOR INGRESE TODOS LOS DATOS")
    }
    
}


function validarIngreso(correo, contraseña) {
  let ret= (correo == "" || contraseña == "")? false : true;
  return ret;
}


