import { Circuito } from "./clases.js";
import { Vehiculo } from "./clases.js";
import { Participante } from "./clases.js";
import { Motocicleta } from "./clases.js";
import { Coche } from "./clases.js";

let Vehiculos = new Array();

function resetVehicles(){
    document.getElementById("VehiculoSeleccionado").innerHTML = ("<option disabled selected> Seleccione Vehiculo </option>")
    if(Vehiculos){
        Vehiculos.forEach(function(a, index, v){
            document.getElementById("VehiculoSeleccionado").innerHTML += (`<option value = `+ v[index].Modelo +`>`+ v[index].Modelo  +`</option>`);
        });
    }
}

document.getElementById("NuevoVehiculoButton").addEventListener("click", function(){
    var Modelo = document.getElementById("Modelo").value;
    var MinVel = document.getElementById("MinVel").value;
    var MaxVel = document.getElementById("MaxVel").value;
    var Traccion = document.getElementById("Traccion").value;
    var TipoVehiculo = document.getElementById("TipoVehiculo").value;
    switch(TipoVehiculo){
        case "coche":
            var V = new Coche(Modelo, Traccion, MinVel, MaxVel)
            console.log("xd");
            break;
        case "motocicleta":
            var V = new Motocicleta(Modelo, Traccion, MinVel, MaxVel)
            console.log("xd");
            break;
        default:
            break;
    }

    console.log(Modelo, MinVel, MaxVel, Traccion, TipoVehiculo);
    Vehiculos.push(V);
    console.log(Vehiculos);
    resetVehicles();

});

document.getElementById("CargarEstadisticasButton").addEventListener("click", function(){
    var Modelo = document.getElementById("VehiculoSeleccionado").value;
    for(let i = 0; i < Vehiculos.length; i++){
        if(Vehiculos[i].Modelo === Modelo){
            document.getElementById("VehiculosEstadisticas").innerHTML = Modelo;
            break;
        }
    }
    
})