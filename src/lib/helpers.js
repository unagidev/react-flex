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
