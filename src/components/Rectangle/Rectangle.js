import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

// Animation
const flash = keyframes`
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -50% 0;
  }
`;

// Animation mixin
const animationMixin = css`
  background: ${({ backgroundColor, colorStop }) =>
    `linear-gradient(to right, ${backgroundColor} 8%, ${colorStop} 18%, ${backgroundColor} 33%)`};
  background-size: 1000% 100%;
  animation: 1s linear 0s infinite forwards normal ${flash};
`;

// Rectangle wrapper
const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  ${props =>
    props.animation
      ? animationMixin
      : `background-color: ${props.backgroundColor};`};
`;

/**
 * Rectangle is a *primitive* component of app shell placeholder.
 * @class Rectangle
 * @extends {Component}
 */
class Rectangle extends Component {
  static propTypes = {
    /** Background animation. */
    animation: PropTypes.bool,
    /** Background color of rectangle. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Height of rectangle. */
    height: PropTypes.string,
    /** Width of rectangle. */
    width: PropTypes.string
  };

  static defaultProps = {
    animation: true,
    backgroundColor: '#eee',
    colorStop: '#ddd',
    height: '14px',
    width: '100%'
  };

  render() {
    return <Wrapper {...this.props} />;
  }
}

export default Rectangle;
