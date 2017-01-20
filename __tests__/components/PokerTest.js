import 'react-native';
import React from 'react';
import PokerContainer from '../../components/Poker.js';
import { createStore } from 'redux';
import reducer from '../../domain/reducers';
import { generate } from '../../domain/actions';
import { Provider } from 'react-redux';

import renderer from 'react-test-renderer';

let store = createStore(reducer);
store.dispatch(generate());

it('it renders correctly', () => {
  const poker = renderer.create(
    <Provider store={store}>
      <PokerContainer />
    </Provider>
  )

  expect(poker).toMatchSnapshot();
});
