// @flow
import { isObj } from '../helpers';

export const getGapDeclaration = (config: number): [string, string] => {
  let property = `solid ${config/2}px transparent`;
  let property1 = `border-box`;

  return [property, property1];
};

export const getGap = (gap: number | Object) => {
  if (isObj(gap)) {
    return gap;
  }

  return { xs: gap || 0 };
};
