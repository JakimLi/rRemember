import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text
} from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 100,
    backgroundColor: 'white'
  }
});

export default ({cards}) => {
  return (
    <ScrollView style={styles.scrollView}
    horizontal={true}
    pageEnbaled={true}>

    {cards.map((card) => {
      return <Card key={card.color + card.point} card={card} />;
    })}
    </ScrollView>
  )
}
