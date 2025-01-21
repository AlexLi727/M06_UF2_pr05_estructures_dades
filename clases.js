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
    Estadisticas;
    constructor(Nombre, Vehiculo, Estadisticas){
        this.Nombre = Nombre;
        this.Vehiculo = Vehiculo;
        this.Estadisticas = Estadisticas;
    }

}

export class Vehiculo{
    Modelo
    Traccion
    AvanceMin
    AvanceMax;
    constructor(Modelo, Traccion, AvanceMin, AvanceMax){
        this.Modelo = Modelo;
        this.Traccion = Traccion;
        this.AvanceMin = AvanceMin;
        this.AvanceMax = AvanceMax;
    }

}

export class Motocicleta extends Vehiculo{
    constructor(Modelo, Traccion, AvanceMin, AvanceMax){
        super(Modelo, Traccion, AvanceMin, AvanceMax);
    }
}

export class Coche extends Vehiculo{
    constructor(Modelo, Traccion, AvanceMin, AvanceMax){
        super(Modelo, Traccion, AvanceMin, AvanceMax);
    }
}