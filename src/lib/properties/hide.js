// @flow
import Property from './base';
import { isObj } from '../helpers';

export const getDisplay = (inline: boolean = false, hide: boolean = false) => {
  return hide ? 'display:none;' : `display:${inline ? 'inline-flex' : 'flex'};`;
};

class Hide extends Property {
  format(property: string | Object) {
    if (isObj(property)) {
      return property;
    }

    if (typeof property === 'undefined') {
      return { xs: false };
    }

    return { xs: property };
  }

  getValues(config: Object): string[] {
    const { inline, propertyValue } = config;
    const display = !propertyValue
      ? `${inline ? 'inline-flex' : 'flex'};`
      : 'none;';
    return [display];
  }
}

export const hide = new Hide('hide', ['display']);
