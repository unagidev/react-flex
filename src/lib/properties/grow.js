// @flow
import { isObj } from '../helpers';

export const getGrow = (grow: number | Object) => {
  if (isObj(grow)) {
    return grow;
  }

  return { xs: grow };
};
