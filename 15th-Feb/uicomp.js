const uicomp = {
  render() {
    console.log("Rendering component");
  },

  destroy() {
    console.log("Destroy component");
  },
};

const button = Object.create(uicomp);
button.onClick = function () {
  console.log("Button clicked");
};
button.onClick();
button.render();
button.destroy();
