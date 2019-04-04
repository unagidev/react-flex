import React, { Fragment } from 'react';
import Flex from '../../lib';
import '../App.scss';

const Wrap = () => {
  return (
    <Fragment>
      <Flex spacing={['40px 0 10px 0', 0]}>
        <h2>Flex Wrap</h2>
      </Flex>
      <Flex>
        <Flex direction="column" basis={50}>
          <Flex spacing={[5, 10]}>
            <h4>Direction Row</h4>
          </Flex>
          <Flex
            className="container"
            spacing={{ xs: 10, es: 5 }}
            align={['start', 'start']}
            alignContent="start"
            grow={1}
            wrap
          >
            {[...Array(15)].map((u, i) => (
              <Flex key={i} spacing={5}>
                <div className="item">Item {i + 1}</div>
              </Flex>
            ))}
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
            align="start"
            alignContent="start"
            wrap
            style={{ height: 120 }}
          >
            {[...Array(15)].map((u, i) => (
              <Flex key={i} spacing={5}>
                <div className="item">Item {i + 1}</div>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Wrap;
