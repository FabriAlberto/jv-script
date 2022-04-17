

let saldo=250000;
/* mostrar saldo por defecto al iniciar */
mostrarSaldo(saldo);

function mostrarSaldo(s){
let saldoMostrar= document.querySelector("#saldo");
saldoMostrar.innerHTML=`<p class="saldo__article__p"> ${s} </p>`;
}

///evento para cerrar sesion///
let btnCerrarsesion = document.querySelector("#btnCerrarSesion");
btnCerrarsesion.addEventListener('click', () => {
    alert("Gracias por usar nuestros servicios ;)")
    window.location.replace("http://127.0.0.1:5500/index.html")
});


//saludar//
let saludo = document.querySelector("#nombreSaludo");
saludo.innerHTML=`Hola! Bienvenido`;
