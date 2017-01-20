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
    paddingTop: 30,
    backgroundColor: '#1a2229'
  }
});

export default ({cards}) => {
  return (
      <ScrollView
      style={styles.scrollView}
      horizontal={true}
      pageEnbaled={true}>

      {cards.map((card) => {
        return <Image key={card.color + card.point} source={images[card.color + card.point]} />;
      })}
      </ScrollView>
  )
}
