import React from 'react';
import Flex from '../lib';
// import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Flex direction="column" spacing={{ xs: 40, es: 10 }}>
        <Flex className="item" spacing={{ xs: 20, es: 5 }}>
          Row1
        </Flex>
        <Flex spacing={{ xs: 20, es: 5 }}>Row1</Flex>
        <Flex spacing={{ xs: 20, es: 5 }}>Row1</Flex>
      </Flex>
    </div>
  );
};

export default App;
