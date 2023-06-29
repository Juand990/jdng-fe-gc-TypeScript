const Carga: number = 5;

class Lavadora extends Electrodomestico {
  private Carga: number;

  constructor(newCarga: number) {
    super(PrecioBase, Color, Consumo, Peso);
    this.Carga = newCarga;
  }

  getCarga(): number {
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
