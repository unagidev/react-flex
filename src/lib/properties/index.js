// flex properties
export * from './display';
export * from './direction';
export * from './justifyContent';
export * from './alignItems';
export * from './alignSelf';
export * from './alignContent';
export * from './wrap';
export * from './grow';
export * from './shrink';
export * from './basis';

// Non flex properties
export * from './align';
export * from './spacing';
export * from './gap';
export * from './fill';

import { align } from './align';
import { justifyContent } from './justifyContent';
import { alignItems } from './alignItems';
import { alignSelf } from './alignSelf';
import { alignContent } from './alignContent';
import { direction } from './direction';

export default [direction, align, justifyContent, alignItems, alignSelf, alignContent];
