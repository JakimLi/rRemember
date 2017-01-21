import { generate, shuffle } from './Poker';
import { types } from './actions';

export default (state = {}, action) => {
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
