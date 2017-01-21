import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../domain/actions';
import ShowCards from './ShowCards';
import ControlPanel from './ControlPanel';
import {View} from 'react-native';

class Poker extends Component {
  render() {
    return (
      <View>
        <ShowCards cards={this.props.cards} />
        <ControlPanel />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.remembering
  }
};

export default PokerContainer = connect(mapStateToProps, actions)(Poker);
