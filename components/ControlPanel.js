import React, { Component } from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';

export default ({onStart}) => {
  return (
    <Button title="Start" onPress={onStart}/>
  );
}
