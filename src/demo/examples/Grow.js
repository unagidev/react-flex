import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';

const Grow = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 10px 0', 0]}>
        <h2>Flex Grow</h2>
      </Flex>
      <Flex>
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
              <div className="item">Item1</div>
            </Flex>
            <Flex spacing={[5, 10]} grow={1}>
              <div className="item full-width">Item2</div>
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
              <div className="item full-width">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item full-width">Item3</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item full-width">Item4</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Grow;
