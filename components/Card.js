import React, { Component } from 'react';
import images from '../images/images';
import normal_images from '../images/normal/images';
import {
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 350,
    width: 250,
    margin: 30,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});

export default class Card extends Component {

  render() {
    const {card, status, handlers, cardType, checked} = this.props;
    const onTouch = () => {
      const {checkCard} = handlers;
      checkCard(card);
    }
    const isChecked = (card) => {
      return checked.find((item) => item == card) != undefined;
    }
    const getImage = (cardType, card) => {
      return cardType === 'normal' ? normal_images[card] : images[card]
    }
    return (
      <TouchableHighlight onPress={onTouch}>
      <Image
        style={styles.card} key={card.color + card.point}
        source={status === 'checking' && !isChecked(card) ? images['back'] : getImage(cardType, card.color + card.point)} />
      </TouchableHighlight>
    );
  }
}
