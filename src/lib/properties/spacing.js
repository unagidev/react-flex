// @flow
import Property from './base';

class Spacing extends Property {
  static getValue(config: number | string) {
    return `${typeof config === 'number' ? `${config}px` : config}`;
  }

  static getProperty(config: string[]) {
    if (config.length === 2 || config.length === 4) {
      return `${config.map(value => Spacing.getValue(value)).join(' ')}`;
    } else {
      return null;
    }
  }

  getValues(
    config: string | number | Object[]
  ): [string | null, string | null] {
    let margin = null;
    let padding = null;
    if (typeof config === 'undefined') {
      return [margin, padding];
    }
    if (typeof config === 'number') {
      margin = `${config}px`;
      return [margin, padding];
    }
    if (typeof config === 'string') {
      margin = config;
      return [margin, padding];
    }
    const [outerSpace, innerSpace] = config;
    padding = Array.isArray(innerSpace)
      ? Spacing.getProperty(innerSpace)
      : Spacing.getValue(innerSpace);
    margin = Array.isArray(outerSpace)
      ? Spacing.getProperty(outerSpace)
      : Spacing.getValue(outerSpace);
    return [margin, padding];
  }
}

export const spacing = new Spacing('spacing', ['margin', 'padding']);
