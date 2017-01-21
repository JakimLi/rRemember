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

export default ({status, cards}) => {
  return (
    <ScrollView style={styles.scrollView}
    horizontal={true}
    pageEnbaled={true}>

    {cards.map((card) => {
      return <Card key={card.color + card.point} card={card} status={status}/>;
    })}
    </ScrollView>
  )
}
