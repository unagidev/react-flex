import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const Example = ({ direction }) => {
  return (
    <Flex direction="column">
      <Flex>
        <Flex
          className="container"
          basis={50}
          spacing={{ xs: 10, es: 5 }}
          justifyContent={direction || 'start'}
          grow={1}
        >
          {[...Array(4)].map((u, i) => (
            <Flex key={i} spacing={[5, 10]}>
              <div className="item primary">Item {i + 1}</div>
            </Flex>
          ))}
        </Flex>
        <Flex spacing={{ xs: 10, es: 5 }} basis={50}>
          <Code>
            {`<Flex justifyContent="${direction || 'start'}">
              ...
          </Flex>`}
          </Code>
        </Flex>
      </Flex>
    </Flex>
  );
};

const JustifyContent = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-justify-content">Flex Justify Content</h2>
      </Flex>
      <Flex direction="column" className="section" spacing={[0, [10, 5]]}>
        <Example direction="start"/>
        <Example direction="center"/>
        <Example direction="end"/>
        <Example direction="space-between"/>
        <Example direction="space-around"/>
        <Example direction="space-evenly"/>
      </Flex>
    </Fragment>
  );
};

export default JustifyContent;
