
const precio1 = 25000;
const precio2 = 12000;
const precio3 = 13000;
const precio4 = 14000;

const nike = nombres("nike")
const vans = nombres("vans")
const adidas = nombres("adidas")
const fila = nombres("fila")
let compra = 0;
let respuesta = "";

while (respuesta !== "no") {
    let marca = prompt(`///////////////VENTA DE ZAPATILLAS//////////
       *Adidas, Nike, Vans, Fila
              Bienvenido 
    INGRESE LA MARCA DE ZAPATILLAS QUE DESEE VER`);


    if (marca == "adidas") {
        comprar(adidas);
        otra();
    }
    else if (marca == "nike") {
        comprar(nike);
        otra();
    }
    else if (marca == "vans") {
        comprar(vans);
        otra();
    }
    else if (marca == "fila") {
        comprar(fila);
        otra();

    }
    else {
        alert("su opcion es invalida")
    }

  

}

function otra(){
    respuesta = prompt("quiere comprar otra zapatilla? si / no")
    if (respuesta == "no") {
        alert(`gracias por su compra
        el total es de  $ ${compra}`)
        console.log("=",compra);
    }
}


function nombres(R) {
    return `1. ${R}1 ${precio1}
    2.${R}2 ${precio2}
     3.${R}3 ${precio3}
     4.${R}4 ${precio4} `;
}

function mostrar(N) {

    let selecciona = parseInt(prompt(`Ingrese el modelo que desea comprar
    ${N}`));
    return selecciona;



}

function comprar(P) {
    let seleccion = mostrar(P);

    if (seleccion == 1) {
        compra = precio1
        console.log(precio1,"+")
        return compra;
    }
    else if (seleccion == 2) {
        compra = compra + precio2

        console.log(precio2,"+")
        return compra;
    }
    else if (seleccion == 3) {
        compra = compra + precio3
        console.log(precio3,"+")
        return compra;
    }
    else if (seleccion == 4) {
        compra = compra + precio4
        console.log(precio4,"+")
        return compra;
    }

}
