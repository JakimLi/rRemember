import { generate, shuffle } from './Poker';
import { types } from './actions';

export default (state = {}, action) => {
  switch(action.type) {
    case types.GENERATE:
      return {
        remembering: generate(),
        status: 'ready',
        checked: []
      };
    case types.SHUFFLE:
      return {
        remembering: shuffle(state.remembering),
        status: 'remembering',
        checked: []
      };
    case types.CHECK:
      return {
        remembering: state.remembering,
        status: 'checking',
        checked: []
      };
    case types.CHECK_ON_CARD:
      return {
        remembering: state.remembering,
        status: state.status,
        checked: state.checked.concat([action.card])
      }
    default:
      return state;
  }
}
