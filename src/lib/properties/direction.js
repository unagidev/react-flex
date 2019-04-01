// @flow
import { isObj } from '../helpers';

export const getDirection = (direction: string | Object) => {
  if (isObj(direction)) {
    return direction;
  }

  return { xs: direction || 'row' };
};
