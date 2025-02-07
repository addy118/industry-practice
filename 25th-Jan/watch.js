function watch(brand, type) {
  return {
    brand,
    type,
    
    showTime() {
      console.log(`The current time is: ${new Date().toLocaleString()}`);
    },
  };
}

const myWatch = watch("FireBoltt", "Analog");
myWatch.showTime();
