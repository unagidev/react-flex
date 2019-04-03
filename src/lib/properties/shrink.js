// @flow
import { isObj } from '../helpers';

export const getShrink = (shrink: number | Object) => {
  if (isObj(shrink)) {
    return shrink;
  }

  return { xs: shrink };
};
