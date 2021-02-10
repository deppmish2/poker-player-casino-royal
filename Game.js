class HandState {
  constructor(cards) {
    this.cards = cards;
  }

  cardRanks = cards.map((card) => card.rank);

  score = (card) => {
    // If card rank is within A/K/Q/J
    const houseCards = this.cardRanks.filter((card) =>
      ["J", "Q", "K", "A"].includes(card)
    );

    // Or if cards are adjacent i.e. 10/9 | 8/7
    // Or if  cards are pair
    // Generate a hashmap from the given array for counting the frequency.
    const hashMap = cardRanks.reduce((a, c) => {
      a[c] = (a[c] || 0) + 1;
      return a;
    }, {});

    const pair = [];

    // If the frequency is divided by 2 then push the key of the hashMap into pair array.
    Object.entries(hashMap).forEach(([k, v]) => {
      if (v % 2 === 0) {
        [...Array(Math.floor(v / 2))].forEach((_) => pair.push(k));
      }
    });

    // Return some score
  };
}

class PlayerState {
  constructor(gameState) {
    const currentPlayer = gameState.players.find(
      (player) => player.hole_cards.length === 2
    );

    this.gameState = gameState;
    this.cardState = new HandState([
      currentPlayer.hole_cards[0],
      currentPlayer.hole_cards[1],
    ]);
  }
  // Has some current amount of money
}

class GameState {
  constructor(gameState) {
    this.communityCards = gameState.community_cards;
  }
  // Has some community cards
  // Has some `pot` value
  // Has player bet values
  // If big blind
  // Otherwise if small blind
  // Otherwise check.
}

module.exports = GameState;
