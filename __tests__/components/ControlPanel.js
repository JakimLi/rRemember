import 'react-native';
import React from 'react';
import ControlPanel from '../../components/ControlPanel';

import renderer from 'react-test-renderer';

it('it renders correctly', () => {
  const controlPanelTree = renderer.create(
    <ControlPanel />
  );

  expect(controlPanelTree).toMatchSnapshot();
});
