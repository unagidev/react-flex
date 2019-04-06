// @flow
import { isObj } from '../helpers';

export const getContainerGapDeclaration = (config: number): [string] => {
  let property = `${config / 2}px solid transparent`;
  let property1 = `border-box`;

  return [property, property1];
};

export const getContainerGap = (gap: number | Object) => {
  if (isObj(gap)) {
    return gap;
  }

  return { xs: gap || 0 };
};
