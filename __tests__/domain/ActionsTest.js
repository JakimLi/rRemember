import * as actions from '../../domain/actions';

it('should create GENERATE action', () => {
  expect(actions.generate()).toEqual({ type: 'GENERATE' });
});

it('should create SHUFFLE action', () => {
  expect(actions.shuffle()).toEqual({ type: 'SHUFFLE' });
});
