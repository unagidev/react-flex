// @flow
import { isObj } from '../helpers';

export const getWrapDeclaration = (config: boolean): [string] => {
  let wrap = 'nowrap';
  if (typeof config === 'undefined') {
    return [wrap];
  }

  return wrap ? ['wrap'] : ['nowrap'];
};

export const getWrap = (wrap: boolean | Object) => {
  if (isObj(wrap)) {
    return wrap;
  }

  return { xs: wrap };
};
