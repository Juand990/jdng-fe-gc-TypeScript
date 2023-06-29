"use strict";
const PrecioBase = 100;
const Color = "blanco";
const Consumo = "F";
const Peso = 5;
class Electrodomestico {
    constructor(newPrecioBase, newColor, newConsumo, newPeso) {
        this.PrecioBase = newPrecioBase;
        if (newColor.toLowerCase() == "blanco" ||
            newColor.toLowerCase() == "negro" ||
            newColor.toLowerCase() == "rojo" ||
            newColor.toLowerCase() == "azul" ||
            newColor.toLowerCase() == "gris") {
            this.Color = newColor; // blanco, negro, rojo, azul, gris
        }
        else {
            this.Color = Color;
        }
        this.Consumo = newConsumo;
        this.Peso = newPeso;
    }
    getPrecioBase() {
        return this.PrecioBase;
    }
    getColor() {
        return this.Color;
    }
    getConsumo() {
        return this.Consumo;
    }
    getPeso() {
        return this.Peso;
    }
    comprobarConsumoEnergetico(letra) {
        if (letra == "A" ||
            letra == "B" ||
            letra == "C" ||
            letra == "D" ||
            letra == "E" ||
            letra == "F") {
            return this.Consumo;
        }
        else {
            return Consumo;
        }
    }
    comprobarColor(color) {
        if (color.toLowerCase() == "blanco" ||
            color.toLowerCase() == "negro" ||
            color.toLowerCase() == "rojo" ||
            color.toLowerCase() == "azul" ||
            color.toLowerCase() == "gris") {
            return this.Color;
        }
        else {
            return Color;
        }
    }
    precioFinal() {
        let PrecioConsPeso = this.PrecioBase;
        let tamaño = this.Peso;
        switch (this.Consumo) {
            case "A":
                PrecioConsPeso = this.PrecioBase + 100;
                break;
            case "B":
                PrecioConsPeso = this.PrecioBase + 80;
                break;
            case "C":
                PrecioConsPeso = this.PrecioBase + 60;
                break;
            case "D":
                PrecioConsPeso = this.PrecioBase + 50;
                break;
            case "E":
                PrecioConsPeso = this.PrecioBase + 30;
                break;
            case "F":
                PrecioConsPeso = this.PrecioBase + 10;
                break;
            default:
                break;
        }
        if (tamaño > 0 && tamaño < 19) {
            PrecioConsPeso = PrecioConsPeso + 10;
        }
        else {
            if (tamaño > 20 && tamaño < 49) {
                PrecioConsPeso = PrecioConsPeso + 50;
            }
            else {
                if (tamaño > 50 && tamaño < 79) {
                    PrecioConsPeso = PrecioConsPeso + 80;
                }
                else {
                    PrecioConsPeso = PrecioConsPeso + 100;
                }
            }
        }
        return PrecioConsPeso;
    }
}
