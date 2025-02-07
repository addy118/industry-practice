function pen(ink, type) {
  return {
    ink,
    type,
    write() {
      console.log(`Hello, I'm a ${type} pen and I have ${ink} ink`);
    },
  };
}

const myPen = pen("blue", "ink");
myPen.write();
