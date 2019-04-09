// @flow
import Property from './base';
import { isObj } from '../helpers';

export const getDisplay = (inline: boolean = false, hide: boolean = false) => {
  return hide ? 'display:none;' : `display:${inline ? 'inline-flex' : 'flex'};`;
};

class Show extends Property {
  getValues(getProps): string[] | null {
    const { inline, propertyValue } = getProps();
    console.log(inline, propertyValue);
    return null;
  }
}

export const show = new Show('show', ['display']);
