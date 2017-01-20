import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../domain/actions';
import ShowCards from './ShowCards';

class Poker extends Component {
  render() {
    return (
      <ShowCards cards={this.props.cards} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.remembering
  }
};

export default PokerContainer = connect(mapStateToProps, actions)(Poker);
