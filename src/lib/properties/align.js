// @flow
import { isObj } from '../helpers';

type MainAxisAlign =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type CrossAxisAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export const getAlignDeclaration = (
  config: string | [MainAxisAlign, CrossAxisAlign]
): [string, string] => {
  let mainAxis = 'flex-start';
  let crossAxis = 'stretch';
  if (typeof config === 'undefined') {
    return [mainAxis, crossAxis];
  }
  if (typeof config === 'string') {
    mainAxis = config;
    return [mainAxis, crossAxis];
  }

  [mainAxis, crossAxis] = config;
  mainAxis =
    mainAxis === 'start' || mainAxis === 'end' ? `flex-${mainAxis}` : mainAxis;
  crossAxis =
    crossAxis === 'start' || crossAxis === 'end'
      ? `flex-${crossAxis}`
      : crossAxis;

  return [mainAxis, crossAxis];
};

export const getAlign = (align: string | Object) => {
  if (isObj(align)) {
    return align;
  }

  return { xs: align || 'flex-start' };
};
