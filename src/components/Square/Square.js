import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

// Animation
const flash = keyframes`
  0% {
    background-position: 50% 0
  }
  100% {
    background-position: -50% 0
  }
`;

// Animation mixin
const animationMixin = css`
  background: ${({ backgroundColor, colorStop }) =>
    `linear-gradient(to right, ${backgroundColor} 8%, ${colorStop} 18%, ${backgroundColor} 33%)`};
  background-size: 1000% 100%;
  animation: 1s linear 0s infinite forwards ${flash};
`;

// Square wrapper
const Wrapper = styled.div`
  width: ${props => props.length}px;
  min-width: ${props => props.length}px;
  height: ${props => props.length}px;
  ${props =>
    props.animation
      ? animationMixin
      : `background-color: ${props.backgroundColor};`};
`;

/**
 * Square is a *primitive* component of app shell placeholder.
 * @class Square
 * @extends {Component}
 */
class Square extends Component {
  static propTypes = {
    /** Background animation. */
    animation: PropTypes.bool,
    /** Background color of square. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Length of side of square (in px). */
    length: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    animation: true,
    backgroundColor: '#eee',
    colorStop: '#ddd',
    length: 64
  };

  render() {
    return <Wrapper {...this.props} />;
  }
}

export default Square;
