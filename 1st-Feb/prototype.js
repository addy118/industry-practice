const Employee = {
  name: "Unknown",
  department: "General",
  role: "EMployee",

  getDetails() {
    return `${this.name} works in the ${this.department} department as a ${this.role}.`;
  },

  work() {
    console.log(`${this.name} is working...`);
  },
};

const Manager = Object.create(Employee);
Manager.role = "Manager";
Manager.manageTeam = function() {
  console.log(`${this.name} is managing the team.`);
}

const Developer = Object.create(Employee);
Developer.role = "Developer";
Developer.writeCode = function() {
  
}