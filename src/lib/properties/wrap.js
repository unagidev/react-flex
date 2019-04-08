// @flow
import { isObj } from '../helpers';
import Property from './base';
import type { JustifyContent } from './justifyContent';

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

class Wrap extends Property {
  getDeclaration(config: JustifyContent): [string | null] {
    if (typeof config === 'undefined') {
      return [wrap];
    }

    return config ? ['wrap'] : [null];
  }
}

export const wrap = new Wrap('wrap', ['flex-wrap']);
