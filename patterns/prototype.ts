abstract class Dog {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name} said "wolf"`;
  }
}

console.log(Dog.prototype);

class SuperDog extends Dog {
  constructor(name: string) {
    super(name);
  }

  fly() {
    return "I'm flying";
  }
}

console.log(SuperDog.prototype);
