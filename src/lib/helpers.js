// @flow
import nanoid from 'nanoid';
import deepEqual from 'deep-equal';

export const isObj = (value: any) => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

export const isArr = (value: any) => {
  return Array.isArray(value);
};

export const isEqual = (a, b, opts) => {
  return deepEqual(a, b, opts);
};

export const getId = () => {
  return nanoid(6);
};
