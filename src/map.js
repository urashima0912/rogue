const coin = require("./coin");
const X = 0;
const Y = 1;

const Map = {
  width: 0,
  height: 0,
  matrix: [],
  coins: [],
  counter: 0,
  initialize({ width, height }) {
    this.width = width;
    this.height = height;

    for (let i = 0; i < height; i++) {
      this.matrix.push([]);
      for (let j = 0; j < width; j++) {
        this.matrix[i].push(0);
      }
    }

    // Initialize coins
    const coin1 = JSON.parse(JSON.stringify(coin));
    coin1.initialize = coin.initialize;
    coin1.draw = coin.draw;
    coin1.update = coin.update;
    coin1.initialize({ x: 0, y: 0 });

    const coin2 = JSON.parse(JSON.stringify(coin));
    coin2.initialize = coin.initialize;
    coin2.draw = coin.draw;
    coin2.update = coin.update;
    coin2.initialize({ x: 9, y: 0 });

    const coin3 = JSON.parse(JSON.stringify(coin));
    coin3.initialize = coin.initialize;
    coin3.draw = coin.draw;
    coin3.update = coin.update;
    coin3.initialize({ x: 4, y: 6 });

    // this.coins.push(coin1);
    // this.coins.push(coin2);
    this.coins.push(coin3);
  },
  update({ player }) {
    for (const coin of this.coins) {
      if (
        coin.active &&
        coin.position[X] === player.position[X] &&
        coin.position[Y] === player.position[Y]
      ) {
        coin.active = false;
        this.counter++;
        return;
      }
    }

    if (this.counter >= this.coins.length) {
      console.log("winner!!!");
      process.exit(0);
    }
  },
  draw({ player }) {
    console.log("Counter: ", this.counter);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        // coins draw
        let isCoin = false;
        for (let k = 0; k < this.coins.length; k++) {
          if (
            this.coins[k].active &&
            i === this.coins[k].position[1] &&
            j === this.coins[k].position[0]
          ) {
            process.stdout.write(this.coins[k].character + " ");
            isCoin = true;
          }
        }
        if (!isCoin) {
          // player
          if (i === player.position[1] && j === player.position[0]) {
            // [x, y]
            process.stdout.write(player.character + " ");
          } else {
            process.stdout.write(". ");
          }
        }
      }
      console.log();
    }
  },
};

module.exports = Map;
