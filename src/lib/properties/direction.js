// @flow
import { isObj } from '../helpers';
import Property from './base';
import type { JustifyContent } from './justifyContent';

export const getDirection = (direction: string | Object) => {
  if (isObj(direction)) {
    return direction;
  }

  return { xs: direction || 'row' };
};

class Direction extends Property {
  format(property: string | Object) {
    if (isObj(property)) {
      return property;
    }

    return { xs: property || 'row' };
  }
}

export const direction = new Direction('direction', ['flex-direction']);
