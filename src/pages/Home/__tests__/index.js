import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../Home';

describe('src/pages/Home', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
