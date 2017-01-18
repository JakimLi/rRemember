import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

export default class rPoker extends Component {
  render() {
    return <Text style={styles.text}> Start </Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('rPoker', () => rPoker);
