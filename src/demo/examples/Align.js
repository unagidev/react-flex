import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';

const Align = () => {
  return (
    <Fragment>
      <Flex spacing={[5, 10]}>
        <h2>Flex Align</h2>
      </Flex>
      <Flex>
        <Flex direction="column" basis={50}>
          <Flex spacing={[5, 10]}>
            <h4>Main Axis</h4>
          </Flex>
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align="start"
            style={{ height: 80 }}
          >
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
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align="center"
            style={{ height: 80 }}
          >
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
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align="end"
            style={{ height: 80 }}
          >
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
            <h4>Cross Axis</h4>
          </Flex>
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align={['start', 'start']}
            style={{ height: 80 }}
          >
            <Flex spacing={[5, 10]}>
              <div className="item">Item1</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
          </Flex>
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align={['start', 'center']}
            style={{ height: 80 }}
          >
            <Flex spacing={[5, 10]}>
              <div className="item">Item1</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
          </Flex>
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align={['start', 'end']}
            style={{ height: 80 }}
          >
            <Flex spacing={[5, 10]}>
              <div className="item">Item1</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
            <Flex spacing={[5, 10]}>
              <div className="item">Item2</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Align;
