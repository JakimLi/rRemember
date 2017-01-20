import React, { Component } from 'react';
import images from '../images/images';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    margin: 10,
  }
});

export default ({cards}) => {
  return (
      <ScrollView style={styles.scrollView}>
      {cards.map((card) => {
        return <Image key={card.color + card.point} source={images[card.color + card.point]} />;
      })}
      </ScrollView>
  )
}
