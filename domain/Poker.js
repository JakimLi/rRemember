const colors = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const points = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const jokers = ['BJ', 'LJ'];

const generate = () => {
  var cards = new Array();

  for(const color of colors) {
    for (const point of points) {
      cards.push({'color': color, 'point': point});
    }
  }

  for(const joker of jokers) {
    cards.push({'color': joker, 'point': '0'});
  }

  return cards;
};

const shuffle = (cards) => {
  return cards.concat().sort(() => 0.5 - Math.random());
}

export {generate, shuffle};
