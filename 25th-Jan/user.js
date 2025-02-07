function user(name, gender, height, weight, ethnicity, degree) {
  return {
    gender,
    height,
    weight,
    ethnicity,
    degree,
    introduce() {
      console.log(
        `Hello! My name is ${name}. I'm a ${gender}. I am an ${ethnicity}. My height is ${height} feet and I weigh ${weight} kgs. I'm pursuing ${degree} degree.`
      );
    },
  };
}

const aditya = user("Aditya", "Male", 6, 83, "Indian", "B.E. in IT");
aditya.introduce();
