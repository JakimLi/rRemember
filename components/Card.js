import React, { Component } from 'react';
import images from '../images/images';
import {
  StyleSheet,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 350,
    width: 250,
    margin: 30
  }
});

export default class Card extends Component {
  render() {
    const {card, status} = this.props;
    return (
      <Image
      style={styles.card} key={card.color + card.point}
      source={status === 'checking' ? images['back'] : images[card.color + card.point]} />
    );
  }
}
