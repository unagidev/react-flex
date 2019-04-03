// @flow
import { isObj } from '../helpers';

export const getBasisDeclaration = (
  config: string | number | Object[]
): [string] => {
  let basis = null;
  if (typeof config === 'undefined') {
    return [basis];
  }
  if (typeof config === 'number') {
    basis = `${config}%`;
    return [basis];
  }
  if (typeof config === 'string') {
    basis = config;
    return [basis];
  }
};

export const getBasis = (basis: string | number | Object) => {
  if (isObj(basis)) {
    return basis;
  }

  return { xs: basis || null };
};
