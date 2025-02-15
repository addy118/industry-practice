function user(name, email) {
  this.name = name;
  this.email = email;
}

user.prototype.login = function () {
  console.log(`${this.name} got logged in`);
};

user.prototype.logout = function () {
  console.log(`${this.name} got logged out`);
};

const currentUser = new user("Addy", "addy@test.com");
currentUser.login();
currentUser.logout();
