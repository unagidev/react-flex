// @flow
export const isObj = value => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

export const isArr = value => {
  return Array.isArray(value);
};
