import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default class rPoker extends Component {
  render() {
    return (
      <ScrollView>
        <Image source={require('../images/ah.png')}/>
      </ScrollView>
    );
  }
}
