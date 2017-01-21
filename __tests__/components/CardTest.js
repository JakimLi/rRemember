import 'react-native';
import React from 'react';
import Card from '../../components/Card';

import renderer from 'react-test-renderer';

it('it renders correctly', () => {
  const card = {
    color: 'Spades',
    point: 'A'
  }

  const cardTree = renderer.create(
    <Card card={card}/>
  );

  expect(cardTree).toMatchSnapshot();
});
