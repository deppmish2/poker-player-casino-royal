const GameState = require("./Game");

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const threshold = Math.random() < 0.8;
    const toBet = Math.floor(Math.random() * 500) + 1;

    bet(toBet);
  }

  static showdown(gameState) {}
}

module.exports = Player;
