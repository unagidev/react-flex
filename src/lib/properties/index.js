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

import { direction } from './direction';
import { align } from './align';
import { justifyContent } from './justifyContent';
import { alignItems } from './alignItems';
import { alignSelf } from './alignSelf';
import { alignContent } from './alignContent';
import { fill } from './fill';
import { wrap } from './wrap';
import { grow } from './grow';
import { shrink } from './shrink';
import { basis } from './basis';
import { gap } from './gap';
import { layoutGap } from './layoutGap';
import { spacing } from './spacing';

export default [
  direction,
  align,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  fill,
  wrap,
  grow,
  shrink,
  basis,
  gap,
  layoutGap,
  spacing,
];
