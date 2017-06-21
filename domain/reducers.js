import { generate, shuffle } from './Poker';
import { types } from './actions';

export default (state = {}, action) => {
  switch(action.type) {
    case types.GENERATE:
      return {
        remembering: generate(),
        status: 'ready',
        checked: [],
        cardType: 'normal'
      };
    case types.SHUFFLE:
      return {
        remembering: shuffle(state.remembering),
        status: 'remembering',
        checked: [],
        cardType: state.cardType
      };
    case types.CHECK:
      return {
        remembering: state.remembering,
        status: 'checking',
        checked: [],
        cardType: state.cardType
      };
    case types.CHECK_ON_CARD:
      return {
        remembering: state.remembering,
        status: state.status,
        checked: state.checked.concat([action.card]),
        cardType: state.cardType
      };
    case types.TOGGLE_CARD_TYPE:
      return {
        remembering: state.remembering,
        status: state.status,
        checked: state.checked,
        cardType: state.cardType === 'normal' ? 'pretty': 'normal'
      }
    default:
      return state;
  }
}
