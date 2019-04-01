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
| Name          | Type                                                                     | Default | Description                                             |
|---------------|--------------------------------------------------------------------------|:-------:|---------------------------------------------------------|
| **children**  | <code>ReactChildren</code>                                               |         | **required**. FlexView content |
| **align**     | <code>string &#124; [mainAxis, crossAxis] &#124; Breackpoint{}</code>    |         | *optional*. Align content vertically |
| **spacing**   | <code>string &#124; [innerSpace, outerSpace] &#124; Breackpoint{}</code> |         | *optional*. Align content horizontally |
| **grow**      | <code>Boolean &#124; Breackpoint{}</code>                                |         | *optional*. Property (for parent primary axis) |
| **shrink**    | <code>Boolean &#124; Breackpoint{}</code>                                |         | *optional*. Flex-shrink property |
| **basis**     | <code>Boolean &#124; Breackpoint{}</code>                                |         | *optional*. Flex-basis property |
| **wrap**      | <code>Boolean &#124; Breackpoint{}</code>                                |         | *optional*. Wrap content |
| **className** | <code>String</code>                                                      |         | *optional*. Additional `className` for wrapper element |
| **style**     | <code>Object</code>                                                      |         | *optional*. Inline-style overrides for wrapper element |

## License

MIT © [dbartumeu](https://github.com/dbartumeu)
