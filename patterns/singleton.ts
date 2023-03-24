let instance: any;

class Counter {
  private count: number;

  constructor() {
    if (instance) {
      throw Error("Only one instance allowed");
    }
    instance = this;
    this.count = 0;
  }

  getInstance(): this {
    return this;
  }

  getCount(): number {
    return this.count;
  }

  increment(): number {
    this.count++;
    return this.count;
  }

  decrement(): number {
    this.count--;
    return this.count;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
