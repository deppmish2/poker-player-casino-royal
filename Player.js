class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const toBet = Math.floor(Math.random() * 50) + 1;
    const toRaise = gameState.minimum_raise;

    if (toRaise <= 500) {
      bet(toBet + toRaise);
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;
