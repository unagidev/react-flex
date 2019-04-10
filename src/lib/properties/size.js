// @flow
import Property from './base';

export type Width = string | number;
export type Height = string | number;

export class Size extends Property {
  getValues(config: mixed): any[] {
    let width = null;
    let height = null;
    if (typeof config === 'undefined') {
      return [width, height];
    }
    if (typeof config === 'number') {
      width = config + 'px';
      height = config + 'px';
      return [width, height];
    }
    if (typeof config === 'string') {
      if (config.split(' ').length > 1) {
        [width, height] = config.split(' ');
      } else {
        width = config;
        height = config;
      }

      return [width, height];
    }
    if (typeof config === Array) {
      //$FlowFixMe
      [width, height] = config;
      if (typeof width === 'number') {
        width = width + 'px';
      }
      if (typeof height === 'number') {
        height = height + 'px';
      }
    }

    return [width, height];
  }
}

export const size = new Size('size', ['width', 'height']);
