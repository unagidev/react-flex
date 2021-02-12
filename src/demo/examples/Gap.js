import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const DirectionRow = () => {
  return (
    <Flex direction="column" basis={50} grow={1}>
      <Flex className="container" grow={1} spacing={{ xs:10, es: 5 }}>
        <Flex gap={10} fill wrap>
          {[...Array(12)].map((u, i) => (
            <Flex key={i} basis={25}>
              <div className="item primary full-width">Item {i + 1}</div>
            </Flex>
          ))}

          <Flex basis={50}>
            <div className="item primary full-width">Item with some length</div>
          </Flex>
          <Flex basis={50}>
            <div className="item primary full-width">Item with a very big length. Notice the height of both elements matches</div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const DirectionColumn = () => {
  return (
    <Flex direction="column" basis={50} grow={1}>
      <Flex spacing={{ xs: 10, es: 5 }} grow={1}>
        <Code>
          {`<Flex gap={10} wrap>
              <Flex basis={25}>Item 1</Flex>
              <Flex basis={25}>Item 2</Flex>
              <Flex basis={25}>Item 3</Flex>
              ...
              <Flex basis={25}>Item 12</Flex>
            </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const Gap = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-shrink">Gap</h2>
      </Flex>
      <Flex direction="column" className="section" spacing={[0, [10, 5]]}>
        <Flex wrap>
          <DirectionRow/>
          <DirectionColumn/>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Gap;
