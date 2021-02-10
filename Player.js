const GameState = require("./Game");

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const threshold = Math.random() < 0.8;
    const bet = Math.floor(Math.random() * 500) + 1;

    if (threshold) {
      bet(bet);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;
