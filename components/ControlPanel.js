import React, { Component } from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';

export default ({handlers}) => {
  const {onStart} = handlers;
  return (
    <Button title="Start" onPress={onStart}/>
  );
}
