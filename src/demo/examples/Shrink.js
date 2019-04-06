import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const DirectionRow = () => {
  return (
    <Flex direction="column" basis={50}>
      <Flex className="container" spacing={{ xs: 10, es: 5 }} grow={1}>
        <Flex spacing={[5, 10]} grow={1} shrink={1} basis="20em">
          <div className="item primary full-width">
            <span>Item 1</span>
            <br />
            <code>grow={1}</code>
            <br />
            <code>shrink={1}</code>
            <br />
            <code>basis="20em"</code>
          </div>
        </Flex>
        <Flex spacing={[5, 10]} grow={2} shrink={2} basis="20em">
          <div className="item success full-width">
            <span>Item 2</span>
            <br />
            <code>grow={2}</code>
            <br />
            <code>shrink={2}</code>
            <br />
            <code>basis="20em"</code>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

const DirectionColumn = () => {
  return (
    <Flex direction="column" basis={50}>
      <Flex spacing={{ xs: 10, es: 5 }} grow={1}>
        <Code>
          {`<Flex>
              <Flex grow={1} shrink={1} basis="20em">Item 1</Flex>
              <Flex grow={2} shrink={2} basis="20em">Item 2</Flex>
            </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const Shrink = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-shrink">Flex Shrink</h2>
      </Flex>
      <Flex direction="column" className="section" spacing={[0, [10, 5]]}>
        <Flex>
          <DirectionRow />
          <DirectionColumn />
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Shrink;
