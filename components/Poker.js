import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../domain/actions';
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

class Poker extends Component {
  render() {
    return (
      <ScrollView>
      {this.props.cards.map((card) => {
        return <Image key={card.color + card.point} source={images[card.color + card.point]} />;
      })}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.remembering
  }
};

export default PokerContainer = connect(mapStateToProps, actions)(Poker);
