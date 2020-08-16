export class GuitarSpec {

  constructor(
    private builder: Builder,
    private type: Type,
    private wood: Wood
  ) { }

  public getBuilder(): Builder {
    return this.builder;
  }

  public getType(): Type {
    return this.type;
  }

  public getWood(): Wood {
    return this.wood;
  }
}

export enum Wood {
  IndianRoseWood = 'INDIAN_ROSE_WOOD',
  Cedar = 'CEDAR'
}

export enum Type {
  Acoustic = 'ACOUSTIC',
  Electric = 'ELECTRIC'
}

export enum Builder {
  Fender = 'FENDER',
  Olson = 'OLSON',
  Ryan = 'RYAN',
  Martin = 'MARTIN'
}