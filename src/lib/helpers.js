// @flow
import nanoid from 'nanoid';

export const isObj = (value: any) => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

export const isArr = (value: any) => {
  return Array.isArray(value);
};

export const getId = () => {
  return nanoid(6);
};

const warn = (warning: string): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(warning); // eslint-disable-line no-console
  }
};
