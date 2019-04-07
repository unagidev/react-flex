// @flow
import Property from './base';

export type AlignSelf =
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

class AlignSelfProp extends Property {
  getDeclaration(config: AlignSelf): [string | null] {
    let alignSelf = null;
    if (typeof config === 'undefined') {
      return [alignSelf];
    }

    alignSelf =
      config === 'start' || config === 'end' ? `flex-${config}` : config;
    return [alignSelf];
  }
}

export const alignSelf = new AlignSelfProp('alignSelf', ['align-self']);
