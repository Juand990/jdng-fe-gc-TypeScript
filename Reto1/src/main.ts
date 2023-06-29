class Persona {
  Nombre: string = "";
  Edad: number = 0;
  DNI: number;
  Sexo: string = "H";
  Peso: number = 0;
  Altura: number = 0;

  constructor(
    newNombre: string,
    newEdad: number,
    newDNI: number,
    newSexo: string,
    newPeso: number,
    newAltura: number
  ) {
    this.Nombre = newNombre;
    this.Edad = newEdad;
    this.DNI = newDNI;
    this.Sexo = newSexo;
    this.Peso = newPeso;
    this.Altura = newAltura;
  }
}

let pers1 = new Persona("Pepe", 20, 123456789, "H", 80, 180);
let pers2 = new Persona("Luis", 30, 234567890, "H", 70, 170);
let pers3 = new Persona("Laura", 40, 345678901, "M", 60, 165);

console.log(pers1);
console.log(pers2);
console.log(pers3);
