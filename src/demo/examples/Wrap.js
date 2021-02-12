import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';
import Code from '../components/Code';

const DirectionRow = () => {
  return (
    <Flex direction="column" basis={50} grow={1}>
      <Flex spacing={[5, 10]}>
        <h4>Direction Row</h4>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        alignItems="start"
        alignContent="start"
        grow={1}
        wrap
      >
        {[...Array(15)].map((u, i) => (
          <Flex key={i} spacing={5}>
            <div className="item primary">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex alignItems="start" wrap>
              ...
          </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const DirectionColumn = () => {
  return (
    <Flex direction="column" basis={50} grow={1}>
      <Flex spacing={[5, 10]}>
        <h4>Direction Column</h4>
      </Flex>
      <Flex
        className="container"
        direction="column"
        spacing={{ xs: 10, es: 5 }}
        align="start"
        alignContent="start"
        wrap
        style={{ height: 120 }}
      >
        {[...Array(15)].map((u, i) => (
          <Flex key={i} spacing={5}>
            <div className="item primary">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex direction='column' align="start" wrap>
              ...
          </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const Wrap = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-wrap">Flex Wrap</h2>
      </Flex>
      <Flex className="section" spacing={[0, [10, 5]]} wrap>
        <DirectionRow/>
        <DirectionColumn/>
      </Flex>
    </Fragment>
  );
};

export default Wrap;
