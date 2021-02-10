class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const toBet = Math.floor(Math.random() * 250) + 1;
    const toRaise =
      gameState.current_buy_in -
      gameState.players[in_action][bet] +
      gameState.minimum_raise;

    bet(toBet + toRaise);
  }

  static showdown(gameState) {}
}

module.exports = Player;
