// @flow
import { isObj } from '../helpers';

export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export const getAlignItemsDeclaration = (
  config: AlignItems
): [string | null] => {
  let alignItems = null;
  if (typeof config === 'undefined') {
    return [alignItems];
  }

  alignItems =
    config === 'start' || config === 'end' ? `flex-${config}` : config;
  return [alignItems];
};

export const getAlignItems = (align: AlignItems | Object) => {
  if (isObj(align)) {
    return align;
  }

  return { xs: align || null };
};
