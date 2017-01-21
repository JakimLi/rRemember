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
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  onTouch = () => {
    this.state.checked = true;
    this.forceUpdate();
  }

  render() {
    const {card, status} = this.props;
    const {checked} = this.state;
    return (
      <TouchableHighlight onPress={this.onTouch}>
      <Image
      style={styles.card} key={card.color + card.point}
      source={status === 'checking' && !checked ? images['back'] : images[card.color + card.point]} />
      </TouchableHighlight>
    );
  }
}
