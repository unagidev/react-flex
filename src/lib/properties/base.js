// @flow
import { isObj } from '../helpers';

export default class Property {
  name: string;
  cssProperties: [];

  constructor(name, cssProperties) {
    this.name = name;
    this.cssProperties = cssProperties;
  }

  format(property: string | Object): Object {
    if (isObj(property)) {
      return property;
    }

    return { xs: property || null };
  }

  getValues(config: any = null): string[] | null {
    return [config];
  }
}
