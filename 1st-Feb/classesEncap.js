class Person {
  name;
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.log("Invalid Age!");
    }
  }
}

const aditya = new Person("Aditya", "19");
console.log(aditya.getAge());
aditya.setAge(20);
console.log(aditya.getAge());
