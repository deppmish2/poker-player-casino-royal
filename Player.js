class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const toBet = Math.floor(Math.random() * 250) + 1;

    bet(toBet);
  }

  static showdown(gameState) {}
}

module.exports = Player;
