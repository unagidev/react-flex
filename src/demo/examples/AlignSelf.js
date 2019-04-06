import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';
import Code from '../components/Code';

const CrossAxis = () => {
  return (
    <Flex direction="column" grow={1}>
      <Flex>
        <Flex
          className="container"
          spacing={{ xs: 10, es: 5 }}
          alignItems="center"
          basis={50}
          grow={1}
          style={{ minHeight: 80 }}
        >
          <Flex spacing={[5, 10]} grow={1}>
            <div className="item">Item 1</div>
          </Flex>
          <Flex alignSelf="start" spacing={[5, 10]} grow={1}>
            <div className="item primary">Item 2</div>
          </Flex>
          <Flex alignSelf="center" spacing={[5, 10]} grow={1}>
            <div className="item primary">Item 3</div>
          </Flex>
          <Flex alignSelf="end" spacing={[5, 10]} grow={1}>
            <div className="item primary">Item 4</div>
          </Flex>
          <Flex spacing={[5, 10]} grow={1}>
            <div className="item">Item 5</div>
          </Flex>
        </Flex>
        <Flex basis={50} spacing={{ xs: 10, es: 5 }}>
          <Code>
            {`<Flex alignItems="center">
                <Flex>Item 1</Flex>
                <Flex alignSelf="start">Item 2</Flex>
                <Flex alignSelf="center">Item 3</Flex>
                <Flex alignSelf="end">Item 4</Flex>
                <Flex>Item 5</Flex>
              </Flex>`}
          </Code>
        </Flex>
      </Flex>
    </Flex>
  );
};

const AlignSelf = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-align-self">Flex Align Self</h2>
      </Flex>
      <Flex className="section" spacing={[0, [10, 5]]}>
        <CrossAxis/>
      </Flex>
    </Fragment>
  );
};

export default AlignSelf;
