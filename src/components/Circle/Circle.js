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

// Circle wrapper
const Wrapper = styled.div`
  width: ${props => props.radius}px;
  min-width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  border-radius: 50%;
  ${props =>
    props.animation
      ? animationMixin
      : `background-color: ${props.backgroundColor};`};
`;

/**
 * Circle is a *primitive* component of app shell placeholder.
 * @class Circle
 * @extends {Component}
 */
class Circle extends Component {
  static propTypes = {
    /** Background animation. */
    animation: PropTypes.bool,
    /** Background color of circle. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Radius of circle (in px). */
    radius: PropTypes.number
  };

  static defaultProps = {
    animation: true,
    backgroundColor: '#eee',
    colorStop: '#ddd',
    radius: 64
  };

  render() {
    return <Wrapper {...this.props} />;
  }
}

export default Circle;
