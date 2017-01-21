import * as actions from '../../domain/actions';
import reducer from '../../domain/reducers';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({});
});


it('should handle GENERATE action', () => {

  const initialState = reducer(undefined, {});

  const generatedState = reducer(initialState, actions.generate())

  expect(generatedState.remembering).toHaveLength(54);
  expect(generatedState.status).toEqual('ready');
});


it('should handle SHUFFLE action', () => {

  const initialState = reducer(undefined, {});

  const generatedState = reducer(initialState, actions.generate())

  expect(generatedState.remembering).toHaveLength(54);

  const shuffledState = reducer(generatedState, actions.shuffle());

  expect(shuffledState.remembering).toHaveLength(54);
  expect(shuffledState.status).toEqual('remembering');
  expect(JSON.stringify(shuffledState.remembering)).not.toEqual(JSON.stringify(generatedState.remembering));
});

it('should handle CHECK action', () => {

  const initialState = reducer(undefined, {});

  const generatedState = reducer(initialState, actions.generate())

  expect(generatedState.remembering).toHaveLength(54);

  const shuffledState = reducer(generatedState, actions.shuffle());

  expect(shuffledState.remembering).toHaveLength(54);
  expect(shuffledState.status).toEqual('remembering');
  expect(JSON.stringify(shuffledState.remembering)).not.toEqual(JSON.stringify(generatedState.remembering));

  const checkedState = reducer(shuffledState, actions.check());

  expect(checkedState.status).toEqual('checking');
  expect(checkedState.checked).toHaveLength(0);
});


it('should handle CHECK ON CARD action', () => {

  const initialState = reducer(undefined, {});

  const generatedState = reducer(initialState, actions.generate())

  expect(generatedState.remembering).toHaveLength(54);

  const shuffledState = reducer(generatedState, actions.shuffle());

  expect(shuffledState.remembering).toHaveLength(54);
  expect(shuffledState.status).toEqual('remembering');
  expect(JSON.stringify(shuffledState.remembering)).not.toEqual(JSON.stringify(generatedState.remembering));

  const checkedState = reducer(shuffledState, actions.check());

  expect(checkedState.status).toEqual('checking');

  const cardCheckedState = reducer(checkedState, actions.checkOnCard({'color': 'Spades', 'point': 'A'}));

  expect(cardCheckedState.checked).toContainEqual({'color': 'Spades', 'point': 'A'});
});
