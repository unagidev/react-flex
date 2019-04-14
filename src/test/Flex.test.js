import React from 'react';
import { JSDOM } from 'jsdom';
import { mount } from 'enzyme';
import Flex from '../lib/Flex';

describe('<Flex /> Component', () => {
  let wrapper;

  beforeEach(() => {
    window.document = new JSDOM('');
    document.body.appendChild(document.createElement('div'));
  });

  afterEach(() => {
    wrapper.detach();
    window.document = new JSDOM('');
  });

  const expectStyle = (el, property, value) => {
    const style = getComputedStyle(el);
    setTimeout(() => {
      expect(style).toHaveProperty(property, value);
    }, 1);
  };

  it('Renders a flex element', () => {
    wrapper = mount(<Flex>test</Flex>, {
      attachTo: document.body.firstChild,
    });
    expect(wrapper.contains(<div />));
    expect(wrapper.hasClass('flex'));
  });

  describe('Properties', async () => {
    it('inline', () => {
      wrapper = mount(<Flex inline>test</Flex>, {
        attachTo: document.body.firstChild,
      });
      expectStyle(wrapper.getDOMNode(), 'display', 'inline-flex');
    });

    describe('direction', () => {
      it('static', () => {
        wrapper = mount(<Flex>test</Flex>, {
          attachTo: document.body.firstChild,
        });
        expectStyle(wrapper.getDOMNode(), 'display', 'flex');
        wrapper.setProps({ direction: 'column' });
        expect(wrapper.prop('direction')).toBe('column');
        expectStyle(wrapper.getDOMNode(), 'flex-direction', 'column');
      });

      it('responsive', () => {
        wrapper = mount(
          <Flex direction={{ xs: 'row', es: 'column' }}>test</Flex>,
          { attachTo: document.body.firstChild },
        );
        expect(wrapper.prop('direction')).toHaveProperty('xs', 'row');
        expect(wrapper.prop('direction')).toHaveProperty('es', 'column');
        expectStyle(wrapper.getDOMNode(), 'flex-direction', 'row');
        window.innerWidth = '400px';
        expectStyle(wrapper.getDOMNode(), 'flex-direction', 'column');
      });
    });

    describe('justifyContent', () => {
      it('static', () => {
        wrapper = mount(<Flex justifyContent="start">test</Flex>, {
          attachTo: document.body.firstChild,
        });
        expectStyle(wrapper.getDOMNode(), 'justify-content', 'flex-start');
        wrapper.setProps({ justifyContent: 'center' });
        expect(wrapper.prop('justifyContent')).toBe('center');
        expectStyle(wrapper.getDOMNode(), 'justify-content', 'center');
        wrapper.setProps({ justifyContent: 'end' });
        expect(wrapper.prop('justifyContent')).toBe('end');
        expectStyle(wrapper.getDOMNode(), 'justify-content', 'flex-end');
      });

      it('responsive', () => {
        wrapper = mount(
          <Flex justifyContent={{ xs: 'start', es: 'center' }}>test</Flex>,
          { attachTo: document.body.firstChild },
        );
        expect(wrapper.prop('justifyContent')).toHaveProperty('xs', 'start');
        expect(wrapper.prop('justifyContent')).toHaveProperty('es', 'center');
        expectStyle(wrapper.getDOMNode(), 'justify-content', 'start');
        window.innerWidth = '400px';
        expectStyle(wrapper.getDOMNode(), 'justify-content', 'center');
      });
    });
  });
});
