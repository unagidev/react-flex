import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';
import Code from '../components/Code';

const DirectionRow = () => {
  return (
    <Flex direction="column">
      <Flex className="container" spacing={{ xs: 10, es: 5 }} gap={10}>
        <Flex basis={10}>
          <div className="item full-width">
            <span>Item 1</span>
            <br />
            <code>basis=10%</code>
          </div>
        </Flex>
        <Flex basis={20}>
          <div className="item success full-width">
            <span>Item 2</span>
            <br />
            <code>basis=20%</code>
          </div>
        </Flex>
        <Flex basis={30}>
          <div className="item primary full-width" basis={30}>
            <span>Item 3</span>
            <br />
            <code>basis=30%</code>
          </div>
        </Flex>
        <Flex basis={40}>
          <div className="item danger full-width" basis={10}>
            <span>Item 4</span>
            <br />
            <code>basis=40%</code>
          </div>
        </Flex>
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex>
              <Flex basis={10}>Item1</Flex>
              <Flex basis={20}>Item2</Flex>
              <Flex basis={30}>Item3</Flex>
              <Flex basis={40}>Item4</Flex>
          </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const Basis = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-basis">Flex Basis</h2>
      </Flex>
      <Flex direction="column" className="section" spacing={[0, [10, 5]]}>
        <DirectionRow />
      </Flex>
    </Fragment>
  );
};

export default Basis;
