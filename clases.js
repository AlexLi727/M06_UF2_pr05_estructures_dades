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
    avance(AvanceMin, AvanceMax, Traccion){
        AvanceBase = Math.floor(Math.random() * AvanceMax - AvanceMin)  + AvanceMin
        var AvanceFinal;
        switch(Traccion){
            case("blanda"):
                AvanceFinal = AvanceBase;
                break;
            case("mediana"):
                AvanceFinal = AvanceBase + 2;
                break;
            case("dura"):
                AvanceFinal = AvanceBase + 5;
                break;
        }
        return AvanceFinal;
    }

    caida(Traccion, Entorno){
        var caida = false;
        var probabilidad = math.floor(math.random() * 101);
        if(Entorno == "lluvioso" && Traccion == "dura"){
            if(probabilidad <= 30)
                caida = true;
        }else if(Entorno == "humedo" && Traccion == "dura"){
            if(probabilidad <= 20)
                caida = true;
        }else if(Entorno == "humedo" && Traccion == "mediana"){
            if(probabilidad <= 10)
                caida = true;
        }else{
            if(probabilidad <= 5)
                caida = true;
        }
        return caida;
    }
}

export class Coche extends Vehiculo{
    constructor(Modelo, Traccion, AvanceMin, AvanceMax){
        super(Modelo, Traccion, AvanceMin, AvanceMax);
    }
    avance(AvanceMin, AvanceMax, Traccion, Entorno){
        AvanceBase = Math.floor(Math.random() * AvanceMax - AvanceMin)  + AvanceMin;
        if(Traccion == "mediana" || Entorno == "humedo"){
            AvanceBase + 2;
        }else if(Traccion == "blanda" && Entorno == "lluvioso"){
            AvanceBase + 4;
        }else if(Traccion == "Dura" && Entorno == "seco"){
            AvanceBase + 4;
        }
        return AvanceBase;
    }
}