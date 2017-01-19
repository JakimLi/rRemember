import {generate, shuffle} from './Poker';

const initialState = { "remembering": [] };

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GENERATE':
      return {
        remembering: generate()
      };
    case 'SHUFFLE':
      return {
        remembering: shuffle(state.remembering)
      };
    default:
      return state;
  }
}
