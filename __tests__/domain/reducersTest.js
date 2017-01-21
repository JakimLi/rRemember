import * as actions from '../../domain/actions';
import reducer from '../../domain/reducers';
import Immutable from 'immutable';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(Immutable.fromJS({
    "remembering": []
  }));
});


it('should handle GENERATE action', () => {

  const initialState = reducer(undefined, {});

  const generatedState = reducer(initialState, actions.generate())

  expect(generatedState.remembering).toHaveLength(54);
});


it('should handle SHUFFLE action', () => {

  const initialState = reducer(undefined, {});

  const generatedState = reducer(initialState, actions.generate())

  expect(generatedState.remembering).toHaveLength(54);

  const shuffledState = reducer(generatedState, actions.shuffle());

  expect(shuffledState.remembering).toHaveLength(54);
  expect(JSON.stringify(shuffledState.remembering)).not.toEqual(JSON.stringify(generatedState.remembering));
});
