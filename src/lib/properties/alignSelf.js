// @flow
import { isObj } from '../helpers';

export type AlignSelf =
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

export const getAlignSelfDeclaration = (config: AlignSelf): [string] => {
  let alignSelf = 'auto';
  if (typeof config === 'undefined') {
    return [alignSelf];
  }

  alignSelf =
    config === 'start' || config === 'end' ? `flex-${config}` : config;
  return [alignSelf];
};

export const getAlignSelf = (align: AlignSelf | Object) => {
  if (isObj(align)) {
    return align;
  }

  return { xs: align || 'auto' };
};
