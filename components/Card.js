import React, { Component } from 'react';
import images from '../images/images';
import {
  StyleSheet,
  Image,
  TouchableHighlight
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
    const {card, status, handlers, checked} = this.props;
    const onTouch = () => {
      const {checkCard} = handlers;
      checkCard(card);
    }
    const isChecked = (card) => {
      return checked.find((item) => item == card) != undefined;
    }
    return (
      <TouchableHighlight onPress={onTouch}>
      <Image
        style={styles.card} key={card.color + card.point}
        source={status === 'checking' && !isChecked(card) ? images['back'] : images[card.color + card.point]} />
      </TouchableHighlight>
    );
  }
}
