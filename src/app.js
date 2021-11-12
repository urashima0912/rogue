const map = require("./map");
const player = require("./player");
const config = require("./config");

const app = {
  async run() {
    map.initialize({ width: config.map.width, height: config.map.height });
    player.initialize(3, 6);
    await this.$loop();
  },

  async $loop() {
    while (true) {
      // ClearBackground
      console.clear();
      player.update();
      map.update({ player });
      map.draw({ player });
      await this.$sleep();
    }
  },

  async $sleep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  },
};

app.run().then(() => {
  console.log("Finish!!");
});
