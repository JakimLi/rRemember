import React, { Component } from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';

export default ({handlers}) => {

  const onStart = () => {
    const {shuffle} = handlers;
    shuffle();
  }

  return (
    <Button title="Start" onPress={onStart}/>
  );
}
