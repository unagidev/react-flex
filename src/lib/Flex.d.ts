import * as React from 'react';

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-evenly';

export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type Width = string | number;

export type Height = string | number;

export interface FlexProps {
  children: React.ElementType<any>;
  className?: string;
  inline?: boolean | { [key: string]: boolean };
  direction?: string | { [key: string]: string };
  justifyContent?: JustifyContent | { [key: string]: JustifyContent };
  alignItems?: AlignItems | { [key: string]: AlignItems };
  alignSelf?: 'auto' | AlignItems | { [key: string]: 'auto' | AlignItems };
  alignContent?: AlignItems | { [key: string]: AlignItems };
  wrap?: boolean | { [key: string]: boolean };
  grow?: number | { [key: string]: number };
  shrink?: number | { [key: string]: number };
  basis?: string | number | { [key: string]: string | number };
  spacing?: string | { [key: string]: string };
  gap?: number | { [key: string]: number };
  layoutGap?: number;
  fill?: boolean | { [key: string]: boolean };
  align?:
    | (JustifyContent | AlignItems)
    | [JustifyContent, AlignItems]
    | {
        [key: string]:
          | (JustifyContent | AlignItems)
          | [JustifyContent, AlignItems];
      };
  size?:
    | string
    | number
    | [Width, Height]
    | { [key: string]: string | number | [Width, Height] };
  minSize?:
    | string
    | number
    | [Width, Height]
    | { [key: string]: string | number | [Width, Height] };
  maxSize?:
    | string
    | number
    | [Width, Height]
    | { [key: string]: string | number | [Width, Height] };
  show?: boolean | { [key: string]: boolean };
  hide?: boolean | { [key: string]: boolean };
}

declare var Flex: React.ComponentType<FlexProps>;

export default Flex;
