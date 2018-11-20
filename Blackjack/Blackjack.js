const prompt = require('prompt');

prompt.start();

class Player {
  constructor(name) {
    this.name = name;
    this.hand = {};
    this.inRound = true;
  }

  leaveRound() {
    this.inRound = false;
  }
}

class Hand {
  constructor() {
    this.cards = [];
    this.points = 0;
  }

  getCards() {
    return this.cards;
  }

  countPoints() {
    this.cards.forEach(e => {
      if (this.points <= 21) {
        if (e === 'King' || e === 'Queen' || e === 'Jack') {
          this.points += 10;
        } else if (e === 'Ace') {
          if (this.points + 11 < 21) {
            this.points += 11;
          } else {
            this.points += 1;
          }
        } else {
          this.points += Number(e);
        }
      }
    });
  }

  newCard(card) {
    this.cards.push(card);
    this.countPoints();
  }

  gameOver() {
    if (this.points === 21) {
      return `Points: ${this.points} Blackjack!`;
    }
    if (this.points > 21) {
      this.inRound = false;
      return `Points: ${this.points} Busted!`;
    }
    return `Points: ${this.points} Still in the game...`;
  }
}

class Deck {
  constructor() {
    this.cards = [
      'Ace',
      'Ace',
      'Ace',
      'Ace',
      'King',
      'King',
      'King',
      'King',
      'Queen',
      'Queen',
      'Queen',
      'Queen',
      'Jack',
      'Jack',
      'Jack',
      'Jack',
      '10',
      '10',
      '10',
      '10',
      '9',
      '9',
      '9',
      '9',
      '8',
      '8',
      '8',
      '8',
      '7',
      '7',
      '7',
      '7',
      '6',
      '6',
      '6',
      '6',
      '5',
      '5',
      '5',
      '5',
      '4',
      '4',
      '4',
      '4',
      '3',
      '3',
      '3',
      '3',
      '2',
      '2',
      '2',
      '2'
    ];
    this.current = new Array(52);
  }

  shuffle() {
    for (let i = 0; i < 52; i += 1) {
      this.current[i] = this.cards[(Math.random() * 52) | 0];
    }
    console.group(this.current);
  }

  drawCard() {
    return this.current.pop();
  }

  seeDeck() {
    return this.current;
  }
}

class Game {
  constructor(players = []) {
    this.players = players;
    this.deck = new Deck();
    this.deck.shuffle();
    this.currentPlayers = this.players;
    this.roundOver = true;
  }

  addPlayer(name) {
    this.players.push(new Player(name));
  }

  dealCard(player) {
    player.hand.newCard(this.deck.drawCard());
    console.log(player.hand);
  }

  newRound(shuffle) {
    this.roundOver = false;
    if (shuffle) {
      this.deck.shuffle();
    }
    this.players.forEach(player => {
      player.hand = new Hand();
    });
    for (let k = 0; k < 2; k += 1) {
      this.players.forEach(player => {
        this.dealCard(player);
      });
    }
    const decision = prompt('Draw card?');
    while (this.currentPlayers.length > 0 && this.roundOver !== true) {
      this.currentPlayers.forEach(e => {
        prompt.get('input', (err, result) => {
          if (result.input === 'yes') {
            e.hand.dealCard();
          } else if (result.input === 'no') {
            e.leaveRound();
          }
        });
      });
    }
  }
}

const gameNight = new Game([new Player('Timmy'), new Player('George')]);
gameNight.newRound();
console.log(gameNight.players);
console.log(gameNight.deck.seeDeck());
console.log(gameNight.players);
