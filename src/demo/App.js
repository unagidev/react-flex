import React from 'react';
import Flex from '../lib';
import './App.scss';
import Direction from './examples/Direction';
import Align from './examples/Align';
import Wrap from './examples/Wrap';
import Grow from './examples/Grow';
import Shrink from './examples/Shrink';
import Basis from './examples/Basis';

const App = () => {
  const containerSpacing = { xs: [0, 40], es: [0, 10] };
  return (
    <div className="app">
      <Flex direction="column" spacing={containerSpacing}>
        <Direction />
        <Align />
        <Wrap />
        <Grow />
        <Shrink />
        <Basis />
      </Flex>
    </div>
  );
};

export default App;
