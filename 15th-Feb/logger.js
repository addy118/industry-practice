const logger = {
  log(msg) {
    console.log(`[LOG]: ${msg}`);
  },
};

const currentLog = Object.create(logger);
currentLog.log("hi addy");
currentLog.log = function (msg) {
  console.log(`[CUSTOM LOG]: ${msg}`);
};

currentLog.log("hi addy");
