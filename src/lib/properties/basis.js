// @flow
import Property from './base';

class Basis extends Property {
  getDeclaration(config: string | number): [string | null] {
    let basis = null;
    if (typeof config === 'undefined') {
      return [basis];
    }
    if (typeof config === 'number') {
      basis = `${config}%`;
      return [basis];
    }
    if (typeof config === 'string') {
      basis = config;
      return [basis];
    }

    return [basis];
  }
}

export const basis = new Basis('basis', ['flex-basis']);
