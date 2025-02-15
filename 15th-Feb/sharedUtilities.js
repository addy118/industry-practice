const utilities = {
  log(message) {
    console.log(`[LOG]: ${message}`);
  },

  warn(message) {
    console.warn(`[WARN]: ${message}`);
  },
};

const app = Object.create(utilities);
app.name = "My app";
app.log("Application started");
app.warn("Low memory!");
