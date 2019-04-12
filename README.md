# react-flex

> Responsive Flex component built for React

[![NPM](https://img.shields.io/npm/v/react-flex.svg)](https://www.npmjs.com/package/react-flex) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`react-flex` is a Responsive Flex component built for React.

**https://unagidev.github.io/react-flex/demo/**

## Installation

```bash
npm install --save @unagidev/react-flex
```
or 
```bash
yarn add @unagidev/react-flex
```

## Usage

```jsx
import React, { Component } from 'react'

import Flex from '@unagidev/react-flex'

class Example extends Component {
  render () {
    return (
        <Flex align='center'>
            <Flex item>I'm vertically and horizontally centered!</Flex>
        </Flex>
    )
  }
}
```

```jsx
// flex row
<Flex>
    ...
</Flex>

// flex column
<Flex direction="column">
    ...
</Flex>
```


### Flex Props

|Name                |Type                                |Default      |Description                 |
|--------------------|------------------------------------|-------------|----------------------------|
| **children**       | `ReactChildren`                    |             |**required**. Flex content. |
| **inline**         | <code>Boolean</code>               | `'flex'`    |**optional**. Sets the flex container direction. If <code>item=true</code> this property has no effect. |
| **direction**      | <code>'row' &#124; 'column'</code> | `'row'`     |**optional**. Sets the flex container direction.|
| **justifyContent** | <code>JustifyContent</code>        | `'start'`   |**optional**. Defines the alignment along the main axis. |
| **alignItems**     | <code>AlignItems</code>            | `'stretch'` |**optional**. Defines the alignment along the cross axis. |
| **alignSelf**      | <code>AlignItems</code>            | `'auto'`    |**optional**. Allows the default alignment (or the one specified by `alignItems`) to be overridden. |
| **alignContent**   | <code>AlignItems</code>            | `'stretch'` |**optional**. Aligns a flex container's lines within when there is extra space in the cross-axis. |
| **wrap**           | <code>Boolean</code>               | `false`     |**optional**. Allow the items of a flex container to wrap as needed. |
| **grow**           | <code>Number</code>                | `0`         |**optional**. Sets the ability for a flex item to grow if necessary. |
| **shrink**         | <code>Number</code>                | `0`         |**optional**. Sets the ability for a flex item to shrink if necessary. |
| **basis**          | <code>String &#124; Number</code>  | `'auto'`    |**optional**. Sets the default size of an element before the remaining space is distributed. |


### Non Flex Props

|Name              |Type                                                                                |Description                          |
|------------------|----------------------------------------------------------------------------------- |-------------------------------------|
| **gap**          | <code>number</code>                                                                | **optional**. Sets margin gaps on children within a flex container. |
| **layoutGap**    | <code>number</code>                                                                | **optional**. Used internally to inform children of a flex container that a gap property is applied to their parent. |
| **fill**         | <code>Boolean</code>                                                               | **optional**. Fill the available space. Is a shortcut of `grow=1` `srink=1` `basis=100%` |
| **align**        | <code>union(JustifyContent, AlignItems) &#124; [justifyContent, alignItems]</code> | **optional**. Sets the distribution of space around items of a flex container. Is a shortcut to use both `justifyContent` and `alignItems` in the same property. |
| **size**         | <code>union(Height, Width) &#124; [Height, Width]</code>                           | **optional**. Sets the size (width, height) of the wrapper element  |
| **minSize**      | <code>union(Height, Width) &#124; [Height, Width]</code>                           | **optional**. Sets the minimum size (width, height) of the wrapper element  |
| **maxSize**      | <code>union(Height, Width) &#124; [Height, Width]</code>                           | **optional**. Sets the maximum size (width, height) of the wrapper element  |
| **spacing**      | <code>union(OuterSpace, InnerSpace) &#124; [OuterSpace, InnerSpace]</code>         | **optional**. Sets the inner (padding) and outer (margin) space of the wrapper element. |
| **show**         | <code>Boolean</code>                                                               | **optional**. Default: `true`. Sets the visibility for wrapper element |
| **hide**         | <code>Boolean</code>                                                               | **optional**. Default: `null`. Sets the visibility for wrapper element |
| **className**    | <code>String</code>                                                                | **optional**. Additional `className` for wrapper element |
| **style**        | <code>Object</code>                                                                | **optional**. Inline-style overrides for wrapper element |


#### Custom Types

|Name                 |Type                                                                                                                        |Description                                                             |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **JustifyContent**  | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly')</code> | Defines the alignment along the main axis.|
| **AlignItems**      | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'stretch' &#124; 'baseline')</code>                                 | Defines the default behavior for how flex items are laid out along the cross axis on the current line. |
| **OuterSpace**      | <code>string &#124; number &#124; [VerticalSpace, HorizontalSpace] &#124; [Top, Right, Bottom, Left]</code>                | Sets the outer space. Same behavior as `margin` css property.|
| **InnerSpace**      | <code>string &#124; number &#124; [VerticalSpace, HorizontalSpace] &#124; [Top, Right, Bottom, Left]</code>                | Sets the inner space. Same behavior as `padding` css property.|
| **VerticalSpace**   | <code>string &#124; number</code>                                                                                          | Sets the vertical space `margin-top`, `margin-bottom` if the property is `OuterSpace` or  `padding-top`, `padding-bottom` otherwise. |   
| **HorizontalSpace** | <code>string &#124; number</code>                                                                                          | Sets the horizontal space `margin-left`, `margin-right` if the property is `OuterSpace` or  `padding-left`, `padding-right` otherwise.  |
| **Top**             | <code>string &#124; number</code>                                                                                          | Sets the top space `margin-top` if the property is `OuterSpace` or `padding-top` if is `InnerSpace` |  
| **Right**           | <code>string &#124; number</code>                                                                                          | Sets the top space `margin-right` if the property is `OuterSpace` or `padding-right` if is `InnerSpace`   |  
| **Bottom**          | <code>string &#124; number</code>                                                                                          | Sets the top space `margin-bottom` if the property is `OuterSpace` or `padding-bottom` if is `InnerSpace`    | 
| **Left**            | <code>string &#124; number</code>                                                                                          | Sets the top space `margin-left` if the property is `OuterSpace` or `padding-left` if is `InnerSpace`  |    
| **Height**          | <code>string &#124; number</code>                                                                                          | Sets the `height` for wrapper element |  
| **Width**           | <code>string &#124; number</code>                                                                                          | Sets the `width` for wrapper element |

                                         
## Responsive
Every property accepts a breakpoint object in this format: `{ [key: Breakpoint]: property }` where `Breakpoint` is one 
of the following:

#### Breakpoints

|key       |Screen size               |Css Definition                                                    |
|----------|--------------------------|------------------------------------------------------------------|
| `'xs'`   | Default                  | `@media screen and (min-width : 0)`                              |                                                               |
| `'es'`   | Extra Small              | `@media screen and (max-width : 575px)`                          |                                                           |
| `'gtEs'` | Greater than Extra Small | `@media screen and (min-width : 576px)`                          |                                                               |
| `'sm'`   | Small                    | `@media screen and (min-width : 576px) and (max-width : 767px)`  |                                                               |
| `'gtSm'` | Greater than Small       | `@media screen and (min-width : 768px)`                          |                                                               |
| `'md'`   | Medium                   | `@media screen and (min-width : 768px) and (max-width : 991px)`  |                                                               |
| `'gtMd'` | Greater than Medium      | `@media screen and (min-width : 992px)`                          |                                                               |
| `'lg'`   | Large                    | `@media screen and (min-width : 992px) and (max-width : 1199px)` |                                                               |
| `'xl'`   | Extra Large              | `@media screen and (min-width : 1200px)`                         |                                                               |

#### Example:

```jsx
<Flex direction={{xs:'row', sm:'column'}}>
    // Flex items will be displayed in column on small screens and row otherwise
</Flex>
```

## License

MIT
