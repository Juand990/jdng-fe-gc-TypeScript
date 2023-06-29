const Resolucion: number = 20;
const CuatroK: boolean = true;

class Television extends Electrodomestico {
  private Resolucion: number;
  private CuatroK: boolean;

  constructor(newResolucion: number, newCuatroK: boolean) {
    super(PrecioBase, Color, Consumo, Peso);
    this.Resolucion = newResolucion;
    this.CuatroK = newCuatroK;
  }
  getResolucion(): number {
    return this.Resolucion;
  }
  getCuatroK(): boolean {
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
