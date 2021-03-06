// @flow
import Property from './base';
import { isArr } from '../helpers';

export type MainAxisAlign =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type CrossAxisAlign =
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

class Align extends Property {
  getValues(config: mixed): any[] {
    let mainAxis = null;
    let crossAxis = null;
    if (typeof config === 'undefined') {
      return [mainAxis, crossAxis];
    }
    if (typeof config === 'string') {
      if (config.split(' ').length > 1) {
        [mainAxis, crossAxis] = config.split(' ');
        mainAxis =
          mainAxis === 'start' || mainAxis === 'end'
            ? `flex-${mainAxis}`
            : mainAxis;
        crossAxis =
          crossAxis === 'start' || crossAxis === 'end'
            ? `flex-${crossAxis}`
            : crossAxis;
      } else {
        mainAxis =
          config === 'start' || config === 'end' ? `flex-${config}` : config;
        crossAxis =
          config === 'start' || config === 'end' ? `flex-${config}` : config;
      }

      return [mainAxis, crossAxis];
    }
    if (isArr(config)) {
      //$FlowFixMe
      [mainAxis, crossAxis] = config;
      mainAxis =
        mainAxis === 'start' || mainAxis === 'end'
          ? `flex-${mainAxis}`
          : mainAxis;
      crossAxis =
        crossAxis === 'start' || crossAxis === 'end'
          ? `flex-${crossAxis}`
          : crossAxis;
    }

    return [mainAxis, crossAxis];
  }
}

export const align = new Align('align', ['justify-content', 'align-items']);
