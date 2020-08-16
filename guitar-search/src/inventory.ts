import { GuitarSpec } from './guitar-spec';
import { Guitar } from './guitar';

export class Inventory {
  private guitars: Guitar[];

  public search(): Guitar {
    // return Guitar;
  }

  public addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
    this.guitars = [...this.guitars, new Guitar(serialNumber, price, spec)];
  }

  // public getGuitar(): Guitar {}
}