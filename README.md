# react-flex

> Responsove Flex component built for React

[![NPM](https://img.shields.io/npm/v/react-flex.svg)](https://www.npmjs.com/package/react-flex) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

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
        <Flex container align='center'>
            <Flex item>I'm vertically centered!</Flex>
        </Flex>
    )
  }
}
```

```jsx
// flex row
<Flex container>
    ...
</Flex>

// flex column
<Flex container direction="column">
    ...
</Flex>
```

## Props

### children
**Type:** <code>ReactChildren</code>

**Required**. Flex content.

### container
**Type:** <code>boolean</code>

**Optional**. **Default:** false. If true, the component will have the flex container behavior. You should be wrapping items with a container.

### item
**Type:** <code>boolean</code>

**Optional**. **Default:** false. If true, the component will have the flex item behavior. You should be wrapping items with a container.

### direction
**Type:** <code>enum('row' | 'column') | Breakpoints{key, property}</code>

**Optional**. **Default:** 'row'. Sets the orientation.

### align
**Type:** <code>mainAxis | [mainAxis, crossAxis] | Breakpoints{key, property}</code>

**[mainAxis] Type:** <code>'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'</code>

**[crossAxis] Type:** <code>'start' | 'center' | 'end' | 'baseline' | 'stretch' </code>

**Optional**. Sets the distribution of space around content items of a flex container.

### spacing
**Type:** <code>outerSpace | [outerSpace, innerSpace] | Breakpoints{key:breakpoint, property}</code>

**[outerSpace, innerSpace] Type:** <code>number | string | [verticalSpace, horizontalSpace] | [top, right, bottom, left]</code>

**[verticalSpace, horizontalSpace] Type:** <code>number | string</code>

**[top, right, bottom, left] Type:** <code>number | string</code>

**Optional**. Sets the outerSpace (margin), innerSpace (padding) of the flex element. On number values spacing unit is px.
on string values a valid margin, padding unit.

### size
**Type:** <code>height | [height, width] | Breakpoints{key:breakpoint, property}</code>

**[height, width] Type:** <code>number | string</code>

**Optional**. Sets the size of the flex element. If number values size unit is px.
on string values a valid height, width unit.

### wrap
**Type:** <code>height | [height, width] | Breakpoints{key:breakpoint, property}</code>

**[height, width] Type:** <code>number | string</code>

**Optional**. Sets the size of the flex element. If number values size unit is px.
on string values a valid height, width unit.

### basis
**Type:** <code>height | [height, width] | Breakpoints{key:breakpoint, property}</code>

**[height, width] Type:** <code>number | string</code>

**Optional**. Sets the size of the flex element. If number values size unit is px.
on string values a valid height, width unit.

### grow
**Type:** <code>height | [height, width] | Breakpoints{key:breakpoint, property}</code>

**[height, width] Type:** <code>number | string</code>

**Optional**. Sets the size of the flex element. If number values size unit is px.
on string values a valid height, width unit.

### shrink
**Type:** <code>height | [height, width] | Breakpoints{key:breakpoint, property}</code>

**[height, width] Type:** <code>number | string</code>

**Optional**. Sets the size of the flex element. If number values size unit is px.
on string values a valid height, width unit.

### Props
|Name           |Type                                                                                                                                             |Description|
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| **children**  | <code>ReactChildren</code>                                                                                                                      | **required**. FlexView content |
| **item**      | <code>Boolean</code>                                                                                                                            | *optional*. Align content vertically |
| **direction** | <code>enum('row' &#124; 'column')</code> &#124;<br> <code>{[key: Breakpoint]: enum('row' &#124; 'column')}</code>                               | *optional*. Align content horizontally |
| **align**     | <code>mainAxis &#124; [mainAxis, crossAxis]</code> &#124;<br> <code>{[key: Breakpoint]: mainAxis &#124; [mainAxis, crossAxis]}</code>           | *optional*. Margin-left property ("auto" to align self right) |
| **alignSelf** | <code>alignSelf</code> &#124;<br> <code>{[key: Breakpoint]: alignSelf}</code>                                                                   | *optional*. Margin-left property ("auto" to align self right) |
| **spacing**   | <code>outerSpace &#124; [outerSpace, innerSpace]</code> &#124;<br> <code>{[key: Breakpoint]: outerSpace &#124; [outerSpace, innerSpace]}</code> | *optional*. Margin-top property ("auto" to align self bottom) |
| **gap**       | <code>number &#124; string</code> &#124;<br> <code>{[key: Breakpoint]: number &#124; string}</code>                                             | *optional*. Margin-top property ("auto" to align self bottom) |
| **size**      | <code>height &#124; [height, width] </code> &#124;<br> <code>{[key: Breakpoint]: height &#124; [height, width]}</code>                          | *optional*. Margin-right property ("auto" to align self left) |
| **grow**      | <code>Boolean &#124; Number </code> &#124;<br> <code>{[key: Breakpoint]: Boolean &#124; Number}</code>                                          | *optional*. Property (for parent primary axis) |
| **shrink**    | <code>Boolean &#124; Number </code> &#124;<br> <code>{[key: Breakpoint]: Boolean &#124; Number}</code>                                          | *optional*. Flex-shrink property |
| **basis**     | <code>Boolean &#124; Number </code> &#124;<br> <code>{[key: Breakpoint]: Boolean &#124; Number}</code>                                          | *optional*. Flex-basis property |
| **wrap**      | <code>Boolean </code> &#124;<br> <code>{[key: Breakpoint]: Boolean}</code>                                                                      | *optional*. Wrap content |
| **className** | <code>String</code>                                                                                                                             | *optional*. Additional `className` for wrapper element |
| **style**     | <code>Object</code>                                                                                                                             | *optional*. Inline-style overrides for wrapper element |

#### Custom Types
|Name                 |Type                                                                                                                         |Description|
|---------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------|
| **Breakpoint**      | <code>enum('xs' &#124; 'es' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl')</code>                                         |           |   
| **mainAxis**        | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly'</code>   |           |      
| **crossAxis**       | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly'</code>   |           |      
| **alignSelf**       | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly'</code>   |           |      
| **outerSpace**      | <code>string &#124; number &#124; [verticalSpace, horizontalSpace] &#124; [top, right, bottom, left]</code>                 |           |      
| **innerSpace**      | <code>string &#124; number &#124; [verticalSpace, horizontalSpace] &#124; [top, right, bottom, left]</code>                 |           |      
| **verticalSpace**   | <code>string &#124; number &#124; [verticalSpace, horizontalSpace] &#124; [top, right, bottom, left]</code>                 |           |      
| **horizontalSpace** | <code>string &#124; number &#124; [verticalSpace, horizontalSpace] &#124; [top, right, bottom, left]</code>                 |           |      
| **top**             | <code>string &#124; number</code>                                                                                           |           |      
| **right**           | <code>string &#124; number</code>                                                                                           |           |      
| **bottom**          | <code>string &#124; number</code>                                                                                           |           |      
| **left**            | <code>string &#124; number</code>                                                                                           |           |      
| **height**          | <code>string &#124; number</code>                                                                                           |           |      
| **width**           | <code>string &#124; number</code>                                                                                           |           |      

                                         
## Responsive



## License

MIT © [dbartumeu](https://github.com/dbartumeu)
