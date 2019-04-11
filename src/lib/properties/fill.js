// @flow
import Property from './base';

class Fill extends Property {
  getValues(config: boolean): [string | null] {
    let fill = null;
    if (typeof config === 'undefined') {
      return [fill];
    }

    return config ? ['1 1 100%'] : [null];
  }
}

export const fill = new Fill('fill', ['flex']);
