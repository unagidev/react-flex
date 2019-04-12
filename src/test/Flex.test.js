import React from 'react';
import { shallow } from 'enzyme';
import Flex from '../lib/Flex';

test('Flex', () => {
  // Render a checkbox with label in the document
  const wrap = shallow(<Flex />);

  expect(wrap.hasClass('flex'));
});
