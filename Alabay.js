import { Circuito } from "./clases";
import { Vehiculo } from "./clases";
import { Participante } from "./clases";
import { Motocicleta } from "./clases";
import { Coche } from "./clases";

let Vehiculos = new Array();
document.getElementById("NuevoVehiculoButton").addEventListener("click", function(){
    var Modelo = document.getElementById("Modelo").value;
    var MinVel = document.getElementById("MinVel").value;
    var MaxVel = document.getElementById("MaxVel").value;
    var Traccion = document.getElementById("Traccion").value;
    var TipoVehiculo = document.getElementById("TipoVehiculo").value;
    switch(TipoVehiculo){
        case "coche":
            var V = new Coche();
            break;
        case "motocicleta":
            var V = new Motocicleta();
            break;
        default:
            break;
    }

    console.log(Modelo, MinVel, MaxVel, Traccion, TipoVehiculo);
    
    Vehiculos.push(new Vehiculo(Modelo, Traccion, AvanceMin, AvanceMax, V));
    console.log(Vehiculos);

});