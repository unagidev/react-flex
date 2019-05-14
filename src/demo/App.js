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
import AlignSelf from './examples/AlignSelf';
import JustifyContent from './examples/JustifyContent';
import AlignItems from './examples/AlignItems';
import AlignContent from './examples/AlignContent';
import Gap from './examples/Gap';

const App = () => {
  return (
    <div className="app">
      <Flex className="nav" spacing={[0, [30, 20]]} align="space-between">
        <Flex align={['start', 'center']}>
          <Logo className="logo" />
          <div className="title">React Flex</div>
        </Flex>
        <Flex align={['end', 'center']} show={{ xs: false, gtEs: true }}>
          <Flex spacing={[0, 10]} className="link">Static</Flex>
          <Flex spacing={[0, 10]} className="link">Responsive</Flex>
          <Flex spacing={[0, 10]}>
            <a href="https://github.com/unagidev/react-flex">Github</a>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        style={{ overflow: 'auto', display: 'block' }}
        direction="column"
        fill
      >
        <Flex className="main" direction="column">
          <Direction />
          <JustifyContent />
          <AlignItems />
          <AlignSelf />
          <Wrap />
          <AlignContent />
          <Basis />
          <Grow />
          <Shrink />

          <Align />
          <Gap />
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
