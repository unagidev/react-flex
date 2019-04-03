import React from 'react';
import Flex from '../lib';
import './App.scss';
import Direction from './examples/Direction';
import Align from './examples/Align';

const App = () => {
  const containerSpacing = { xs: [0, 40], es: [0, 10] };
  return (
    <div className="app">
      <Flex direction="column" spacing={containerSpacing}>
        <Direction />
        <Align />
      </Flex>
    </div>
  );
};

export default App;
