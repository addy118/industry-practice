class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi ${this.name}`);
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }

  greet() {
    super.greet();
    console.log(`Your role is ${this.role}`);
  }
}

const admin = new Admin("Addy", "Tech Lead");
admin.greet();
