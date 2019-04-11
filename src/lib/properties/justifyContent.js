// @flow
import Property from './base';

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-between'
  | 'space-evenly';

class JustifyContentProp extends Property {
  getValues(config: JustifyContent): [string | null, null] {
    let justifyContent = null;
    if (typeof config === 'undefined') {
      return [justifyContent];
    }

    justifyContent =
      config === 'start' || config === 'end' ? `flex-${config}` : config;
    return [justifyContent];
  }
}

export const justifyContent = new JustifyContentProp('justifyContent', [
  'justify-content',
]);
