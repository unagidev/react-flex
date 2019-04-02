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

### Props
|Name              |Type                                                                                                                                             |Description                          |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| **children**     | `ReactChildren`                                                                                                                                 | **required**. Flex content.         |
| **item**         | `Boolean`                                                                                                                                       | **optional**. **Default:** `false`. If true, the component will have the flex item behavior. |
| **direction**    | <code>enum('row' &#124; 'column') &#124; {[key: Breakpoint]: enum('row' &#124; 'column')}</code>                               | **optional**. **Default:** `'row'`. Sets the flex container direction. If <code>item=true</code> this property has no effect. |
| **align**        | <code>mainAxis &#124; [mainAxis, crossAxis] &#124; {[key: Breakpoint]: mainAxis &#124; [mainAxis, crossAxis]}</code>           | **optional**. **Default:** `['start', 'stretch']`. Sets the distribution of space around items of a flex container. If `item=true` this property behave as alignSelf. |
| **alignContent** | <code>alignContent &#124; {[key: Breakpoint]: alignContent}</code>                                                             | **optional**. **Default:** `'stretch'`. Aligns a flex container's lines within when there is extra space in the cross-axis. If `item=true` this property has no effect. |
| **alignSelf**    | <code>alignSelf &#124; {[key: Breakpoint]: alignSelf}</code>                                                                   | **optional**. Allows the default alignment (or the one specified by align[crossAxis]) to be overridden. If <code>item=true</code> this property has no effect, use align instead. |
| **spacing**      | <code>outerSpace &#124; [outerSpace, innerSpace] &#124; {[key: Breakpoint]: outerSpace &#124; [outerSpace, innerSpace]}</code> | **optional**. Sets the inner (padding) and outer (margin) space of the wrapper element. |
| **gap**          | <code>number &#124; string &#124; {[key: Breakpoint]: number &#124; string}</code>                                             | **optional**. Sets the separation between flex items. |
| **size**         | <code>height &#124; [height, width] &#124; {[key: Breakpoint]: height &#124; [height, width]}</code>                           | **optional**. Sets the size (width, height) of the wrapper element  |
| **grow**         | <code>Boolean &#124; Number &#124; {[key: Breakpoint]: Boolean &#124; Number}</code>                                           | **optional**. Sets the ability for a flex item to grow if necessary. If all items have grow set to 1, the remaining space in the container will be distributed equally to all children. A value of 2 means the remaining space would take up twice as much space as the others. |
| **shrink**       | <code>Boolean &#124; Number &#124; {[key: Breakpoint]: Boolean &#124; Number}</code>                                           | **optional**. Sets the ability for a flex item to shrink if necessary. |
| **basis**        | <code>Boolean &#124; Number &#124; {[key: Breakpoint]: Boolean &#124; Number}</code>                                           | **optional**. Sets the default size of an element before the remaining space is distributed. If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its `grow` property. |
| **wrap**         | <code>Boolean &#124; {[key: Breakpoint]: Boolean}</code>                                                                       | **optional**. Allow the items of a flex container to wrap as needed. |
| **className**    | <code>String</code>                                                                                                                             | **optional**. Additional `className` for wrapper element |
| **style**        | <code>Object</code>                                                                                                                             | **optional**. Inline-style overrides for wrapper element |

#### Custom Types
|Name                 |Type                                                                                                                        |Description                                                             |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **Breakpoint**      | <code>enum('xs' &#124; 'es' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl')</code>                                        | **Default:** `'xs'`.                                                                       |
| **mainAxis**        | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly')</code> | **Default:** `'start'`. Defines the alignment along the main axis. Same behavior as`justify-content` css property. |
| **crossAxis**       | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'stretch' &#124; 'baseline')</code>                                 | **Default:** `'stretch'`. Defines the default behavior for how flex items are laid out along the cross axis on the current line. Same behavior as `align-items` css property. |
| **alignContent**    | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly')</code> | **Default:** `'stretch'`   |
| **alignSelf**       | <code>enum('start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'space-around' &#124; 'space-evenly')</code> | **Default:** `'stretch'`   |
| **outerSpace**      | <code>string &#124; number &#124; [verticalSpace, horizontalSpace] &#124; [top, right, bottom, left]</code>                | **Default:** `[0,0]`. If string a valid css margin string will be a   |
| **innerSpace**      | <code>string &#124; number &#124; [verticalSpace, horizontalSpace] &#124; [top, right, bottom, left]</code>                | **Default:** `'stretch'`   |
| **verticalSpace**   | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`   |   
| **horizontalSpace** | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`  |
| **right**           | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`   |  
| **bottom**          | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`    | 
| **left**            | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`  |    
| **height**          | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`   |  
| **width**           | <code>string &#124; number</code>                                                                                          | **Default:** `'stretch'`   |

                                         
## Responsive



## License

MIT © [dbartumeu](https://github.com/dbartumeu)
