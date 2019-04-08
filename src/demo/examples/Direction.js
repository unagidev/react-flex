import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';
import Code from '../components/Code';

const Direction = () => {
  return (
    <Fragment>
      <Flex spacing={['0 0 20px 0', 0]}>
        <h2 id="flex-direction">Flex direction</h2>
      </Flex>
      <Flex className="section" gap={{xs:20, sm: 10, es:5}} wrap>
        <Flex direction="column" basis={50} grow={1}>
          <Flex spacing={[10, 5, 5, 5]}>
            <h4>Row</h4>
          </Flex>
          <Flex className="container" spacing={{ xs: 10, es: 5 }} grow={1}>
            {[...Array(4)].map((u, i) => (
              <Flex key={i} spacing={[5, 10]}>
                <div className="item primary">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
          <Flex spacing={{ xs: 10, es: 5 }}>
            <Code>
              {`<Flex>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Flex>`}
            </Code>
          </Flex>
        </Flex>
        <Flex direction="column" basis={50} grow={1}>
          <Flex spacing={[5, 10]}>
            <h4>Column</h4>
          </Flex>
          <Flex
            direction="column"
            className="container"
            spacing={{ xs: 10, es: 5 }}
            wrap
          >
            {[...Array(4)].map((u, i) => (
              <Flex key={i} spacing={[5, 10]}>
                <div className="item primary">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
          <Flex spacing={{ xs: 10, es: 5 }}>
            <Code>
              {`<Flex direction="column">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Flex>`}
            </Code>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Direction;
