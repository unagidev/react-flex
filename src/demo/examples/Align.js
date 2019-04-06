import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';
import Code from '../components/Code';

const MainAxis = () => {
  return (
    <Flex direction="column" basis={50}>
      <Flex spacing={[5, 10]}>
        <h4>Main Axis</h4>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align="start start"
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align="start">
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align="center start"
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align="center start">
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align="end start"
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align="end start">
                ...
              </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const CrossAxis = () => {
  return (
    <Flex direction="column" basis={50}>
      <Flex spacing={[5, 10]}>
        <h4>Cross Axis</h4>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align={['start', 'start']}
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align={['start', 'start']}>
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align={['start', 'center']}
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align={['start', 'center']}>
                ...
              </Flex>`}
        </Code>
      </Flex>
      <Flex
        className="container"
        spacing={{ xs: 10, es: 5 }}
        align={['start', 'end']}
        style={{ height: 80 }}
      >
        {[...Array(4)].map((u, i) => (
          <Flex key={i} spacing={[5, 10]}>
            <div className="item">Item {i + 1}</div>
          </Flex>
        ))}
      </Flex>
      <Flex spacing={{ xs: 10, es: 5 }}>
        <Code>
          {`<Flex align={['start', 'end']}>
                ...
              </Flex>`}
        </Code>
      </Flex>
    </Flex>
  );
};

const BothAxis = () => {
  return (
    <Flex direction="column" basis={100}>
      <Flex spacing={['20px 5px 0', 10]}>
        <h4>Both Axis</h4>
      </Flex>
      <Flex wrap>
        <Flex
          className="container"
          basis={50}
          spacing={{ xs: 10, es: 5 }}
          align="start"
          grow={1}
        >
          {[...Array(4)].map((u, i) => (
            <Flex key={i} spacing={[5, 10]}>
              <div className="item">Item {i + 1}</div>
            </Flex>
          ))}
        </Flex>
        <Flex spacing={{ xs: 10, es: 5 }} basis={50} grow={1}>
          <Code>
            {`<Flex align="start">
                ...
              </Flex>`}
          </Code>
        </Flex>
      </Flex>
      <Flex wrap>
        <Flex
          className="container"
          basis={50}
          spacing={{ xs: 10, es: 5 }}
          align="center"
          grow={1}
        >
          {[...Array(4)].map((u, i) => (
            <Flex key={i} spacing={[5, 10]}>
              <div className="item">Item {i + 1}</div>
            </Flex>
          ))}
        </Flex>
        <Flex spacing={{ xs: 10, es: 5 }} basis={50} grow={1}>
          <Code>
            {`<Flex align="center">
                ...
              </Flex>`}
          </Code>
        </Flex>
      </Flex>
      <Flex wrap>
        <Flex
          className="container"
          basis={50}
          spacing={{ xs: 10, es: 5 }}
          align="end"
          grow={1}
        >
          {[...Array(4)].map((u, i) => (
            <Flex key={i} spacing={[5, 10]}>
              <div className="item">Item {i + 1}</div>
            </Flex>
          ))}
        </Flex>
        <Flex spacing={{ xs: 10, es: 5 }} basis={50} grow={1}>
          <Code>
            {`<Flex align="end">
                ...
              </Flex>`}
          </Code>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Align = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 20px 0', 0]}>
        <h2 id="flex-align">Align</h2>
      </Flex>
      <Flex className="section" spacing={[0, [10, 5]]} wrap>
        <MainAxis/>
        <CrossAxis/>
        <BothAxis/>
      </Flex>
    </Fragment>
  );
};

export default Align;
