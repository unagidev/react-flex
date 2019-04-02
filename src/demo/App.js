import React from 'react';
import Flex from '../lib';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Flex direction="column" spacing={{ xs: 40, es: 10 }}>
        <Flex
          spacing={{ xs: 10, es: 5 }}
          align={['start', 'start']}
          style={{ height: 60 }}
        >
          <Flex item spacing={[5, 10]}>
            Item1
          </Flex>
          <Flex item spacing={[5, 10]} align="end">
            Item2
          </Flex>
          <Flex item spacing={[5, 10]}>
            Item3
          </Flex>
        </Flex>
        <Flex spacing={{ xs: 10, es: 5 }}>Row1</Flex>
        <Flex spacing={{ xs: 10, es: 5 }}>Row2</Flex>
        <Flex spacing={{ xs: 10, es: 5 }}>Row3</Flex>
      </Flex>
    </div>
  );
};

export default App;
