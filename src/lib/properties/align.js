// @flow
import { isObj } from '../helpers';
import Property from './base';

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

export const getAlignDeclaration = (
  config: string | [MainAxisAlign, CrossAxisAlign]
): [string | null, string | null] => {
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

  [mainAxis, crossAxis] = config;
  mainAxis =
    mainAxis === 'start' || mainAxis === 'end' ? `flex-${mainAxis}` : mainAxis;
  crossAxis =
    crossAxis === 'start' || crossAxis === 'end'
      ? `flex-${crossAxis}`
      : crossAxis;

  return [mainAxis, crossAxis];
};

export const getAlign = (align: string | Object) => {
  if (isObj(align)) {
    return align;
  }

  return { xs: align || null };
};

class Align extends Property {
  getDeclaration(
    config: string | [MainAxisAlign, CrossAxisAlign]
  ): [string | null, string | null] {
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

    [mainAxis, crossAxis] = config;
    mainAxis =
      mainAxis === 'start' || mainAxis === 'end' ? `flex-${mainAxis}` : mainAxis;
    crossAxis =
      crossAxis === 'start' || crossAxis === 'end'
        ? `flex-${crossAxis}`
        : crossAxis;

    return [mainAxis, crossAxis];
  }
}

export const align = new Align('align', ['justify-content', 'align-items']);
