import 'react-native';
import React from 'react';
import ShowCards from '../../components/ShowCards';

import renderer from 'react-test-renderer';

it('it renders correctly', () => {

  cards = [{
    color: 'Spades',
    point: 'A'
  }];

  const handlers = {
    checkCard: () => {}
  }

  const showCardsTree = renderer.create(
    <ShowCards cards={cards} checked={[]} handlers={handlers}/>
  );

  expect(showCardsTree).toMatchSnapshot();
});
