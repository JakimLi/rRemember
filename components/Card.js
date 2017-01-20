import React, { Component } from 'react';
import images from '../images/images';
import {
  StyleSheet,
  Image
} from 'react-native';

export default ({card}) => {
  return (
    <Image key={card.color + card.point} source={images[card.color + card.point]} />
  );
}
