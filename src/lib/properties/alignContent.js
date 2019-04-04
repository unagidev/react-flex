// @flow
import { isObj } from '../helpers';

export type AlignContent =
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

export const getAlignContentDeclaration = (config: AlignContent): [string] => {
  let alignContent = 'auto';
  if (typeof config === 'undefined') {
    return [alignContent];
  }

  alignContent =
    config === 'start' || config === 'end' ? `flex-${config}` : config;
  return [alignContent];
};

export const getAlignContent = (align: AlignContent | Object) => {
  if (isObj(align)) {
    return align;
  }

  return { xs: align || 'auto' };
};
