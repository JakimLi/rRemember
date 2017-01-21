import { generate, shuffle } from './Poker';
import { types } from './actions';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({ "remembering": [] });

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GENERATE:
      return {
        remembering: generate()
      };
    case types.SHUFFLE:
      return {
        remembering: shuffle(state.remembering)
      };
    default:
      return state;
  }
}
