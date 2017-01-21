import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../domain/actions';
import ShowCards from './ShowCards';
import ControlPanel from './ControlPanel';
import {View} from 'react-native';

const handlers = (dispatch) => {
  const shuffle = () => {
    dispatch(actions.shuffle());
  };

  const check = () => {
    dispatch(actions.check());
  };

  return { shuffle, check };
}

class Poker extends Component {
  render() {
    return (
      <View>
        <ShowCards
          status={this.props.status}
          cards={this.props.cards} />
        <ControlPanel
          status={this.props.status}
          handlers={handlers(this.props.dispatch)} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.remembering,
    status: state.status
  }
};

export default PokerContainer = connect(mapStateToProps)(Poker);
