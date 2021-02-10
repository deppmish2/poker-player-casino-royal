class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const amountMoneyWeHave = gameState.players[gamestate.in_action].stack
    const toBet = Math.floor(Math.random() * amountMoneyWeHave/10) + 1;
    const toRaise = gameState.minimum_raise;

    if (toRaise <= amountMoneyWeHave/4) {
      bet(toBet + toRaise);
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;
