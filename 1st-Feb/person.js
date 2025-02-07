class Person {
  name;
  _age;

  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this._age} years old.`
    );
  }

  _calculateBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._age;
  }
}

const person = new Person("Aditya", "20");
person.greet();
console.log(person._age);
