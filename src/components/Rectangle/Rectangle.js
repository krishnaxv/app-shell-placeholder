import React from 'react';
import styled, { keyframes } from 'styled-components';

const HEIGHT = 16;
const WIDTH = '100%';

const flash = keyframes`
  0% {
    background-position: 20% 0
  }

  100% {
    background-position: -100% 0
  }
`;

const Wrapper = styled.div`
  width: ${props => `${props.width}px` || WIDTH};
  height: ${props => props.height || HEIGHT}px;
  background: #eee;
  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);
  background-size: 1000% 100%;
  animation: 1s linear infinite forwards ${flash};
`;

const Rectangle = props => <Wrapper {...props} />;

export default Rectangle;
