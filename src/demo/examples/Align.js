import React, { Fragment } from 'react';
import Flex from '../../lib';
import Code from '../components/Code';

const ITEM_SPACING = { xs: ['10px 0', 0], es: 5 };

const MainAxis = () => {
  return (
    <Fragment>
      <Flex spacing={'20px 0 10px 0'}>
        <h4>Main Axis</h4>
      </Flex>
      <Flex
        className="container"
        spacing={ITEM_SPACING}
        align="start start"
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={ITEM_SPACING}>
        <Code>
          {`<Flex align="start">
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={ITEM_SPACING}
        align="center start"
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={ITEM_SPACING}>
        <Code>
          {`<Flex align="center start">
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={ITEM_SPACING}
        align="end start"
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={ITEM_SPACING}>
        <Code>
          {`<Flex align="end start">
                ...
              </Flex>`}
        </Code>
      </Flex>
    </Fragment>
  );
};

const CrossAxis = () => {
  return (
    <Fragment>
      <Flex spacing={'20px 0 10px 0'}>
        <h4>Cross Axis</h4>
      </Flex>
      <Flex
        className="container"
        spacing={ITEM_SPACING}
        align={['start', 'start']}
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={ITEM_SPACING}>
        <Code>
          {`<Flex align={['start', 'start']}>
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={ITEM_SPACING}
        align={['start', 'center']}
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={ITEM_SPACING}>
        <Code>
          {`<Flex align={['start', 'center']}>
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={ITEM_SPACING}
        align={['start', 'end']}
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={ITEM_SPACING}>
        <Code>
          {`<Flex align={['start', 'end']}>
                ...
              </Flex>`}
        </Code>
      </Flex>
    </Fragment>
  );
};

const BothAxis = () => {
  return (
    <Fragment>
      <Flex spacing={'20px 0'}>
        <h4>Both Axis</h4>
      </Flex>
      <Flex wrap gap={{ xs: 20, es: 8 }} spacing={{ xs: -20, es: -8 }}>
        <Flex basis={50} grow={1}>
          <Flex className="container" fill align="start">
            {[...Array(4)].map((u, i) => (
              <Flex key={i} spacing={[5, 10]}>
                <div className="item">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex basis={50} grow={1}>
          <Code>
            {`<Flex align="start">
                ...
              </Flex>`}
          </Code>
        </Flex>

        <Flex basis={50} grow={1}>
          <Flex className="container" fill align="center">
            {[...Array(4)].map((u, i) => (
              <Flex key={i} spacing={[5, 10]}>
                <div className="item">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex basis={50} grow={1}>
          <Code>
            {`<Flex align="center">
                ...
              </Flex>`}
          </Code>
        </Flex>

        <Flex basis={50} grow={1}>
          <Flex className="container" fill align="end">
            {[...Array(4)].map((u, i) => (
              <Flex key={i} spacing={[5, 10]}>
                <div className="item">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex basis={50} grow={1}>
          <Code>
            {`<Flex align="end">
                ...
              </Flex>`}
          </Code>
        </Flex>
      </Flex>
    </Fragment>
  );
};

const Align = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-align">Align</h2>
      </Flex>
      <Flex className="section" gap={{ xs: 20, es: 8 }} wrap>
        <Flex direction="column" basis={50} grow={1}>
          <MainAxis/>
        </Flex>
        <Flex direction="column" basis={50} grow={1}>
          <CrossAxis/>
        </Flex>
        <Flex direction="column" basis={100}>
          <BothAxis/>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Align;
