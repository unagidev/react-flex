// @flow
import { isObj } from '../helpers';
import Property from './base';

class Direction extends Property {
  format(property: string | Object) {
    if (isObj(property)) {
      return property;
    }

    return { xs: property || 'row' };
  }
}

export const direction = new Direction('direction', ['flex-direction']);
