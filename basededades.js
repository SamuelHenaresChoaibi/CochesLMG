/*
basededades.js: Gestionarà la "base de dades", 
incloent-hi les funcions per carregar, 
inserir i esborrar elements. 
Aquest elements han de ser objectes amb herència com 
varem fer a la darrera pràctica que vehicles.
*/

// Clase Vehiculo
function Vehiculo(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;

}
// Método mostrarDetalles() para mostrar los detalles del vehiculo
Vehiculo.prototype.mostrarDetalles = function () {
    console.log(`${this.constructor.name}: ${this.marca} ${this.modelo} (${this.year})`);
}


// Clase Coche 
function Coche(marca, modelo, year, puertas) {
    Vehiculo.call(this, marca, modelo, year); 
    this.puertas = puertas;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;


// Clase Moto 
function Moto(marca, modelo, year, tipoMoto) {
    Vehiculo.call(this, marca, modelo, year); 
    this.tipoMoto = tipoMoto;

}
Moto.prototype = Object.create(Vehiculo.prototype);
Moto.prototype.constructor = Moto;

// Clase Camion
function Camion(marca, modelo, year, capacidad) {
    Vehiculo.call(this, marca, modelo, year);  
    this.capacidad = capacidad + "T";  

}
Camion.prototype = Object.create(Vehiculo.prototype);
Camion.prototype.constructor = Camion;

let vehiculos = [];

//Funciones
function addVehiculo(tipo, marca, modelo, year, puertas = null, tipoMoto = null, capacidad = null){
    let vehiculo;
    if(tipo === "Cotxe"){
        vehiculo = new Coche(marca, modelo, year, puertas);
    }else if(tipo === "Moto"){
        vehiculo = new Moto(marca, modelo, year, tipoMoto);
    }else if(tipo === "Camió"){
        vehiculo = new Camion(marca, modelo, year, capacidad)
    }
    vehiculos.push(vehiculo)
}

function eliminarVehiculo(indice){
    if(indice >= 0 && indice < vehiculos.length){
        vehiculos.splice(indice, 1);
    }
}

function obtenerVehiculos(){
    return vehiculos;
}
