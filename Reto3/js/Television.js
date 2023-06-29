"use strict";
const Resolucion = 20;
const CuatroK = true;
class Television extends Electrodomestico {
    constructor(newResolucion, newCuatroK) {
        super(PrecioBase, Color, Consumo, Peso);
        this.Resolucion = newResolucion;
        this.CuatroK = newCuatroK;
    }
    getResolucion() {
        return this.Resolucion;
    }
    getCuatroK() {
        return this.CuatroK;
    }
    precioFinal() {
        let nuevoPrecio = super.precioFinal();
        if (this.Resolucion > 40) {
            nuevoPrecio = nuevoPrecio * 1.3;
        }
        if (this.CuatroK) {
            nuevoPrecio = nuevoPrecio + 50;
        }
        return nuevoPrecio;
    }
}
