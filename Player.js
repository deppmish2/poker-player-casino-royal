class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const toBet = Math.floor(Math.random() * 20) + 1;
    const toRaise =
      gameState.current_buy_in -
      gameState.players[in_action][bet] +
      gameState.minimum_raise;

    if (toRaise <= 500) {
      bet(toBet + toRaise);
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;
