import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../domain/actions';
import ShowCards from './ShowCards';
import ControlPanel from './ControlPanel';
import {View} from 'react-native';

const handlers = (dispatch) => {
  const onStart = () => {
    dispatch(actions.shuffle());
  };
  return { onStart };
}

class Poker extends Component {
  render() {
    return (
      <View>
        <ShowCards cards={this.props.cards} />
        <ControlPanel handlers={handlers(this.props.dispatch)} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.remembering
  }
};

export default PokerContainer = connect(mapStateToProps)(Poker);
