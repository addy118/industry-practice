const plugin = {
  init() {
    console.log("Plugin initialized");
  },

  destroy() {
    console.log("Plugin destroyed");
  },
};

const analyticPlugin = Object.create(plugin);
analyticPlugin.track = function (event) {
  console.log(`Tracking: ${event}`);
};
analyticPlugin.init();
analyticPlugin.track("click");
analyticPlugin.destroy();
