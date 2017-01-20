import React, { Component } from 'react';
import images from '../images/images';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default ({cards}) => {
  return (
      <ScrollView>
      {cards.map((card) => {
        return <Image key={card.color + card.point} source={images[card.color + card.point]} />;
      })}
      </ScrollView>
  )
}
