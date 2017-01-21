import { generate, shuffle } from './Poker';
import { types } from './actions';

const initialState = { "remembering": [] };

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GENERATE:
      return {
        remembering: generate(),
        status: 'ready'
      };
    case types.SHUFFLE:
      return {
        remembering: shuffle(state.remembering),
        status: 'remembering'
      };
    case types.CHECK:
      return {
        remembering: state.remembering,
        status: 'checking'
      };
    default:
      return state;
  }
}
