import {generate, shuffle} from './Poker';
import {types} from './actions';

const initialState = { "remembering": [] };

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
