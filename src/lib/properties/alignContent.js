// @flow
import { isObj } from '../helpers';
import Property from './base';
import type { JustifyContent } from './justifyContent';

export type AlignContent =
  | 'auto'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
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

class AlignContentProp extends Property {
  getValues(config: AlignContent): [string | null, null] {
    let alignContent = null;
    if (typeof config === 'undefined') {
      return [alignContent];
    }

    alignContent =
      config === 'start' || config === 'end' ? `flex-${config}` : config;
    return [alignContent];
  }
}

export const alignContent = new AlignContentProp('alignContent', [
  'align-content',
]);
