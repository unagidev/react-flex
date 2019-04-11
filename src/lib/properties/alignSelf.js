// @flow
import Property from './base';

class AlignSelfProp extends Property {
  getValues(config: mixed): string[] {
    let alignSelf = null;

    if (typeof config === 'string') {
      alignSelf =
        config === 'start' || config === 'end' ? `flex-${config}` : config;
      return [alignSelf];
    }

    return [];
  }
}

export const alignSelf = new AlignSelfProp('alignSelf', ['align-self']);
