import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Animation
const flash = keyframes`
  0% {
    background-position: 20% 0
  }
  100% {
    background-position: -100% 0
  }
`;

// Square wrapper
const Wrapper = styled.div`
  width: ${props => props.length}px;
  min-width: ${props => props.length}px;
  height: ${props => props.length}px;
  background: ${({ backgroundColor, colorStop }) =>
    `linear-gradient(to right, ${backgroundColor} 8%, ${colorStop} 32%, ${backgroundColor} 48%)`};
  background-size: 1000% 100%;
  animation: 1s linear infinite forwards ${flash};
`;

/**
 * Square is a *primitive* component of content shell.
 * @class Square
 * @extends {Component}
 */
class Square extends Component {
  static propTypes = {
    /** Background color of square. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Length of side of square (in px). */
    length: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    backgroundColor: '#eee',
    colorStop: '#ddd',
    length: 64
  };

  render() {
    return <Wrapper {...this.props} />;
  }
}

export default Square;
