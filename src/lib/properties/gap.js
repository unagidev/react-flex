// @flow
import { isObj } from '../helpers';

export const getGapDeclaration = (config: number): [string] => {
  let value = config / 2 + 'px';
  let property = ` 0 ${value} ${value} 0`;

  return [property];
};

export const getGap = (gap: number | Object) => {
  if (isObj(gap)) {
    return gap;
  }

  return { xs: gap || 0 };
};
