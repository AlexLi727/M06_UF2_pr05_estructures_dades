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
var Stats = new Array();
Stats["Primeros"] = 0;
Stats["Segundos"] = 0;
Stats["Terceros"] = 0;
Stats["Fuera"] = 0;
Participantes.push(new Participante("Alex Alabau", Vehiculos[0], Stats));
Participantes.push(new Participante("Antonio Herrero", Vehiculos[1], Stats));
Circuitos.push(new Circuito("Circuito Tormenta", 500, "lluvioso"));
resetVehicles();
resetParticipantes();

//FUNCION PARA ACTUALIZAR LOS DATOS DE LOS VEHICULOS AL HABER CAMBIOS
function resetVehicles(){
    document.getElementById("VehiculoSeleccionado").innerHTML = ("<option disabled selected> Seleccione Vehiculo </option>");
    document.getElementById("VehiculoSeleccionado2").innerHTML = ("<option disabled selected> Seleccione Vehiculo </option>");
    if(Vehiculos){
        document.getElementById("ListaVehiculos").innerHTML = "";
        Vehiculos.forEach(function(a, index, v){
            document.getElementById("VehiculoSeleccionado").innerHTML += (`<option value = `+ v[index].Modelo +`>`+ v[index].Modelo  +`</option>`);
            document.getElementById("VehiculoSeleccionado2").innerHTML += (`<option value = `+ v[index].Modelo +`>`+ v[index].Modelo  +`</option>`);
            document.getElementById("lista-vehiculos").innerHTML += (`<option value = `+ v[index].Modelo +`>`);
 
            var tr = document.createElement("tr");
            var tr2 = document.createElement("tr");
            var div = document.createElement("table");

            document.getElementById("ListaVehiculos").appendChild(div);

            div.appendChild(tr2);
            div.appendChild(tr);
            
            tr2.innerHTML += (`<th>Modelo</th>`);
            tr2.innerHTML += (`<th>AvanceMin</th>`);
            tr2.innerHTML += (`<th>AvanceMax</th>`);
            tr2.innerHTML += (`<th>Traccion</th>`);
            tr2.innerHTML += (`<th>Tipo Vehiculo</th>`);

            tr.innerHTML += (`<td>`+ v[index].Modelo +`</td>`);
            tr.innerHTML += (`<td>`+ v[index].AvanceMin +`</td>`);
            tr.innerHTML += (`<td>`+ v[index].AvanceMax +`</td>`);
            tr.innerHTML += (`<td>`+ v[index].Traccion +`</td>`);
            if(v[index] instanceof Coche){
                tr.innerHTML += (`<td> Coche </td>`);
            }else{
                tr.innerHTML += (`<td> Motocicleta </td>`);
            }

            div = document.createElement("div");
            tr.appendChild(div);
            div.innerHTML += (`<button value = `+index+` id = EliminarVehiculoButtonIndex`+index+`>Eliminar Vehiculo</button>`);
            document.getElementById("EliminarVehiculoButtonIndex"+index).addEventListener("click", function(){
                var Indice = document.getElementById("EliminarVehiculoButtonIndex"+index).value
                Vehiculos.splice(Indice, 1);
                resetVehicles();
            })

        });
    }
}

function resetParticipantes(){
    Participantes.forEach(function(a, index, p){
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var tr2 = document.createElement("tr");

        document.getElementById("ListaParticipantes").appendChild(table);
        table.appendChild(tr);
        table.appendChild(tr2)

        tr.innerHTML += `<th>Nombre</th>`;
        tr.innerHTML += `<th>Vehiculo</th>`;
        tr.innerHTML += `<th>1ros</th>`;
        tr.innerHTML += `<th>2dos</th>`;
        tr.innerHTML += `<th>3ros</th>`;
        tr.innerHTML += `<th>Fuera de podio</th>`;

        tr2.innerHTML += `<td>`+p[index].Nombre+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Vehiculo.Modelo+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Primeros"]+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Segundos"]+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Terceros"]+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Fuera"]+`</td>`;
    })
    
}

function getVehicleIndex(Model){
    for(var i = 0; i < Vehiculos.length; i++){
        if(Vehiculos[i].Modelo.toLowerCase() === Model.toLowerCase()){
            return i;
        }
    }
    return -1;
}
let FormularioVehiculo = document.getElementById("FormularioVehiculo");
let ListaVehiculos = document.getElementById("ListaVehiculos");
let FormularioParticipantes = document.getElementById("FormularioParticipante");
let FormularioCircuito = document.getElementById("FormularioCircuito");

function hideForms(){
    var navegarVehiculos = document.getElementById("nav-vehiculos");
    var navegarParticipantes = document.getElementById("nav-participantes");
    var navegarCircuitos = document.getElementById("nav-circuitos");

    FormularioVehiculo.style = "display: none";
    ListaVehiculos.style = "display: none";
    FormularioParticipantes.style = "display: none";
    FormularioCircuito.style = "display: none";

    navegarVehiculos.style = "color: black";
    navegarParticipantes.style = "color: black";
    navegarCircuitos.style = "color: black";
}

//Evento para navegar a VEHICULOS
document.getElementById("nav-vehiculos").addEventListener("click", function(){
    hideForms();
    FormularioVehiculo.style = "display: block";
    ListaVehiculos.style = "display: block";
    this.style = "color: blue";
});

//Evento para navegar a PARTICIPANTES   
document.getElementById("nav-participantes").addEventListener("click", function(){
    hideForms();
    FormularioParticipantes.style = "display: block";
    this.style = "color: blue";
})

//Evento para navegar a CIRCUITOS
document.getElementById("nav-circuitos").addEventListener("click", function(){
    hideForms();
    FormularioCircuito.style = "display: block";
    this.style = "color: blue";
})

//Evento para crear vehiculo
document.getElementById("NuevoVehiculoButton").addEventListener("click", function(){
    var Modelo = document.getElementById("Modelo").value;
    var MinVel = parseInt(document.getElementById("MinVel").value);
    var MaxVel = parseInt(document.getElementById("MaxVel").value);
    var Traccion = document.getElementById("Traccion").value;
    var TipoVehiculo = document.getElementById("TipoVehiculo").value;
    console.log(MinVel, MaxVel)
    
    if(Modelo == "" ||  isNaN(MinVel) || isNaN(MaxVel) || Traccion == "" || TipoVehiculo == ""){
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
    console.log(Primeros)
    if(Nombre == "" || Vehiculo == "" || Primeros == "" || Segundos == "" || Terceros == "" || FueraPodio == ""){

    }else{
    var Estadisticas = new Array(); 
    Estadisticas["Primeros"] = Primeros;
    Estadisticas["Segundos"] = Segundos;
    Estadisticas["Terceros"] = Terceros;
    Estadisticas["Fuera"] = FueraPodio;

    var newParticipante = new Participante(Nombre, Vehiculos[getVehicleIndex(Vehiculo)], Estadisticas);

    Participantes.push(newParticipante);

    console.log(Participantes);
    }
})

//Evento para crear circuito
document.getElementById("NuevaCarreraButton").addEventListener("click", function(){
    var Nombre = document.getElementById("NombreCircuito").value;
    var Longitud = document.getElementById("Longitud").value;
    var Tiempo = document.getElementById("Tiempo").value;

    var newCircuito = new Circuito(Nombre, Longitud, Tiempo);

    Circuitos.push(newCircuito);
});

//Evento para asignar participantes
document.getElementById("AsignarParticipanteButton").addEventListener("click", function(){

});

//Evento para quitar participantes
document.getElementById("QuitarParticipanteButton").addEventListener("click", function(){

})