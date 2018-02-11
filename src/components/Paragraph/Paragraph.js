import React from 'react';
import styled, { keyframes } from 'styled-components';
import { map, random, times } from 'lodash';

import { Rectangle } from '../../';

const Wrapper = styled.div`
  > div {
    margin-bottom: 4px;
  }
`;

const Paragraph = props => (
  <Wrapper>
    {map(times(10, () => random(90, 100)), (item, index) => (
      <Rectangle key={index} width={item} unit="%" />
    ))}
  </Wrapper>
);

export default Paragraph;
