// @flow
import { isObj } from '../helpers';

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export const getJustifyContentDeclaration = (
  config: JustifyContent
): [string | null] => {
  let justifyContent = null;
  if (typeof config === 'undefined') {
    return [justifyContent];
  }

  justifyContent =
    config === 'start' || config === 'end' ? `flex-${config}` : config;
  return [justifyContent];
};

export const getJustifyContent = (align: JustifyContent | Object) => {
  if (isObj(align)) {
    return align;
  }

  return { xs: align || null };
};
