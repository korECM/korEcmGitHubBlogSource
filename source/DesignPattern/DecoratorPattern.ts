abstract class Beverage {
  protected description: string;

  public getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class Americano extends Beverage {
  constructor() {
    super();
    this.description = "아메리카노";
  }
  cost() {
    return 3000;
  }
}

class CaffeeLatte extends Beverage {
  constructor() {
    super();
    this.description = "카페라떼";
  }
  cost() {
    return 4500;
  }
}

abstract class BeverageDecorator extends Beverage {
  abstract getDescription(): string;
}

class Ice extends BeverageDecorator {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ", 아이스";
  }

  cost() {
    return this.beverage.cost() + 500;
  }
}

class Whip extends BeverageDecorator {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ", 휘핑";
  }
  cost() {
    return this.beverage.cost() + 1000;
  }
}

class Mocha extends BeverageDecorator {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ", 모카";
  }
  cost() {
    return this.beverage.cost() + 300;
  }
}

// let myCoffee = new Americano();
// console.log(`${myCoffee.getDescription()}는 ${myCoffee.cost()}원입니다~`);

// let myCoffee2 = new CaffeeLatte();
// myCoffee2 = new Ice(myCoffee2);
// myCoffee2 = new Whip(myCoffee2);
// myCoffee2 = new Whip(myCoffee2);
// console.log(`${myCoffee2.getDescription()}는 ${myCoffee2.cost()}원입니다~`);
