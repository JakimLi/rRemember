import {generate} from './Poker';

const initialState = { "remembering": [] };

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GENERATE':
      return {
        remembering: generate()
      };
    default:
      return state;
  }
}
