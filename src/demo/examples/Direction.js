import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';

const Direction = () => {
  return (
    <Fragment>
      <Flex spacing={[5, 10]}>
        <h2>Flex direction</h2>
      </Flex>
      <Flex>
        <Flex direction="column" basis={50}>
          <Flex spacing={[5, 10]}>
            <h4>Row</h4>
          </Flex>
          <Flex className="container" spacing={{ xs: 10, es: 5 }} grow={1}>
            <Flex spacing={[5, 10]}>
              <div className="item">Item1</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item3</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item4</div>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" basis={50}>
          <Flex spacing={[5, 10]}>
            <h4>Column</h4>
          </Flex>
          <Flex
            direction="column"
            className="container"
            spacing={{ xs: 10, es: 5 }}
            wrap
          >
            <Flex spacing={[5, 10]}>
              <div className="item">Item1</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]} grow={1}>
              <div className="item">Item3</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item4</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Direction;
