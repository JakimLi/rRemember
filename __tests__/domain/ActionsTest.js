import * as actions from '../../domain/actions';

it('should create GENERATE action', () => {
  expect(actions.generate()).toEqual({ type: actions.types.GENERATE });
});

it('should create SHUFFLE action', () => {
  expect(actions.shuffle()).toEqual({ type: actions.types.SHUFFLE });
});
