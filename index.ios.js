import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import reducer from './domain/reducers';
import { generate } from './domain/actions';
import rPoker from './components/rPoker';

let store = createStore(reducer);
store.dispatch(generate());

export default rPoker;
AppRegistry.registerComponent('rPoker', () => rPoker);
