import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const DirectionRow = () => {
  return (
    <Flex direction="column" basis={50}>
      <Flex spacing={[5, 10]}>
        <h4>Direction Row</h4>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align="start"
        grow={1}
      >
        <Flex spacing={[5, 10]}>
          <div className="item">Item 1</div>
        </Flex>
        <Flex spacing={[5, 10]} grow={1}>
          <div className="item success full-width">Item 2 <code>grow={1}</code></div>
        </Flex>
        <Flex spacing={[5, 10]}>
          <div className="item">Item 3</div>
        </Flex>
        <Flex spacing={[5, 10]}>
          <div className="item">Item 4</div>
        </Flex>
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align="start">
              <Flex>Item1</Flex>
              <Flex grow={1}>Item2</Flex>
              <Flex>Item3</Flex>
              <Flex>Item4</Flex>
          </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const DirectionColumn = () => {
  return (
    <Flex direction="column" basis={50}>
      <Flex spacing={[5, 10]}>
        <h4>Direction Column</h4>
      </Flex>
      <Flex
        className="container"
        direction="column"
        spacing={{ xs: 10, es: 5 }}
        align={['start', 'stretch']}
        style={{ height: 280 }}
      >
        <Flex spacing={[5, 10]}>
          <div className="item full-width">Item1</div>
        </Flex>
        <Flex spacing={[5, 10]} grow={1}>
          <div className="item success full-width">Item2 <code>grow={1}</code></div>
        </Flex>
        <Flex spacing={[5, 10]}>
          <div className="item full-width">Item3</div>
        </Flex>
        <Flex spacing={[5, 10]}>
          <div className="item full-width">Item4</div>
        </Flex>
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }} >
        <Code>
          {`<Flex direction='column' align={['start', 'stretch']}>
              <Flex>Item1</Flex>
              <Flex grow={1}>Item2 </Flex>
              <Flex>Item3</Flex>
              <Flex>Item4</Flex>
          </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const Grow = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2>Flex Grow</h2>
      </Flex>
      <Flex className="section" spacing={[0, [10, 5]]}>
        <DirectionRow/>
        <DirectionColumn/>
      </Flex>
    </Fragment>
  );
};

export default Grow;
