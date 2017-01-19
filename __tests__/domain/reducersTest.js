import * as actions from '../../domain/actions';
import reducer from '../../domain/reducers';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    "remembering": []
  });
});


it('should handle GENERATE action', () => {

  const initialState = reducer(undefined, {});

  const generatedSteate = reducer(initialState, actions.generate());

  expect(generatedSteate.remembering).toHaveLength(54);
});
