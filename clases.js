export class Circuito{
    Nombre
    Tiempo
    Longitud;
    constructor(Nombre, Tiempo, Longitud){
        this.Nombre = Nombre;
        this.Tiempo = Tiempo;
        this.Longitud = Longitud;
    }
}

export class Participante{
    Nombre
    Vehiculo
    Puestos;
    constructor(Nombre, Vehiculo, Puestos){
        this.Nombre = Nombre;
        this.Vehiculo = Vehiculo;
        this.Puestos = Puestos;
    }

}

export class Vehiculo{
    Modelo
    Traccion
    AvanceMin
    AvanceMax
    TipoVehiculo;
    constructor(Modelo, Traccion, AvanceMin, AvanceMax, TipoVehiculo){
        this.Modelo = Modelo;
        this.Traccion = Traccion;
        this.AvanceMin = AvanceMin;
        this.AvanceMax = AvanceMax;
        this.TipoVehiculo = TipoVehiculo;
    }

}

export class Motocicleta extends Vehiculo{

}

export class Coche extends Vehiculo{

}