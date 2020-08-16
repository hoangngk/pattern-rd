import { GuitarSpec } from './guitar-spec';

export class Guitar {

  constructor(
    private serialNumber: string,
    private price: number,
    private spec: GuitarSpec
  ) {}

  public getSerialNumber(): string {
    return this.serialNumber;
  }

  public getPrice(): number {
    return this.price;
  }

  public getSpec(): GuitarSpec {
    return this.spec;
  }
}