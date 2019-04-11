// @flow
import Property from './base';
import { isObj } from '../helpers';

export const getDisplay = (inline: boolean = false, hide: boolean = false) => {
  return `display:${inline ? 'inline-flex' : 'flex'};`;
};


class Display extends Property {
  format(property: string | Object) {
    if (isObj(property)) {
      return property;
    }

    return { xs: property || 'row' };
  }
}

export const display = new Display('direction', ['flex-direction']);
