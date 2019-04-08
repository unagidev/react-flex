// @flow
import Property from './base';

class LayoutGap extends Property {
  getDeclaration(config: number): [string | null, string | null] {
    if (config) {
      let property = `solid ${config / 2}px transparent`;
      let property1 = `border-box`;

      return [property, property1];
    }

    return [null, null];
  }
}

export const layoutGap = new LayoutGap('layoutGap', ['border', 'box-sizing']);
