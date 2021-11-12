const readline = require("readline");
const config = require("./config");

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) process.stdin.setRawMode(true);

const X = 0;
const Y = 1;

const Player = {
  position: [0, 0], // (x, y)
  character: "X",

  initialize(x, y) {
    this.position[X] = x;
    this.position[Y] = y;

    process.stdin.on("keypress", (chunk, key) => {
      if (key.name === "w") {
        const newPosY = this.position[Y] - 1;
        if (newPosY < 0) {
          return;
        }
        this.position[Y] = newPosY;
      } else if (key.name === "s") {
        const newPosY = this.position[Y] + 1;
        if (newPosY >= config.map.height) {
          return;
        }
        this.position[Y] = newPosY;
      } else if (key.name === "a") {
        const newPosX = this.position[X] - 1;
        if (newPosX < 0) {
          return;
        }
        this.position[X] = newPosX;
      } else if (key.name === "d") {
        const newPosX = this.position[X] + 1;
        if (newPosX >= config.map.width) {
          return;
        }
        this.position[X] = newPosX;
      } else if (key.name === "return") {
        process.exit(0);
      }
    });
  },
  update() {
    /* TODO */
  },
  draw() {
    /* TODO */
  },
};

module.exports = Player;
