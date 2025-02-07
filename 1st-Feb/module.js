function Person(name, age) {
  let _age = age;
  this.name = name;

  this.getAge = function () {
    return _age;
  };

  this.setAge = function (newAge) {
    if (newAge > 0) {
      _age = newAge;
    } else {
      console.log("Invalid Age!");
    }
  };
}

Person.prototype.greet = function () {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.getAge()} years old.`
  );
};

const addy = new Person("Addy", 19);
addy.greet();
console.log(addy.getAge());
addy.setAge(20);
console.log(addy.getAge());
