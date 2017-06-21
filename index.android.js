import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import reducer from './domain/reducers';
import { generate } from './domain/actions';
import PokerContainer from './components/Poker';
import { Provider } from 'react-redux';

let store = createStore(reducer);
store.dispatch(generate());

export default class PokerApp extends Component {
  render() {
    return (
      <Provider store={ store }>
        <PokerContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rPoker', () => PokerApp);
