import { Circuito } from "./clases.js";
import { Vehiculo } from "./clases.js";
import { Participante } from "./clases.js";
import { Motocicleta } from "./clases.js";
import { Coche } from "./clases.js";

let Vehiculos = new Array();
let Participantes = new Array();
let Circuitos = new Array();

Vehiculos.push(new Coche("Alabay", "dura", 10, 30));
Vehiculos.push(new Motocicleta("Antucan", "mediana", 100, 120));
var Stats = new Array();
Stats["Primeros"] = 0;
Stats["Segundos"] = 0;
Stats["Terceros"] = 0;
Stats["Fuera"] = 0;
Participantes.push(new Participante("Alex Alabau", Vehiculos[0], Stats));
Participantes.push(new Participante("Antonio Herrero", Vehiculos[1], Stats));
Circuitos.push(new Circuito("Circuito Tormenta", "lluvioso", 500));
Circuitos[0].Participantes = new Array(Participantes[0], Participantes[1])
console.log(Circuitos)
console.log(Vehiculos)
resetVehicles();
resetParticipantes();
resetCircuitos();
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
            tr2.innerHTML += (`<button value = `+index+` id = EliminarVehiculoButtonIndex`+index+`>Eliminar Vehiculo</button>`);
            tr.innerHTML += (`<button value = `+index+` id = EditarVehiculoButtonIndex`+index+`> Editar Vehiculo </button>`)
            document.getElementById("EliminarVehiculoButtonIndex"+index).addEventListener("click", function(){
                var Indice = document.getElementById("EliminarVehiculoButtonIndex"+index).value
                Vehiculos.splice(Indice, 1);
                resetVehicles();
            });
            document.getElementById("EditarVehiculoButtonIndex"+index).addEventListener("click", function(){
                var Indice = this.value;
                tr.innerHTML = "";
                tr.innerHTML += (`<td> <input id = EditarModelo`+Indice+`> </td>`);
                tr.innerHTML += (`<td> <input type = number id = EditarAvanceMin`+Indice+`> </td>`);
                tr.innerHTML += (`<td> <input type = number id = EditarAvanceMax`+Indice+`> </td>`);
                tr.innerHTML += (`<td> <select id = EditarTraccion`+Indice+`> 
                    <option value = blanda> Blanda </option>
                    <option value = mediana> Mediana </option>
                    <option value = dura> Dura </option>
                    </select></td>`);
                tr.innerHTML += (`<td> <select id = EditarTipoVehiculo`+Indice+`>
                    <option value = coche> Coche </option>
                    <option value = motocicleta> Motocicleta </option>
                    </select></td>`);
                tr.innerHTML += (`<td> <button id = ConfimarEdicionVehiculo`+Indice+`>Confirmar Edicion</button> </td>`);

                var EditarModelo = document.getElementById("EditarModelo"+Indice);
                var EditarAvanceMin = document.getElementById("EditarAvanceMin"+Indice);
                var EditarAvanceMax = document.getElementById("EditarAvanceMax"+Indice);
                var EditarTraccion = document.getElementById("EditarTraccion"+Indice);
                var EditarTipoVehiculo = document.getElementById("EditarTipoVehiculo"+Indice);

                EditarModelo.value = Vehiculos[Indice].Modelo;
                EditarAvanceMin.value = Vehiculos[Indice].AvanceMin;
                EditarAvanceMax.value = Vehiculos[Indice].AvanceMax;
                EditarTraccion.value = Vehiculos[Indice].Traccion;
                
                    if(Vehiculos[Indice] instanceof Coche){
                        EditarTipoVehiculo.value = "coche";
                    }else{
                        EditarTipoVehiculo.value = "motocicleta";
                    }
                    document.getElementById("ConfimarEdicionVehiculo"+Indice).addEventListener("click", function(){
                        if(EditarTipoVehiculo.value == "coche"){
                            Vehiculos[Indice] = new Coche(EditarModelo.value, EditarTraccion.value, EditarAvanceMin.value, EditarAvanceMax.value);
                        }else{
                            Vehiculos[Indice] = new Motocicleta(EditarModelo.value, EditarTraccion.value, EditarAvanceMin.value, EditarAvanceMax.value)
                        }
                        resetVehicles();
                    })
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
        tr.innerHTML += `<button> Eliminar Participante </button>`

        tr2.innerHTML += `<td>`+p[index].Nombre+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Vehiculo.Modelo+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Primeros"]+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Segundos"]+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Terceros"]+`</td>`;
        tr2.innerHTML += `<td>`+p[index].Estadisticas["Fuera"]+`</td>`;
        tr2.innerHTML += `<button value = `+index+`id = EdutarParticipante`+index+`>Editar Participante</button>`
    })
    
}

function resetCircuitos(){
    document.getElementById("CircuitoSeleccionado").innerHTML = "<option disabled selected> Seleccione Circuito </option>";
    Circuitos.forEach(function(a, index, c){
        document.getElementById("CircuitoSeleccionado").innerHTML += (`<option value = "`+c[index].Nombre+`">`+c[index].Nombre+`</option>`);
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
let ListaParticipantes = document.getElementById("ListaParticipantes")
let FormularioCircuito = document.getElementById("FormularioCircuito");

function hideForms(){
    var navegarVehiculos = document.getElementById("nav-vehiculos");
    var navegarParticipantes = document.getElementById("nav-participantes");
    var navegarCircuitos = document.getElementById("nav-circuitos");

    FormularioVehiculo.style = "display: none";
    ListaVehiculos.style = "display: none";
    FormularioParticipantes.style = "display: none";
    ListaParticipantes.style = "display: none";
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
    ListaParticipantes.style = "display: block";
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

document.getElementById("EmpezarCarreraButton").addEventListener("click", function(){
    var Circuito = document.getElementById("CircuitoSeleccionado").value
    var IndiceCircuito;
    var CircuitoEnCarrera = document.getElementById("CircuitoEnCarrera");
    for(let i = 0; i < Circuitos.length; i++){
        if(Circuitos[i].Nombre.toLowerCase() == Circuito.toLowerCase()){
            IndiceCircuito = i;
            break;
        }
    }
    var Posicion = new Array();
    var Anchura = document.getElementById("CircuitoEnCarrera").offsetWidth;
    var NumeroVehiculo = 0;
    var Vehiculo = new Array();
    Circuitos[IndiceCircuito].Participantes.forEach(function(a, index, p){
        CircuitoEnCarrera.innerHTML += (`<div class = carril> 
            <div class = NombreEnCarrera>`+p[index].Nombre+
            `</div><img src = img/pngtree-pixel-art-car-icon-design-vector-png-image_6141356.png class = CocheCarrera id = VehiculoEnCarrera`+NumeroVehiculo+`><br>
            </div>`);
            Vehiculo.push(p[index].Vehiculo);
            Posicion.push(0);
            NumeroVehiculo++;
    })
    
    var CarreraAnimacion = setInterval(function(){
        for(let i = 0; i < NumeroVehiculo+1; i++){
            Posicion[i] += Vehiculo[i].avance("seco");
            document.getElementById("VehiculoEnCarrera"+i).style.left = `${Posicion[i]}px`;
            if(Anchura - 100 < Posicion[i]){
                alert("hola");
                clearInterval(CarreraAnimacion);
            }
        }
        
    }, 500)
    
    
})
