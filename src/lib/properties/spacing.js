// @flow
import { isObj } from '../helpers';

const getValue = (config: number | string) => {
  return `${typeof config === 'number' ? `${config}px` : config}`;
};

const getProperty = (config: string[]) => {
  if (config.length === 2 || config.length === 4) {
    return `${config.map(value => getValue(value)).join(' ')}`;
  } else {
    return null;
  }
};

export const getSpacingDeclaration = (
  config: string | number | Object[]
): [string, string] => {
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
    ? getProperty(innerSpace)
    : getValue(innerSpace);
  margin = Array.isArray(outerSpace)
    ? getProperty(outerSpace)
    : getValue(outerSpace);
  return [margin, padding];
};

export const getSpacing = (spacing: string | Object) => {
  if (isObj(spacing)) {
    return spacing;
  }

  return { xs: spacing || null };
};
