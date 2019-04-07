// @flow
import Property from './base';

export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

class AlignItemsProp extends Property {
  getDeclaration(config: AlignItems): [string | null, null] {
    let alignItems = null;
    if (typeof config === 'undefined') {
      return [alignItems];
    }

    alignItems =
      config === 'start' || config === 'end' ? `flex-${config}` : config;
    return [alignItems];
  }
}

export const alignItems = new AlignItemsProp('alignItems', [
  'align-items',
]);
