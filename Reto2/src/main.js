"use strict";
const longitud = 8;
class Password {
    constructor(newLongitud) {
        this.contraseña = "";
        this.longitud = newLongitud;
        let password = "";
        for (let i = 0; i < newLongitud; i++) {
            password = password + Math.floor(Math.random() * 10);
        }
        this.contraseña = password;
    }
}
let pass1 = new Password(10);
console.log(pass1);
