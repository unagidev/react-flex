import React from 'react';
import Flex from '../lib';
import './App.scss';
import Direction from './examples/Direction';
import Align from './examples/Align';
import Wrap from './examples/Wrap';
import Grow from './examples/Grow';
import Shrink from './examples/Shrink';
import Basis from './examples/Basis';
import { ReactComponent as Logo } from './logo.svg';

const App = () => {
  const containerSpacing = { xs: [0, 40], es: [0, 10] };
  return (
    <div className="app">
      <Flex className="nav" spacing={[0, [30, 20]]} align="space-between">
        <Flex align={['start', 'center']}>
          <Logo className="logo" />
          <div className="title">React Flex</div>
        </Flex>
        <Flex>Github</Flex>
      </Flex>
      <Flex
        style={{ overflow: 'auto', display: 'block' }}
        direction="column"
        fill
      >
        <Flex className="main" direction="column">
          <Direction />
          <Align />
          <Wrap />
          <Grow />
          <Shrink />
          <Basis />
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
