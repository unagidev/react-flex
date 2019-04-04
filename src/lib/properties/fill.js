// @flow
import { isObj } from '../helpers';

export const getFillDeclaration = (config: boolean): [string | null] => {
  let fill = null;
  if (typeof config === 'undefined') {
    return [fill];
  }

  return config ? ['1 1 100%'] : [null];
};

export const getFill = (fill: boolean | Object) => {
  if (isObj(fill)) {
    return fill;
  }

  return { xs: fill };
};
