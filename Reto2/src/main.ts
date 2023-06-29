const longitud: number = 8;
class Password {
  longitud: number;
  contraseña: string = "";
  
  constructor(newLongitud: number) {
    this.longitud = newLongitud;
    let password: string = "";
    for (let i = 0; i < newLongitud; i++) {
      password = password + Math.floor(Math.random() * 10);
    }
    this.contraseña = password;
  }
}

let pass1 = new Password(10);
console.log(pass1);
