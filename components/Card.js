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

export default ({card}) => {
  return (
    <Image style={styles.card} key={card.color + card.point} source={images[card.color + card.point]} />
  );
}
