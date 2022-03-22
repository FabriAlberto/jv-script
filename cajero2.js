document.write(`Hola Bienvenido al cajero <br>`);
const nombre=prompt("Ingrese su nombre");
let saldo=parseInt(prompt("Hola ingresa tu saldo actual")); 
respuesta="si";
if(!isNaN(saldo)){

    while(respuesta=="si"){
    if(saldo>=1){
        let opcion=parseInt(prompt(`
        ******MENU****** \n
           Hola ${nombre}
        ¡Ingrese la opcion con un numero!\n
         1-Extraccion \n
         2-Transferencia\n
         3-Deposito\n
         4-Consultar saldo \n
         5-Salir`));

         if(!isNaN(opcion)){


             if(opcion==1){
             let extraer=parseInt(prompt("Ingrese el monto que desea extraer"));

             if(extraer>saldo){
                alert("su saldo es insuficiente para realizar esta operacion");
             }
             else{
                 if((extraer>0) && (extraer<=saldo)){
                    alert("su opreacion fue exitosa");
                    document.write(` ha extraido $ ${extraer} <br>`);
                    saldo=saldo-extraer;
                 }

             }
            }
            else{
                if(opcion==2){
                    
                    let transferir=parseInt(prompt("Ingrese el monto que desea transferir"));
       
                    if(transferir>saldo){
                       alert("su saldo es insuficiente para realizar esta operacion");
                    }
                    else{

                        if((transferir>0) && (transferir<=saldo)){
                           let destino=prompt("Ingrese el CBU o Alias al que desea transferir dinero");
                           alert("su operacion fue exitosa")
                           document.write(` ha transferido $${transferir}, a ${destino} <br>`);
                           saldo=saldo-transferir;
                        }
                    }
                }

                else{
                    if(opcion==3){

                         let deposito=parseInt(prompt("Ingrese el monto que desea Depositar"));
                         let destino=prompt("Ingrese el CBU o Alias al que desea depositarle dinero");
                         alert("su operacion ha sido exitosa")
                         document.write(`ha depositado $ ${deposito}, a ${destino} \n`);
                        
                    }
                    else{
                        if(opcion==4){
                            alert(`su saldo es $${saldo}`);
                            document.write(`su saldo es $${saldo}`);
                        }

                        else{
                            if(opcion==5){
                                document.write(`Gracias por usar nuestro servicio de cajero automatico:) \n`);
                                terminar=terminar+1;
                            }
                        }
                    }
                    
                }
                    
            }
            
            
         }

        
    }
    else{
        alert(`no tiene saldo para realizar alguna accion`);
        break;
    }
    var respuesta=prompt("desea realizar otra operacion si o no?");

  }
 

};
