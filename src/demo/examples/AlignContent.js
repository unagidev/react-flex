import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const Example = ({ align }) => {
  return (
    <Flex direction="column">
      <Flex>
        <Flex
          className="container"
          basis={50}
          spacing={{ xs: 10, es: 5 }}
          alignContent={align || 'start'}
          alignItems="start"
          grow={1}
          wrap
        >
          {[...Array(9)].map((u, i) => (
            <Flex key={i} spacing={[0, 0]} basis={33.333}>
              <Flex spacing={[0, 5]} fill>
                <div className="item primary full-width">Item {i + 1}</div>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex spacing={{ xs: 10, es: 5 }} basis={50}>
          <Code>
            {`<Flex wrap
                   alignItems="start"
                   alignContent="${align || 'start'}">
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              ...
              <div>Item 9</div>
            </Flex>`}
          </Code>
        </Flex>
      </Flex>
    </Flex>
  );
};

const AlignContent = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-align-content">Flex Align Content</h2>
      </Flex>
      <Flex direction="column" className="section" spacing={[0, [10, 5]]}>
        <Example align="start"/>
        <Example align="center"/>
        <Example align="end"/>
        <Example align="space-between"/>
        <Example align="space-around"/>
        <Example align="stretch"/>
      </Flex>
    </Fragment>
  );
};

export default AlignContent;
