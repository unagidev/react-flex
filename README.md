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
        <Flex align='center'>
            <Flex item>I'm vertically centered!</Flex>
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

### Props

#### children
**Type:** <code>ReactChildren</code>

**Required**. Flex content.

#### container
**Type:** <code>boolean</code>

**Optional**. **Default:** false. If true, the component will have the flex container behavior. You should be wrapping items with a container.

#### item
**Type:** <code>boolean</code>

**Optional**. **Default:** false. If true, the component will have the flex item behavior. You should be wrapping items with a container.

#### direction
**Type:** <code>enum('row' | 'column') | Breakpoints{key:breakpoint, property: direction}</code>

**Optional**. **Default:** 'row'. Sets the orientation.

#### align
**Type:** <code>mainAxis | [mainAxis, crossAxis] | Breakpoints{key:breakpoint, property: mainAxis | [mainAxis, crossAxis]}</code>

**[mainAxis] Type:** <code>'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'</code>

**[crossAxis] Type:** <code>'start' | 'center' | 'end' | 'baseline' | 'stretch' </code>

**Optional**. Sets the distribution of space around content items of a flex container.

#### spacing
**Type:** <code>outerSpace | [outerSpace, innerSpace] | Breakpoints{key:breakpoint, property: outerSpace | [outerSpace, innerSpace]}</code>

**[outerSpace, innerSpace] Type:** <code>number | string | [verticalSpace, horizontalSpace] | [top, right, bottom, left]</code>

**[verticalSpace, horizontalSpace] Type:** <code>number | string</code>

**[top, right, bottom, left] Type:** <code>number | string</code>

**Optional**. Sets the outerSpace (margin), innerSpace (padding) of the flex element. On number values spacing unit is px.
on string values a valid margin, padding unit.

### Responsive
#### Breakpoints



## License

MIT © [dbartumeu](https://github.com/dbartumeu)
