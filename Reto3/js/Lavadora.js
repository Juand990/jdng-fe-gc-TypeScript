"use strict";
const Carga = 5;
class Lavadora extends Electrodomestico {
    constructor(newCarga) {
        super(PrecioBase, Color, Consumo, Peso);
        this.Carga = newCarga;
    }
    getCarga() {
        return this.Carga;
    }
    precioFinal() {
        let nuevoPrecio = super.precioFinal();
        if (this.Carga > 30) {
            nuevoPrecio = nuevoPrecio + 50;
        }
        return nuevoPrecio;
    }
}
