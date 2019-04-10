import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const Example = ({ direction }) => {
  return (
    <Flex direction="column">
      <Flex gap={{ xs: 20, sm: 10, es: 5 }} wrap>
        <Flex basis={50} grow={1} size={['auto', 200]}>
          <Flex
            className="container"
            alignItems={direction || 'start'}
            fill
            wrap
          >
            {[...Array(4)].map((u, i) => (
              <Flex key={i} spacing={[5, 10]}>
                <div className="item primary">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex basis={50} grow={1}>
          <Code>
            {`<Flex alignItems="${direction || 'start'}">
              ...
          </Flex>`}
          </Code>
        </Flex>
      </Flex>
    </Flex>
  );
};

const AlignItems = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-align-items">Flex Align Items</h2>
      </Flex>
      <Flex direction="column" className="section" spacing={[0, [10, 5]]}>
        <Example direction="start"/>
        <Example direction="center"/>
        <Example direction="end"/>
        <Example direction="baseline"/>
        <Example direction="stretch"/>
      </Flex>
    </Fragment>
  );
};

export default AlignItems;
