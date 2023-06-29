"use strict";
let ArrayElectros = [];
// blanco, negro, rojo, azul, gris
let el1 = new Electrodomestico(100, 'blanco', 'E', 10);
let el2 = new Electrodomestico(110, 'rojo', 'F', 15);
let el3 = new Electrodomestico(80, 'negro', 'C', 9);
let el4 = new Electrodomestico(200, 'gris', 'F', 20);
let el5 = new Lavadora(5);
let el6 = new Lavadora(10);
let el7 = new Lavadora(8);
let el8 = new Television(45, false);
let el9 = new Television(60, true);
let el10 = new Television(78, true);
ArrayElectros[0] = el1;
ArrayElectros[1] = el2;
ArrayElectros[2] = el3;
ArrayElectros[3] = el4;
ArrayElectros[4] = el5;
ArrayElectros[5] = el6;
ArrayElectros[6] = el7;
ArrayElectros[7] = el8;
ArrayElectros[8] = el9;
ArrayElectros[9] = el10;
let totEle = 0;
let totLav = 0;
let totTv = 0;
for (let i = 0; i < ArrayElectros.length; i++) {
    if (ArrayElectros[i] instanceof Lavadora) {
        totLav = totLav + ArrayElectros[i].precioFinal();
    }
    if (ArrayElectros[i] instanceof Television) {
        totTv = totTv + ArrayElectros[i].precioFinal();
    }
    if (ArrayElectros[i] instanceof Electrodomestico) {
        totEle = totEle + ArrayElectros[i].precioFinal();
    }
}
console.log("Total Electrodomesticos:" + totEle);
console.log("Total Lavadoras:" + totLav);
console.log("Total Televisiones:" + totTv);
