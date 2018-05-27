import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { chain, random, times } from 'lodash';

// Primitive building block for Paragraph
import Text from '../Text';

// Paragraph wrapper
const Wrapper = styled.div`
  width: 100%;

  > div {
    margin-bottom: 4px;
  }
`;

/**
 * Paragraph is a *derived* component of app shell placeholder.
 * @class Paragraph
 * @extends {Component}
 */
class Paragraph extends Component {
  static propTypes = {
    /** Background animation. */
    animation: PropTypes.bool,
    /** Background color of paragraph's row. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Height of paragraph's row. */
    height: PropTypes.string,
    /** Row count of paragraph. */
    row: PropTypes.number
  };

  static defaultProps = {
    animation: true,
    backgroundColor: '#eee',
    colorStop: '#ddd',
    height: '14px',
    row: 10
  };

  render() {
    const { row, ...rest } = this.props;

    return (
      <Wrapper>
        {chain(times(row, () => random(90, 100)))
          .map((item, index) => (
            <Text key={index} width={`${item}%`} {...rest} />
          ))
          .value()}
      </Wrapper>
    );
  }
}

export default Paragraph;
