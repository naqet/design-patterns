const person = {
  name: "John",
  age: "1",
  nationality: "Polish",
};

type PersonValues = NonNullable<(typeof person)[keyof typeof person]>;

const personProxy = new Proxy<typeof person>(person, {
  get: (obj, prop: keyof typeof person) => {
    console.log(`${prop} value is ${obj[prop]}`);
  },
  set: (obj, prop: keyof typeof person, value: PersonValues) => {
    try {
      Reflect.set(obj, prop, value);
      return true;
    } catch {
      return false;
    }
  },
});

personProxy.name;
