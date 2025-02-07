class Person {
  constructor(name, age) {
    this.name = name;
    let _age = age;

    this.getAge = () => _age;

    this.setAge = (newAge) => {
      if (newAge > 0) {
        _age = newAge;
      } else {
        console.log("Invalid age");
      }
    };
  }
}

const aditya = new Person("Aditya", "19");
console.log(aditya.getAge());
aditya.setAge(20);
console.log(aditya.getAge());
