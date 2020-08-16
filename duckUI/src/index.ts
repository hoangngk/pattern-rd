export const hello = 'welcome to ...!!!';


interface IFlyBehavior {
  fly: () => void;
}

class WingFly implements IFlyBehavior {
  public fly(): void {
    console.log('I fly by my wings vuvu');
  }
}

class Duck {
  public flyBehavior: IFlyBehavior;

  public performFly(): void {
    this.flyBehavior.fly();
  }
}

class DonalDuck extends Duck {
  public flyBehavior = new WingFly();
}

const donal = new DonalDuck();
donal.performFly();