import { Circuito } from "./clases.js";
import { Vehiculo } from "./clases.js";
import { Participante } from "./clases.js";
import { Motocicleta } from "./clases.js";
import { Coche } from "./clases.js";

let Vehiculos = new Array();
let Participantes = new Array();
let Circuitos = new Array();

Vehiculos.push(new Coche("Alabay", "dura", 50, 120));
Vehiculos.push(new Motocicleta("Antucan", "mediana", 50, 120));
Participantes.push(new Participante("Alex Alabau", Vehiculos[0], new Array(0, 0 ,0, 0)));
Participantes.push(new Participante("Antonio Herrero", Vehiculos[1], new Array(0, 0, 0, 0)));
Circuitos.push(new Circuito("Circuito Tormenta", 500, "lluvioso"));
resetVehicles();

function resetVehicles(){
    document.getElementById("VehiculoSeleccionado").innerHTML = ("<option disabled selected> Seleccione Vehiculo </option>");
    document.getElementById("VehiculoSeleccionado2").innerHTML = ("<option disabled selected> Seleccione Vehiculo </option>");
    if(Vehiculos){
        Vehiculos.forEach(function(a, index, v){
            document.getElementById("VehiculoSeleccionado").innerHTML += (`<option value = `+ v[index].Modelo +`>`+ v[index].Modelo  +`</option>`);
            document.getElementById("VehiculoSeleccionado2").innerHTML += (`<option value = `+ v[index].Modelo +`>`+ v[index].Modelo  +`</option>`);
        });
    }
}

function getVehicleIndex(Model){
    for(var i = 0; i < Vehiculos.length; i++){
        if(Vehiculos[i].Modelo.toLowerCase() === Model.toLowerCase()){
            return i;
        }
    }
    return -1;
}

//Evento para crear vehiculo
document.getElementById("NuevoVehiculoButton").addEventListener("click", function(){
    var Modelo = document.getElementById("Modelo").value;
    var MinVel = parseInt(document.getElementById("MinVel").value);
    var MaxVel = parseInt(document.getElementById("MaxVel").value);
    var Traccion = document.getElementById("Traccion").value;
    var TipoVehiculo = document.getElementById("TipoVehiculo").value;
    console.log(MinVel, MaxVel)
    
    if(Modelo == "" ||  MinVel == NaN || MaxVel == NaN || Traccion == "" || TipoVehiculo == ""){
        document.getElementById("Respuesta").innerHTML = "Llene todos los campos";
    }else if(MaxVel < MinVel){
        document.getElementById("Respuesta").innerHTML = "Velocidad min no puede ser mayor a velocidad max";
    }else if(getVehicleIndex(Modelo) != -1  ){
        document.getElementById("Respuesta").innerHTML = "El modelo del vehiculo ya existe"
    }else{
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
    document.getElementById("Modelo").value = "";
    document.getElementById("MinVel").value = "";
    document.getElementById("MaxVel").value = "";
    document.getElementById("Traccion").value = "";
    document.getElementById("TipoVehiculo").value = "";

}});

//Evento para cargar datos de un vehiculo
document.getElementById("CargarEstadisticasButton").addEventListener("click", function(){
    var Modelo = document.getElementById("VehiculoSeleccionado").value;
    var indice = getVehicleIndex(Modelo);

    if(indice != -1){
        document.getElementById("VehiculosEstadisticas").innerHTML = Vehiculos[indice].Modelo;
        document.getElementById("VehiculosEstadisticas").innerHTML += Vehiculos[indice].Traccion;
        document.getElementById("VehiculosEstadisticas").innerHTML += Vehiculos[indice].AvanceMin;
        document.getElementById("VehiculosEstadisticas").innerHTML += Vehiculos[indice].AvanceMax;
        document.getElementById("VehiculosEstadisticas").innerHTML += Vehiculos[indice].TipoVehiculo; 
    }else{
        //No se ha encontrado vehiculo
    }
})

//Evento para crear participante
document.getElementById("NuevoParticipanteButton").addEventListener("click", function(){
    var Nombre = document.getElementById("Nombre").value;
    var Vehiculo = document.getElementById("VehiculoSeleccionado2").value;
    var Primeros = document.getElementById("Primeros").value;
    var Segundos = document.getElementById("Segundos").value;
    var Terceros = document.getElementById("Terceros").value;
    var FueraPodio = document.getElementById("FueraPodio").value;

    if(Nombre == "" || Vehiculo == "" || Primeros == "" || Segundos == "" || Terceros == "" || FueraPodio == "")
    var Estadisticas = new Array(); 
    Estadisticas["Primeros"] = Primeros;
    Estadisticas["Segundos"] = Segundos;
    Estadisticas["Terceros"] = Terceros;
    Estadisticas["Fuera"] = FueraPodio;

    var newParticipante = new Participante(Nombre, Vehiculos[getVehicleIndex(Vehiculo)], Estadisticas);

    Participantes.push(newParticipante);
})

//Evento para crear circuito
document.getElementById("NuevaCarreraButton").addEventListener("click", function(){
    var Nombre = document.getElementById("NombreCircuito").value;
    var Longitud = document.getElementById("Longitud").value;
    var Tiempo = document.getElementById("Tiempo").value;

    var newCircuito = new Circuito(Nombre, Longitud, Tiempo);

    Circuitos.push(newCircuito);
})