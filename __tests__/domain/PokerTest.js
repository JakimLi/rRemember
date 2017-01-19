import {generate, shuffle} from '../../domain/Poker';

const colors = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const points = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
const jokers = ['BJ', 'LJ'];

it('can generate 1 deck of cards without two same cards', () => {
  const cards = generate();

  expect(cards).toHaveLength(54);

  var count = 0;
  for(const color of colors) {
    for (const point of points) {
      expect(cards[count++]).toEqual({'color': color, 'point': point});
    }
  }

  for(const joker of jokers) {
    expect(cards[count++]).toEqual({'color': joker, 'point': '0'});
  }
});

it('can shuffle give cards', () => {
  const cards = generate();
  const shuffledCards = shuffle(cards);

  expect(shuffledCards).toHaveLength(54);
  expect(JSON.stringify(shuffledCards)).not.toEqual(JSON.stringify(cards));
});
