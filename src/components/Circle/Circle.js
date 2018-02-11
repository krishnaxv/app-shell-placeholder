import React from 'react';
import styled, { keyframes } from 'styled-components';

const RADIUS = 64;

const flash = keyframes`
  0% {
    background-position: 20% 0
  }

  100% {
    background-position: -100% 0
  }
`;

const Wrapper = styled.div`
  width: ${props => props.radius || RADIUS}px;
  min-width: ${props => props.radius || RADIUS}px;
  height: ${props => props.radius || RADIUS}px;
  border-radius: 50%;
  background: #eee;
  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);
  background-size: 1000% 100%;
  animation: 1s linear infinite forwards ${flash};
`;

const Circle = props => <Wrapper {...props} />;

export default Circle;
