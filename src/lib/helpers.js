// @flow
export const isObj = (value: any) => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

export const isArr = (value: any) => {
  return Array.isArray(value);
};
