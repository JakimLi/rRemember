import * as actions from '../../domain/actions';
import reducer from '../../domain/reducers';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    "remembering": []
  });
});
